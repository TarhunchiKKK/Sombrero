import { Injectable } from '@nestjs/common';
import { Faq } from './entities/faq.entity';

@Injectable()
export class FaqService {
 private readonly faqs: Faq[] = []
 

  findAll() {
    return this.faqs
  }
}
