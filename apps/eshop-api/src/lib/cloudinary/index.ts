import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CloudinaryModule } from './cloudinary.module';
import { NestConfigModule } from '../config/config.module';

@Global()
@Module({
  imports: [
    CloudinaryModule.forRootAsync(CloudinaryModule, {
      imports: [NestConfigModule],
      useFactory: (configService: ConfigService) => ({
        cloudName: configService.get('cloudinary.cloudName'),
        apiKey: configService.get('cloudinary.apiKey'),
        apiSecret: configService.get('cloudinary.apiSecret'),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [CloudinaryModule],
})
export class NestCloudinaryModule {}
