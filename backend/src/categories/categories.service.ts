import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { categories } from './data/categories';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private readonly categoriesRepository: Repository<Category>,
    ) {
        Promise.resolve(this.categoriesRepository.count()).then((count) => {
            if (count === 0) {
                this.categoriesRepository.save(categories);
            }
        });
    }

    public async create(createCategoryDto: CreateCategoryDto) {}

    public async findAll(): Promise<Category[]> {
        return await this.categoriesRepository.find({
            relations: {
                advertisements: false,
            },
        });
    }

    public async findOne(id: number): Promise<Category> {
        return await this.categoriesRepository.findOne({
            where: {
                id: id,
            },
        });
    }
}
