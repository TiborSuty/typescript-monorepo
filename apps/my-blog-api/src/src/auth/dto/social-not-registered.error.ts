import { Field, ObjectType } from '@nestjs/graphql';
import { SocialProviderTypes } from '../auth.entity';
import { ErrorResponse } from '../../shared/types/error-response.interface';

@ObjectType({
  implements: [ErrorResponse],
})
export class SocialNotRegisteredError extends ErrorResponse {
  @Field((_type) => SocialProviderTypes)
  provider: SocialProviderTypes;

  constructor(partial?: Partial<SocialNotRegisteredError>) {
    super('No account registered with this social provider.');
    Object.assign(this, partial);
  }
}
