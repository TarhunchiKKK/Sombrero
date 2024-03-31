import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateAdvertisementDto {
    title: string;
    description: string;
    price: number;
    saleStatus: boolean = false;
    photo: string;
    category: Category;
    vendor: User;
    buyer: User = null;
}
