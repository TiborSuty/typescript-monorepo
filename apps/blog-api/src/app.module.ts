import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PostsModule } from './posts/posts.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { TypeOrmConfigService } from './config/typeorm.config';
import { GraphqlConfigService } from './config/graphql.config';
import { envSchema } from './config/env.schema';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: !!process.env.CI,
      envFilePath: join(__dirname, '..', '..', '.env'),
      validationSchema: envSchema,
    }),
    // ConfigModule.forRoot(),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => ({
    //     type: 'postgres',
    //     host: config.get<string>('DATABASE_HOST', '127.0.0.1'),
    //     port: config.get<number>('DATABASE_PORT', 6666),
    //     username: config.get<string>('DATABASE_USER', 'JANKO'),
    //     password: config.get<string>('DATABASE_PASSWORD', 'HRASKO'),
    //     database: config.get<string>('DATABASE_NAME', 'TEST'),
    //     synchronize: true,
    //     autoLoadEntities: true,
    //   }),
    // }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    // GraphQLModule.forRootAsync<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   useClass: GraphqlOptions,
    // }),
    GraphQLModule.forRootAsync({
      useClass: GraphqlConfigService,
    }),
    UsersModule,
    RolesModule,
    PostsModule,
  ],
})
export class AppModule {}
