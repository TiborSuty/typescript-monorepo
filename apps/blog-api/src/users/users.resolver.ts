import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput, UpdateUserInput, UsersArgs } from './dto';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UserService) {}

  @Query(() => [User])
  public async users(@Args() usersArgs: UsersArgs): Promise<User[]> {
    return this.usersService.findAll(usersArgs);
  }

  @Query(() => User)
  public async user(@Args('id') id: string): Promise<User> {
    const user = await this.usersService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Mutation(() => User)
  public async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput
  ): Promise<User> {
    return await this.usersService.create(createUserInput);
  }

  @Mutation(() => User)
  public async updateUser(
    @Args('id') id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput
  ): Promise<User> {
    return await this.usersService.update(id, updateUserInput);
  }

  @Mutation(() => User)
  public async removeUser(@Args('id') id: string): Promise<any> {
    return this.usersService.remove(id);
  }
}
