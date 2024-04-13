import { Advertisement } from 'src/advertisements/entities/advertisement.entity';

export class CreateCategoryDto {
    title: string;
    advertisements: Advertisement[];
}
