import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive } from 'class-validator';
import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateAdvertisementDto {
    @ApiProperty({ example: 'Велосипед', description: 'Advertisement title' })
    @IsNotEmpty({ message: 'Title should be provided' })
    title: string;

    @ApiProperty({ example: ' На этом велосипеде вы...', description: 'Advertisement description' })
    @IsNotEmpty({ message: 'Description should be provided' })
    description: string;

    @ApiProperty({ example: '200', description: 'Advertisement price' })
    @IsNotEmpty({ message: 'Price should be provided' })
    @IsPositive({ message: 'Price should be more than zero' })
    price: number;

    @ApiProperty({ example: 'false', description: 'Is advertisemen bought by somebody' })
    saleStatus: boolean = false;

    @ApiProperty({ type: () => Category, description: 'Advertisement category' })
    @IsNotEmpty({ message: 'Category should be provided' })
    category: Category;

    @ApiProperty({ type: () => User, description: 'Product vendor' })
    @IsNotEmpty({ message: 'Vendor should be provided' })
    vendor: User;

    @ApiProperty({ type: () => User, description: 'User who bought this product' })
    buyer: User = null;
}
