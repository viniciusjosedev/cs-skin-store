import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ItemsQueryDto } from '@/modules/items/items.query.dto';
import { ItemsService } from '@/modules/items/items.service';
import { Item } from '@prisma/client';

@Controller()
export class ItemsController {
  constructor(private readonly ItemsService: ItemsService) {}

  @Get('/items')
  async getItems(
    @Query(
      new ValidationPipe({
        whitelist: true,
      }),
    )
    query: ItemsQueryDto,
  ): Promise<{ hasMore: boolean; items: Item[] }> {
    const { hasMore, items } = await this.ItemsService.getFilteredItems(query);

    return {
      hasMore,
      items,
    };
  }
}
