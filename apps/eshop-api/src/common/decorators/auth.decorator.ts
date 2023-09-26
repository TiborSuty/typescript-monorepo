import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { PoliciesGuard } from '../../lib/casl/PoliciesGuard';
import { JwtAuthGuard } from '../guards/jwt.guard';

export function Auth() {
  return applyDecorators(
    UseGuards(JwtAuthGuard, PoliciesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'No auth token' })
  );
}
