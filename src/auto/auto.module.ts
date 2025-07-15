import { Module } from '@nestjs/common';
import { AutoService } from './auto.service';
import { AutoResolver } from './auto.resolver';

@Module({
  providers: [AutoResolver, AutoService],
})
export class AutoModule {}
