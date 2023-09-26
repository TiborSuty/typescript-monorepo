import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { OrmModule } from '../../lib/orm/orm.module';
import { NestCaslModule } from '../../lib/casl/casl.module';
import { UserController } from './user.controller';

@Module({
  imports: [OrmModule, NestCaslModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService, UserModule],
})
export class UserModule {}
