import { IsNotEmpty, IsPositive } from 'class-validator';
import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateAdvertisementDto {
    @IsNotEmpty({ message: 'Title should be provided' })
    title: string;

    @IsNotEmpty({ message: 'Description should be provided' })
    description: string;

    @IsNotEmpty({ message: 'Price should be provided' })
    @IsPositive({ message: 'Price should be more than zero' })
    price: number;

    saleStatus: boolean = false;

    @IsNotEmpty({ message: 'Category should be provided' })
    category: Category;

    @IsNotEmpty({ message: 'Vendor should be provided' })
    vendor: User;
    buyer: User = null;
}
