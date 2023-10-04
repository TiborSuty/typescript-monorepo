import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import redisStore from 'cache-manager-redis-store';
import { CacheService } from './cache.service';
import { CacheModule } from '@nestjs/cache-manager';
import { NestConfigModule } from '../config/config.module';

@Global()
@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [NestConfigModule],
      // @ts-ignore
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
        url: configService.get('redis.uri'),
        ttl: configService.get<number>('redis.ttl', 10),
        db: 0,
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [CacheModule, CacheService],
  providers: [CacheService],
})
export class NestCacheModule {}
