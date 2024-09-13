import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ItemsQueryDto {
  @IsOptional()
  @ApiProperty({ required: false })
  name?: string;

  @IsOptional()
  @ApiProperty({ required: false })
  floatUpper?: string;

  @IsOptional()
  @ApiProperty({ required: false })
  floatLower?: string;

  @IsOptional()
  @ApiProperty({ required: false })
  priceUpper?: string;

  @IsOptional()
  @ApiProperty({ required: false })
  priceLower?: string;

  @IsOptional()
  @ApiProperty({ required: false })
  category?: string;

  @IsOptional()
  @ApiProperty({ required: false, enum: ['price', 'float'] })
  orderColumn?: 'price' | 'float';

  @ApiProperty({ required: false, enum: ['asc', 'desc'] })
  @IsOptional()
  orderDirection?: 'asc' | 'desc';

  @IsOptional()
  @ApiProperty({ required: false })
  pageNumber?: string;
}
