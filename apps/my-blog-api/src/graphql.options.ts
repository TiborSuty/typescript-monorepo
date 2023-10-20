import { GqlOptionsFactory } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<ApolloDriverConfig> | ApolloDriverConfig {
    return {
      // autoSchemaFile: '../../../schema.gql',
      autoSchemaFile: join(__dirname, '../../../', 'schema.gql'),
      playground: true,
    };
  }
}
