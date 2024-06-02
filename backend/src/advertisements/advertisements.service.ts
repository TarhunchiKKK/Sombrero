import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Advertisement } from './entities/advertisement.entity';
import { Repository } from 'typeorm';
import { LikeAdvertisementDto } from './dto/like-advertisement.dto';
import { BuyAdvertisementDto } from './dto/buy-advertisement.dto';
import { FilesService } from 'src/files/services/files.service';
import { CategoriesService } from 'src/categories/categories.service';
import { ChangeAdvertisementCategoryDto } from './dto/change-advertisement-category.dto';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class AdvertisementsService {
    constructor(
        @InjectRepository(Advertisement)
        private readonly advertisementsRepository: Repository<Advertisement>,

        private readonly categoriesService: CategoriesService,

        private readonly filesService: FilesService,
    ) {}

    public async create(
        createAdvertisementDto: CreateAdvertisementDto,
        image: Express.Multer.File,
    ): Promise<Advertisement> {
        const advertisement = {
            ...createAdvertisementDto,
            photo: undefined,
            category: {
                id: +createAdvertisementDto.category.id,
            },
            vendor: {
                id: +createAdvertisementDto.vendor.id,
            },
        };

        if (image) {
            const photo: string = this.filesService.createFile(image);
            advertisement.photo = photo;
        }

        return await this.advertisementsRepository.save(advertisement);
    }

    public async findAll(page: number, limit: number, categoryId: number | undefined): Promise<Advertisement[]> {
        return await this.advertisementsRepository.find({
            relations: {
                vendor: false,
                buyer: false,
                category: true,
                wishedUsers: false,
            },
            where: {
                category: {
                    id: categoryId ? +categoryId : undefined,
                },
            },
            skip: (page - 1) * limit,
            take: limit,
        });
    }

    public async findOne(id: number): Promise<Advertisement> {
        return await this.advertisementsRepository.findOne({
            where: {
                id: id,
            },
            relations: {
                category: true,
                vendor: {
                    address: true,
                },
                buyer: true,
                wishedUsers: true,
            },
        });
    }

    public async update(
        id: number,
        updateAdvertisementDto: UpdateAdvertisementDto,
        image: Express.Multer.File,
    ): Promise<void> {
        const advertisement: Advertisement = await this.advertisementsRepository.findOne({
            where: {
                id: id,
            },
            relations: {
                category: true,
            },
        });

        if (!advertisement) {
            throw new BadRequestException('No such advertisement');
        }

        if (updateAdvertisementDto.category) {
            advertisement.category.id = updateAdvertisementDto.category.id;
            await this.advertisementsRepository.save(advertisement);
        }

        if (image) {
            const photo: string = this.filesService.createFile(image);
            this.filesService.removeFile(advertisement.photo);
            advertisement.photo = photo;
        }

        await this.advertisementsRepository.update(id, {
            ...advertisement,
            ...updateAdvertisementDto,
        });
    }

    public async remove(id: number): Promise<void> {
        const advertisement: Advertisement = await this.advertisementsRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!advertisement) {
            throw new BadRequestException('No such advertisement');
        }

        this.filesService.removeFile(advertisement.photo);

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

    async changeAdvertisementCategory(dto: ChangeAdvertisementCategoryDto) {
        const advertisement: Advertisement = await this.advertisementsRepository.findOne({
            where: {
                id: +dto.advertisement.id,
            },
        });

        if (!advertisement) {
            throw new BadRequestException('No such advertisement');
        }

        const category: Category = await this.categoriesService.findOne(dto.category.id);

        if (!category) {
            throw new BadRequestException('No such category');
        }

        advertisement.category = category;

        return await this.advertisementsRepository.save(advertisement);
    }
}
