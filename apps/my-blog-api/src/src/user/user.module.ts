import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UsersResolver } from './users.resolver';
import { HashingService } from '../shared/hashing/hashing.service';
import { BcryptService } from '../shared/hashing/bcrypt.service';
import { User } from './user.entity';
import { Role } from '../role/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
  providers: [
    UserService,
    UsersResolver,
    {
      provide: HashingService,
      useClass: BcryptService,
    },
  ],
  exports: [TypeOrmModule, UserService],
})
export class UserModule {}
