import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UsersResolver } from './users.resolver';
import { User } from './entities/user.entity';
import { Roles } from '../roles/entities/roles.entity';
import { HashingService } from '../shared/hashing/hashing.service';
import { BcryptService } from '../shared/hashing/bcrypt.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Roles])],
  providers: [
    UserService,
    UsersResolver,
    {
      provide: HashingService,
      useClass: BcryptService,
    },
  ],
})
export class UserModule {}
