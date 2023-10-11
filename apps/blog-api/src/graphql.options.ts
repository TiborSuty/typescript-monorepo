import { GqlOptionsFactory } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { ApolloDriverConfig } from '@nestjs/apollo';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<ApolloDriverConfig> | ApolloDriverConfig {
    return {
      autoSchemaFile: './../code-first/src/schema.gql',
      playground: true,
    };
  }
}
