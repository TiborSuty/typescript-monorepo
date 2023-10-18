import { Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common';
import { Profile } from 'passport';
import { SocialProfile } from '../shared/decorators/social-profile.decorator';
import { SocialAuthGuard } from '../shared/guards/social-auth.guard';
import { ValidateInput } from '../shared/decorators/validate-input.decorator';
import { LoginUserResultUnion } from './dto/login-user.result';
import { LoginUserInput } from './dto/login-user.input';
import { RegisterUserResultUnion } from './dto/register-user.result';
import { RegisterUserInput } from './dto/register-user.input';
import { LoginSocialResultUnion } from './dto/login-social.result';
import { LoginSocialInput } from './dto/login-social.input';
import { RegisterSocialResultUnion } from './dto/register-social.result';
import { RegisterSocialInput } from './dto/register-social.input';
import { Input } from '../shared/graphql/args/input.args';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation((_returns) => [LoginUserResultUnion])
  async login(
    @Input() input: LoginUserInput
  ): Promise<Array<typeof LoginUserResultUnion>> {
    const result = await this.authService.validateCredentials(
      input.username,
      input.password
    );

    if (result.isError()) {
      return [result.value];
    }

    const authUser = await this.authService.signToken(result.value);
    return [authUser];
  }

  @ValidateInput()
  @Mutation((_returns) => [RegisterUserResultUnion])
  async register(
    @Input() input: RegisterUserInput
  ): Promise<Array<typeof RegisterUserResultUnion>> {
    const result = await this.authService.registerUser(input);

    if (result.isError()) {
      return [result.value];
    }

    const authUser = await this.authService.signToken(result.value);
    return [authUser];
  }

  @UseGuards(SocialAuthGuard)
  @Mutation((_returns) => [LoginSocialResultUnion])
  async loginSocial(
    @SocialProfile() profile: Profile,
    @Input() input: LoginSocialInput
  ): Promise<Array<typeof LoginSocialResultUnion>> {
    const social = await this.authService.loginSocial(profile, input.provider);

    if (social.isError()) {
      return [social.value];
    }

    const authUser = await this.authService.signToken(social.value);
    return [authUser];
  }

  @UseGuards(SocialAuthGuard)
  @Mutation((_returns) => [RegisterSocialResultUnion])
  async registerSocial(
    @SocialProfile() profile: Profile,
    @Input() input: RegisterSocialInput
  ): Promise<Array<typeof RegisterSocialResultUnion>> {
    const social = await this.authService.registerSocial(
      profile,
      input.username,
      input.provider
    );

    if (social.isError()) {
      return [social.value];
    }

    // @ts-ignore
    const authUser = await this.authService.signToken(social.value);
    return [authUser];
  }
}
