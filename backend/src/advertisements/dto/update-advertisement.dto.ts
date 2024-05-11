import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';
import { Category } from 'src/categories/entities/category.entity';

export class UpdateAdvertisementDto {
    @IsOptional()
    @IsNotEmpty({ message: "Title can't be empty" })
    title?: string;

    @IsOptional()
    @IsNotEmpty({ message: "Description can't be empty" })
    description?: string;

    @IsOptional()
    @IsNotEmpty({ message: "Price can't be empty" })
    @IsPositive({ message: 'Price should be more than zero' })
    price?: number;

    @IsOptional()
    @IsNotEmpty({ message: "Path to photo can't be emty" })
    photo?: string;

    @IsOptional()
    @IsNotEmpty({ message: "Category can't be empty" })
    category?: Category;
}
