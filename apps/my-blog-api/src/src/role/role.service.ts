import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Role } from './role.entity';
import { RolesArgs } from './dto/roles.args';
import { CreateRoleInput } from './dto/create-role.input';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>
  ) {}

  public async findAll(rolesArgs: RolesArgs): Promise<Role[]> {
    return this.rolesRepository.find(rolesArgs);
  }

  public async findOneById(id: string): Promise<Role> {
    const role = await this.rolesRepository.findOne({ where: { id: +id } });
    if (!role) {
      throw new NotFoundException(`Role #${id} not found`);
    }
    return role;
  }

  public async create(createRoleInput: CreateRoleInput): Promise<Role> {
    const role = this.rolesRepository.create({ ...createRoleInput });
    return this.rolesRepository.save(role);
  }

  public async remove(id: string): Promise<any> {
    const role = await this.findOneById(id);
    return this.rolesRepository.remove(role);
  }
}
