import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { User } from '../user/user.entity';
import { PostsArgs } from './dto/posts.args';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  public async findAll(postsArgs: PostsArgs): Promise<Post[]> {
    const { limit, offset } = postsArgs;
    return this.postsRepository.find({
      relations: ['users'],
      skip: offset,
      take: limit,
    });
  }

  public async findOneById(id: string): Promise<Post> {
    const post = await this.postsRepository.findOne({
      where: {
        id: +id,
      },
      relations: ['users'],
    });

    if (!post) {
      throw new NotFoundException(`Post #${id} not found`);
    }
    return post;
  }

  public async create(createPostInput: CreatePostInput): Promise<Post> {
    const users = await Promise.all(
      createPostInput.users?.map((name) => this.preloadUserByName(name))
    );

    const post = this.postsRepository.create({ ...createPostInput, users });
    return this.postsRepository.save(post);
  }

  public async update(
    id: string,
    updatePostInput: UpdatePostInput
  ): Promise<Post> {
    const users =
      updatePostInput.users &&
      (await Promise.all(
        updatePostInput.users?.map((name) => this.preloadUserByName(name))
      ));

    const user = await this.postsRepository.preload({
      id: +id,
      ...updatePostInput,
      users,
    });

    if (!user) {
      throw new NotFoundException(`Post #${id} not found`);
    }
    return this.postsRepository.save(user);
  }

  private async preloadUserByName(name: string): Promise<User> {
    const existingUser = await this.usersRepository.findOne({
      where: { name: name },
    });
    if (existingUser) {
      return existingUser;
    }
    return this.usersRepository.create({ name });
  }
}
