import { createUnionType } from '@nestjs/graphql';
import { AuthUserResponse } from './auth-user.response';
import { SocialNotRegisteredError } from './social-not-registered.error';

export const LoginSocialResultUnion = createUnionType({
  name: 'LoginSocialResult',
  types: () => [AuthUserResponse, SocialNotRegisteredError],
});
