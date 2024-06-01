import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private readonly categoriesRepository: Repository<Category>,
    ) {}

    public async create(createCategoryDto: CreateCategoryDto) {
        return this.categoriesRepository.save(createCategoryDto);
    }

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

    public async updtate(id: number, dto: UpdateCategoryDto): Promise<void> {
        const category: Category = await this.categoriesRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!category) {
            throw new BadRequestException(`Category with id=${id} not found`);
        }

        await this.categoriesRepository.update(id, { ...dto });
    }

    public async remove(id: number) {
        await this.categoriesRepository.delete(id);
    }
}
