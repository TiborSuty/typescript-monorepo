import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { ImageMulterOption } from '../misc/misc';

export function ApiFile(name: string) {
  return applyDecorators(
    UseInterceptors(FileInterceptor(name, ImageMulterOption)),
    ApiConsumes('multipart/form-data')
  );
}
