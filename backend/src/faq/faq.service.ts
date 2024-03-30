import { Injectable } from '@nestjs/common';
import { Faq } from './entities/faq.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FaqService {
  constructor(
    @InjectRepository(Faq)
    private readonly faqRepository: Repository<Faq>
  ) {}

  findAll() {
    return []
  }
}
