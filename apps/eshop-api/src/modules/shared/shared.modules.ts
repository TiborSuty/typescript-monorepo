import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { NestI18nModule } from '../../lib/i18n/i18n.module';
import { NestConfigModule } from '../../lib/config/config.module';
import { NestCloudinaryModule } from '../../lib/cloudinary';
import { NestCacheModule } from '../../lib/cache/cache.module';
import { TestModule } from '../test/test.module';

@Module({
  imports: [
    TestModule,
    UserModule,
    NestI18nModule,
    NestConfigModule,
    NestCloudinaryModule,
    NestCacheModule,
  ],
})
export class SharedModule {}
