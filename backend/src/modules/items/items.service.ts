import { DatabaseService } from '@/database/database.service';
import { Injectable } from '@nestjs/common';
import { Item, Prisma } from '@prisma/client';
import { ItemsQueryDto } from '@/modules/items/items.query.dto';

@Injectable()
export class ItemsService {
  constructor(private readonly DatabaseService: DatabaseService) {}

  async getFilteredItems(filters: ItemsQueryDto): Promise<Item[]> {
    const where: Prisma.ItemWhereInput = {};
    const orderBy: Prisma.ItemOrderByWithAggregationInput = {};
    const take = 200;
    const skip = filters.pageNumber ? (+filters.pageNumber - 1) * take : 0;

    if (filters.name) {
      where.name = {
        contains: filters.name,
        mode: 'insensitive',
      };
    }

    if (filters.float) {
      where.float = {
        startsWith: filters.float,
        mode: 'insensitive',
      };
    }

    if (filters.priceUpper) {
      where.price = {
        gte: +filters.priceUpper,
      };
    }

    if (filters.priceLower) {
      where.price = {
        lte: +filters.priceLower,
      };
    }

    if (filters.category) {
      where.category = filters.category;
    }

    if (filters.orderColumn) {
      orderBy[filters.orderColumn] = filters.orderDirection || 'asc';
    }

    return this.DatabaseService.item.findMany({
      where: where,
      orderBy,
      take,
      skip,
    });
  }
}
