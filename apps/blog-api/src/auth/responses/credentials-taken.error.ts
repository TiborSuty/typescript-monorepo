import { Field, ObjectType } from '@nestjs/graphql';
import { ErrorResponse } from '../../common/types/error-response.interface';

@ObjectType({
  implements: [ErrorResponse],
})
export class CredentialsTakenError extends ErrorResponse {
  @Field()
  providedUsername: string;

  @Field()
  providedEmail: string;

  constructor(partial?: Partial<CredentialsTakenError>) {
    super('Credentials are already taken.');
    Object.assign(this, partial);
  }
}
