import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Role } from './role.entity';
import { RoleService } from './role.service';
import { CreateRoleInput } from './dto/create-role.input';
import { RolesArgs } from './dto/roles.args';

@Resolver()
export class RoleResolver {
  constructor(private readonly rolesService: RoleService) {}

  @Query(() => [Role])
  public async findAllRole(@Args() rolesArgs: RolesArgs): Promise<Role[]> {
    return this.rolesService.findAll(rolesArgs);
  }

  @Query(() => Role)
  public async findOneRole(@Args('id') id: string): Promise<Role> {
    const role = await this.rolesService.findOneById(id);
    if (!role) {
      throw new NotFoundException(id);
    }
    return role;
  }

  @Mutation(() => Role)
  public async createRole(
    @Args('createRoleInput') createRoleInput: CreateRoleInput
  ): Promise<Role> {
    return await this.rolesService.create(createRoleInput);
  }

  @Mutation(() => Role)
  public async removeRole(@Args('id') id: string): Promise<Role> {
    return this.rolesService.remove(id);
  }
}
