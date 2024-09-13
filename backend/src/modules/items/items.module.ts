import { Module } from '@nestjs/common';
import { DatabaseService } from '@/database/database.service';
import { ItemsService } from '@/modules/items/items.service';
import { ItemsController } from '@/modules/items/items.controller';

@Module({
  controllers: [ItemsController],
  providers: [DatabaseService, ItemsService],
})
export class ItemsModule {}
