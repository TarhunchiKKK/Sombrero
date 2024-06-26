import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Faq } from './entities/faq.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FaqsService {
    constructor(@InjectRepository(Faq) private readonly faqRepository: Repository<Faq>) {}

    public async create(createFaqDto: CreateFaqDto): Promise<Faq> {
        const faq: Faq = await this.faqRepository.save({ ...createFaqDto });

        return faq;
    }

    public async findAll(): Promise<Faq[]> {
        return await this.faqRepository.find();
    }

    public async findOne(id: string): Promise<Faq> {
        const faq: Faq = await this.faqRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!faq) {
            throw new BadRequestException(`Faq with id=${id} not found`);
        }

        return faq;
    }

    public async update(id: string, updateFaqDto: UpdateFaqDto): Promise<void> {
        const faq: Faq = await this.faqRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!faq) {
            throw new BadRequestException(`Faq with id=${id} not found`);
        }

        await this.faqRepository.update(id, {
            ...faq,
            ...updateFaqDto,
        });
    }

    public async remove(id: string): Promise<void> {
        await this.faqRepository.delete(id);
    }
}
