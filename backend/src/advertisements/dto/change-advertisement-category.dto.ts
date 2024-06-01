import { Category } from 'src/categories/entities/category.entity';
import { Advertisement } from '../entities/advertisement.entity';

export class ChangeAdvertisementCategoryDto {
    advertisement: Advertisement;
    category: Category;
}
