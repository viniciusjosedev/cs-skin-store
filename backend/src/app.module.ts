// src/app.module.ts
import { Module } from '@nestjs/common';
import { ItemsModule } from '@/modules/items/items.module';

@Module({
  imports: [ItemsModule],
})
export class AppModule {}
