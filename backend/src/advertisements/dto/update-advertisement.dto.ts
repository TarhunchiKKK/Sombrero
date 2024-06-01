import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';
import { Category } from 'src/categories/entities/category.entity';

export class UpdateAdvertisementDto {
    @ApiProperty({ example: 'Велосипед', description: 'Advertisement title' })
    @IsOptional()
    @IsNotEmpty({ message: "Title can't be empty" })
    title?: string;

    @ApiProperty({ example: ' На этом велосипеде вы...', description: 'Advertisement description' })
    @IsOptional()
    @IsNotEmpty({ message: "Description can't be empty" })
    description?: string;

    @ApiProperty({ example: '200', description: 'Advertisement price' })
    @IsOptional()
    @IsNotEmpty({ message: "Price can't be empty" })
    @IsPositive({ message: 'Price should be more than zero' })
    price?: number;

    @ApiProperty({ type: () => Category, description: 'Advertisement category' })
    @IsOptional()
    @IsNotEmpty({ message: "Category can't be empty" })
    category?: Category;
}
