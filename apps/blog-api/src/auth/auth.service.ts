import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthUserResponse } from './responses/auth-user.response';
import { RegisterUserInput } from './inputs/register-user.input';
import { Profile } from 'passport';
import { Auth, SocialProviderTypes } from './auth.entity';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { CredentialsTakenError } from './responses/credentials-taken.error';
import { InvalidCredentialsError } from './responses/invalid-credentials.error';
import { Either, either } from '../common/utils/either';
import { SocialAlreadyAssignedError } from './responses/social-already-assigned.error';
import { SocialNotRegisteredError } from './responses/social-not-registered.error';
import { User } from '../users/entities/user.entity';
import { UserService } from '../users/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>
  ) {}

  async validateCredentials(
    username: string,
    password: string
  ): Promise<Either<InvalidCredentialsError, User>> {
    const user = await this.userService.findOneByUsername(username);
    if (!(await user?.comparePassword(password))) {
      return either.error(
        new InvalidCredentialsError({
          providedUsername: username,
        })
      );
    }
    return either.of(user);
  }

  async signToken(user: User): Promise<AuthUserResponse> {
    const payload = { username: user.username, sub: user.id };
    return new AuthUserResponse({
      user,
      token: this.jwtService.sign(payload),
    });
  }

  async registerUser(
    user: RegisterUserInput
  ): Promise<Either<CredentialsTakenError, User>> {
    if (await this.userService.existsByCredentials(user)) {
      return either.error(
        new CredentialsTakenError({
          providedEmail: user.email,
          providedUsername: user.username,
        })
      );
    }
    const returnedUser = await this.userService.create(user);
    return either.of(returnedUser);
  }

  async loginSocial(
    profile: Profile,
    provider: SocialProviderTypes
  ): Promise<Either<SocialNotRegisteredError, User>> {
    const user = await this.userService.findOneBySocialId(profile.id);

    if (!user) {
      return either.error(
        new SocialNotRegisteredError({
          provider,
        })
      );
    }

    return either.of(user);
  }

  async registerSocial(
    profile: Profile,
    username: string,
    provider: SocialProviderTypes
  ) {
    const email = profile.emails![0].value;
    const socialId = profile.id;

    const count = await this.authRepository
      .createQueryBuilder('provider')
      .where('provider.socialId = :socialId', { socialId })
      .getCount();

    if (count > 0) {
      return either.error(
        new SocialAlreadyAssignedError({
          provider,
        })
      );
    }

    if (
      await this.userService.existsByCredentials({
        email,
        username,
      })
    ) {
      return either.error(
        new CredentialsTakenError({
          providedEmail: email,
          providedUsername: username,
        })
      );
    }

    const user = this.authRepository.manager.transaction(
      async (transactionalManager) => {
        const createdUser = await transactionalManager.create(User, {
          username,
          email,
          password: randomStringGenerator(),
        });
        const savedUser = await transactionalManager.save(createdUser);
        await transactionalManager.save(Auth, {
          user: savedUser,
          ...{ provider, socialId },
        });
        return savedUser;
      }
    );

    return either.of(user);
  }
}
