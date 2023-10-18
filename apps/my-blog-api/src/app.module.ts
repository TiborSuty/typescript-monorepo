import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmConfigService } from './src/shared/config/typeorm.config';
import { GraphqlConfigService } from './src/shared/config/graphql.config';
import { envSchema } from './src/shared/config/env.schema';
import { UserModule } from './src/user/user.module';
import { RoleModule } from './src/role/role.module';
import { PostModule } from './src/post/post.module';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(
        __dirname,
        '../../../',
        'apps/my-blog-api/src/env/.env'
      ),
      // validationSchema: envSchema,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    GraphQLModule.forRootAsync({
      useClass: GraphqlConfigService,
      driver: ApolloDriver,
    }),
    UserModule,
    RoleModule,
    PostModule,
  ],
})
export class AppModule {}
