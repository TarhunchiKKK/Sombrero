import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Advertisement } from './entities/advertisement.entity';
import { Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { Category } from 'src/categories/entities/category.entity';
import { LikeAdvertisementDto } from './dto/like-advertisement.dto';
import { BuyAdvertisementDto } from './dto/buy-advertisement.dto';

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
                id: +createAdvertisementDto.category.id,
            },
            vendor: {
                id: +createAdvertisementDto.vendor.id,
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
            const category: Category = await this.categoriesService.findOne(updateAdvertisementDto.category.id);
            updateAdvertisementDto.category = category;
        }

        await this.advertisementsRepository.update(id, updateAdvertisementDto);
    }

    public async remove(id: number): Promise<void> {
        await this.advertisementsRepository.delete(id);
    }

    public async likeAdvertisement(likeDto: LikeAdvertisementDto) {
        const advertisement: Advertisement = await this.advertisementsRepository.findOne({
            where: {
                id: +likeDto.advertisement.id,
            },
            relations: {
                wishedUsers: true,
            },
        });

        if (!advertisement) {
            throw new BadRequestException('No such  advertisement');
        }

        if (advertisement.wishedUsers.findIndex((u) => u.id === +likeDto.user.id) === -1) {
            advertisement.wishedUsers.push(likeDto.user);
        } else {
            advertisement.wishedUsers = advertisement.wishedUsers.filter((u) => u.id !== +likeDto.user.id);
        }

        return await this.advertisementsRepository.save(advertisement);
    }

    public async buyAdvertisement(buyAdvertisementDto: BuyAdvertisementDto) {
        const advertisement: Advertisement = await this.advertisementsRepository.findOne({
            where: {
                id: +buyAdvertisementDto.advertisement.id,
            },
            relations: {
                buyer: true,
            },
        });

        if (!advertisement) {
            throw new BadRequestException('No such advertisement');
        }

        if (advertisement.buyer) {
            throw new BadRequestException('Advertisement already buyed');
        }

        advertisement.buyer = buyAdvertisementDto.user;
        return await this.advertisementsRepository.save(advertisement);
    }
}
