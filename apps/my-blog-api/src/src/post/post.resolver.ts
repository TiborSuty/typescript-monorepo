import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Post } from './post.entity';
import { PostService } from './post.service';
import { PostsArgs } from './dto/posts.args';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver()
export class PostResolver {
  constructor(private readonly postsService: PostService) {}

  @Query(() => [Post])
  public async posts(@Args() postsArgs: PostsArgs): Promise<Post[]> {
    return this.postsService.findAll(postsArgs);
  }

  @Query(() => Post)
  public async post(@Args('id') id: string): Promise<Post> {
    return await this.postsService.findOneById(id);
  }

  @Mutation(() => Post)
  public async createPost(
    @Args('createPostInput') createPostInput: CreatePostInput
  ): Promise<Post> {
    return await this.postsService.create(createPostInput);
  }

  @Mutation(() => Post)
  public async updatePost(
    @Args('id') id: string,
    @Args('updatePostInput') updatePostInput: UpdatePostInput
  ): Promise<Post> {
    return await this.postsService.update(id, updatePostInput);
  }
}
