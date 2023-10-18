import { createUnionType } from '@nestjs/graphql';
import { AuthUserResponse } from './auth-user.response';
import { InvalidInputError } from '../../shared/types/invalid-input.error';
import { CredentialsTakenError } from './credentials-taken.error';

export const RegisterUserResultUnion = createUnionType({
  name: 'RegisterUserResult',
  types: () => [AuthUserResponse, InvalidInputError, CredentialsTakenError],
});
