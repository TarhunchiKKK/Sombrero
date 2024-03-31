import { PartialType } from '@nestjs/mapped-types';
import { CreateAdvertisementDto } from './create-advertisement.dto';
import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/users/entities/user.entity';

export class UpdateAdvertisementDto {
    title?: string;
    description?: string;
    price?: number;
    photo?: string;
    category?: Category;
    buyer?: User;
}
