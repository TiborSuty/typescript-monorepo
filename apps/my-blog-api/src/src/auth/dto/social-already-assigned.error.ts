import { Field, ObjectType } from '@nestjs/graphql';
import { SocialProviderTypes } from '../auth.entity';
import { ErrorResponse } from '../../shared/types/error-response.interface';

@ObjectType({
  implements: [ErrorResponse],
})
export class SocialAlreadyAssignedError extends ErrorResponse {
  @Field((_type) => SocialProviderTypes)
  provider: SocialProviderTypes;

  constructor(partial?: Partial<SocialAlreadyAssignedError>) {
    super('This social account is already assigned to another account');
    Object.assign(this, partial);
  }
}
