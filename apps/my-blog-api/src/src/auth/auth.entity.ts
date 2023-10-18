import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

import { registerEnumType } from '@nestjs/graphql';
import { User } from '../user/user.entity';

export enum SocialProviderTypes {
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
}

registerEnumType(SocialProviderTypes, {
  name: 'SocialAuthProviders',
});

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ enum: SocialProviderTypes })
  provider: SocialProviderTypes;

  @Column({ unique: true })
  socialId: string;

  @ManyToOne((_type) => User, (user) => user.socialProviders)
  user: User;

  @CreateDateColumn()
  created: Date;
}
