import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Advertisement } from './entities/advertisement.entity';
import { Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class AdvertisementsService {
    constructor(
        @InjectRepository(Advertisement)
        private readonly advertisementsRepository: Repository<Advertisement>,
        private readonly categoriesService: CategoriesService,
    ) {}

    public async create(createAdvertisementDto: CreateAdvertisementDto): Promise<Advertisement> {
        const advertisement = {
            ...createAdvertisementDto,
            category: {
                id: createAdvertisementDto.category.id,
            },
            vendor: {
                id: createAdvertisementDto.vendor.id,
            },
        };
        return await this.advertisementsRepository.save(advertisement);
    }

    public async findAll(): Promise<Advertisement[]> {
        return await this.advertisementsRepository.find({
            relations: {
                vendor: false,
                buyer: false,
                category: false,
                wishedUsers: false,
            },
        });
    }

    public async findOne(id: number): Promise<Advertisement> {
        return await this.advertisementsRepository.findOne({
            where: {
                id: id,
            },
            relations: {
                category: true,
                vendor: true,
                buyer: true,
                wishedUsers: true,
            },
        });
    }

    public async update(id: number, updateAdvertisementDto: UpdateAdvertisementDto): Promise<void> {
        const advertisement: Advertisement = await this.advertisementsRepository.findOne({
            where: {
                id: id,
            },
            relations: {
                category: true,
                vendor: true,
            },
        });

        if (!advertisement) {
            throw new BadRequestException('No such advertisement');
        }

        if (updateAdvertisementDto.category) {
            const category: Category = await this.categoriesService.findOne(
                updateAdvertisementDto.category.id,
            );
            updateAdvertisementDto.category = category;
        }

        await this.advertisementsRepository.update(id, updateAdvertisementDto);
    }

    public async remove(id: number): Promise<void> {
        await this.advertisementsRepository.delete(id);
    }
}
