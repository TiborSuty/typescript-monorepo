import { createUnionType } from '@nestjs/graphql';
import { AuthUserResponse } from './auth-user.response';
import { InvalidCredentialsError } from './invalid-credentials.error';

export const LoginUserResultUnion = createUnionType({
  name: 'LoginUserResult',
  types: () => [AuthUserResponse, InvalidCredentialsError],
});
