import { createUnionType } from '@nestjs/graphql';
import { AuthUserResponse } from './auth-user.response';
import { SocialAlreadyAssignedError } from './social-already-assigned.error';
import { CredentialsTakenError } from './credentials-taken.error';

export const RegisterSocialResultUnion = createUnionType({
  name: 'RegisterSocialResult',
  types: () => [
    AuthUserResponse,
    SocialAlreadyAssignedError,
    CredentialsTakenError,
  ],
});
