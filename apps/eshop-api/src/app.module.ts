import { Module } from '@nestjs/common';
import { SharedModule } from './modules/shared/shared.modules';

@Module({
  imports: [SharedModule],
  providers: [],
})
export class AppModule {}
