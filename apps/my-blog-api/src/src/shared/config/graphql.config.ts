import { ApolloDriver } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';

@Injectable()
export class GraphqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): GqlModuleOptions {
    return {
      autoSchemaFile: join(__dirname, '../../../', 'schema.gql'),
      context: ({ req, res }) => ({ req, res }),
      // debug: process.env.NODE_ENV === 'development',
      // playground: process.env.NODE_ENV === 'development',
      driver: ApolloDriver,
    };
  }
}
