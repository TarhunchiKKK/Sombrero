import { Category } from 'src/categories/entities/category.entity';
import { Advertisement } from '../entities/advertisement.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ChangeAdvertisementCategoryDto {
    @ApiProperty({ type: () => Advertisement, description: 'Advertisement (need to extract advertisement id)' })
    advertisement: Advertisement;

    @ApiProperty({ type: () => Category, description: 'Category (need to extract category id)' })
    category: Category;
}
