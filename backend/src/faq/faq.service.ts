import { Injectable } from '@nestjs/common';
import { Faq } from './entities/faq.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { faqs } from './data/faqs';

@Injectable()
export class FaqService {
    constructor(
        @InjectRepository(Faq)
        private readonly faqsRepository: Repository<Faq>,
    ) {
        Promise.resolve(this.faqsRepository.clear()).then(() => this.faqsRepository.save(faqs));
    }

    public async findAll(): Promise<Faq[]> {
        return await this.faqsRepository.find();
    }

    public async findOne(id: number): Promise<Faq> {
        return await this.faqsRepository.findOne({
            where: {
                id: id,
            },
        });
    }
}
