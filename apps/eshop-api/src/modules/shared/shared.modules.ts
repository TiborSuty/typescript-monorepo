import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { NestI18nModule } from '../../lib/i18n/i18n.module';
import { NestConfigModule } from '../../lib/config/config.module';

@Module({
  imports: [UserModule, NestI18nModule, NestConfigModule],
})
export class SharedModule {}
