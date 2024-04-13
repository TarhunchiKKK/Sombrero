import { Controller, Get, Param } from '@nestjs/common';
import { FaqService } from './faq.service';

@Controller('faq')
export class FaqController {
    constructor(private readonly faqService: FaqService) {}

    @Get()
    findAll() {
        return this.faqService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.faqService.findOne(+id);
    }
}
