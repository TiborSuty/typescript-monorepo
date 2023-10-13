import { createUnionType } from '@nestjs/graphql';

import { AuthUserResponse } from '../responses/auth-user.response';
import { CredentialsTakenError } from '../responses/credentials-taken.error';
import { InvalidInputError } from '../../common/types/invalid-input.error';

export const RegisterUserResultUnion = createUnionType({
  name: 'RegisterUserResult',
  types: () => [AuthUserResponse, InvalidInputError, CredentialsTakenError],
});
