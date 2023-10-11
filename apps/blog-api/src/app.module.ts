import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PostsModule } from './posts/posts.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DATABASE_HOST', '127.0.0.1'),
        port: config.get<number>('DATABASE_PORT', 6666),
        username: config.get<string>('DATABASE_USER', 'JANKO'),
        password: config.get<string>('DATABASE_PASSWORD', 'HRASKO'),
        database: config.get<string>('DATABASE_NAME', 'TEST'),
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GraphqlOptions,
    }),
    UsersModule,
    RolesModule,
    PostsModule,
  ],
})
export class AppModule {}
