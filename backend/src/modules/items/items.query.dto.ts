import { IsOptional } from 'class-validator';

export class ItemsQueryDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  floatUpper?: string;

  @IsOptional()
  floatLower?: string;

  @IsOptional()
  priceUpper?: string;

  @IsOptional()
  priceLower?: string;

  @IsOptional()
  category?: string;

  @IsOptional()
  orderColumn?: 'price' | 'float';

  @IsOptional()
  orderDirection?: 'asc' | 'desc';

  @IsOptional()
  pageNumber?: string;
}
