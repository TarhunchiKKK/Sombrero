import { Category } from 'src/categories/entities/category.entity';

export class UpdateAdvertisementDto {
    title?: string;
    description?: string;
    price?: number;
    photo?: string;
    category?: Category;
}
