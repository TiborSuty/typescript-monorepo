import { applyDecorators, Controller, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { capitalize } from 'helper-fns';
import { Auth } from './auth.decorator';
import { CacheInterceptor } from '@nestjs/cache-manager';

export function ControllerDecorator(name: string, secured = true) {
  const decsToApply = [
    ApiTags(capitalize(name)),
    Controller(name),
    UseInterceptors(CacheInterceptor),
  ];

  if (secured) {
    decsToApply.push(Auth());
  }

  return applyDecorators(...decsToApply);
}
