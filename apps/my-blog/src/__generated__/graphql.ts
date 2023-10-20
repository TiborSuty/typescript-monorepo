/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthUserResponse = {
  __typename?: 'AuthUserResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type CreatePostInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
  users?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateRoleInput = {
  name: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  username: Scalars['String']['input'];
};

export type CredentialsTakenError = ErrorResponse & {
  __typename?: 'CredentialsTakenError';
  message: Scalars['String']['output'];
  providedEmail: Scalars['String']['output'];
  providedUsername: Scalars['String']['output'];
};

export type ErrorResponse = {
  message: Scalars['String']['output'];
};

export type InputError = {
  __typename?: 'InputError';
  field: Scalars['String']['output'];
  messages: Array<Scalars['String']['output']>;
};

export type InvalidCredentialsError = ErrorResponse & {
  __typename?: 'InvalidCredentialsError';
  message: Scalars['String']['output'];
  providedUsername: Scalars['String']['output'];
};

export type InvalidInputError = ErrorResponse & {
  __typename?: 'InvalidInputError';
  errors: Array<InputError>;
  message: Scalars['String']['output'];
};

export type LoginSocialInput = {
  accessToken: Scalars['String']['input'];
  provider: SocialAuthProviders;
};

export type LoginSocialResult = AuthUserResponse | SocialNotRegisteredError;

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type LoginUserResult = AuthUserResponse | InvalidCredentialsError;

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createRole: Role;
  createUser: User;
  login: Array<LoginUserResult>;
  loginSocial: Array<LoginSocialResult>;
  register: Array<RegisterUserResult>;
  registerSocial: Array<RegisterSocialResult>;
  removeRole: Role;
  removeUser: User;
  updatePost: Post;
  updateUser: User;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateRoleArgs = {
  createRoleInput: CreateRoleInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  input: LoginUserInput;
};


export type MutationLoginSocialArgs = {
  input: LoginSocialInput;
};


export type MutationRegisterArgs = {
  input: RegisterUserInput;
};


export type MutationRegisterSocialArgs = {
  input: RegisterSocialInput;
};


export type MutationRemoveRoleArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['String']['input'];
  updatePostInput: UpdatePostInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  updateUserInput: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  findAllRole: Array<Role>;
  findOneRole: Role;
  post: Post;
  posts: Array<Post>;
  user: User;
  users: Array<User>;
};


export type QueryFindAllRoleArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryFindOneRoleArgs = {
  id: Scalars['String']['input'];
};


export type QueryPostArgs = {
  id: Scalars['String']['input'];
};


export type QueryPostsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};

export type RegisterSocialInput = {
  accessToken: Scalars['String']['input'];
  provider: SocialAuthProviders;
  username: Scalars['String']['input'];
};

export type RegisterSocialResult = AuthUserResponse | CredentialsTakenError | SocialAlreadyAssignedError;

export type RegisterUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type RegisterUserResult = AuthUserResponse | CredentialsTakenError | InvalidInputError;

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SocialAlreadyAssignedError = ErrorResponse & {
  __typename?: 'SocialAlreadyAssignedError';
  message: Scalars['String']['output'];
  provider: SocialAuthProviders;
};

export enum SocialAuthProviders {
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE'
}

export type SocialNotRegisteredError = ErrorResponse & {
  __typename?: 'SocialNotRegisteredError';
  message: Scalars['String']['output'];
  provider: SocialAuthProviders;
};

export type UpdatePostInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string }> };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;