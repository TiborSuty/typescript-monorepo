import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UsersArgs } from './dto/users.args';
import { Role } from '../role/role.entity';
import { HashingService } from '../shared/hashing/hashing.service';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>,
    private readonly hashingService: HashingService
  ) {}

  public async findAll(usersArgs: UsersArgs): Promise<User[]> {
    const { limit, offset } = usersArgs;
    return this.usersRepository.find({
      relations: ['roles'],
      skip: offset,
      take: limit,
    });
  }

  public async existsByCredentials(
    user: Pick<User, 'email' | 'username'>
  ): Promise<boolean> {
    const count = await this.usersRepository.count({
      where: {
        username: user.username,
        email: user.email,
      },
    });

    return count > 0;
  }

  public async findOneByUsername(username: string): Promise<User> {
    return this.usersRepository.findOneOrFail({
      where: {
        username,
      },
      relations: ['roles'],
    });
  }

  public async findOneBySocialId(socialId: string): Promise<User> {
    return this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.socialProviders', 'providers')
      .where('providers.socialId = :socialId', { socialId })
      .getOne();
  }

  public async findOneById(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: {
        id: +id,
      },
      relations: ['roles'],
    });

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  public async create(createUserInput: CreateUserInput): Promise<User> {
    createUserInput.password = await this.hashingService.hash(
      createUserInput.password
    );

    const roles = await Promise.all(
      createUserInput.roles.map((name) => this.preloadRoleByName(name))
    );

    const user = this.usersRepository.create({ ...createUserInput, roles });
    return this.usersRepository.save(user);
  }

  public async update(
    id: string,
    updateUserInput: UpdateUserInput
  ): Promise<User> {
    updateUserInput.password = await this.hashingService.hash(
      updateUserInput.password
    );

    const roles =
      updateUserInput.roles &&
      (await Promise.all(
        updateUserInput.roles.map((name) => this.preloadRoleByName(name))
      ));

    const user = await this.usersRepository.preload({
      id: +id,
      ...updateUserInput,
      roles,
    });

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return this.usersRepository.save(user);
  }

  public async remove(id: string): Promise<any> {
    const user = await this.findOneById(id);
    return this.usersRepository.remove(user);
  }

  private async preloadRoleByName(name: string): Promise<Role> {
    const existingRole = await this.rolesRepository.findOne({
      where: { name: name },
    });
    if (existingRole) {
      return existingRole;
    }
    return this.rolesRepository.create({ name });
  }
}
