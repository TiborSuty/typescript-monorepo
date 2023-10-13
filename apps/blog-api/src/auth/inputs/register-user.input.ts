import { Field, InputType, PickType } from '@nestjs/graphql';

import { MinLength } from 'class-validator';
import { User } from '../../users/entities/user.entity';

@InputType()
export class RegisterUserInput extends PickType(
  User,
  ['username', 'email'],
  InputType
) {
  @Field()
  @MinLength(6)
  password: string;
}
