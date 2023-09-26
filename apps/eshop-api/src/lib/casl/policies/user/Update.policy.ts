import { Request } from 'express';
import { Action, AppAbility } from '../../casl-ability.factory';
import { IPolicyHandler } from '../../IPolicyHandler';
import { User } from '../../../../modules/user/user.entity';

export class UpdateUserPolicyHandler implements IPolicyHandler {
  handle(request: Request, ability: AppAbility) {
    const index = request.params.idx;

    return ability.can(Action.Update, new User({ idx: index }));
  }
}
