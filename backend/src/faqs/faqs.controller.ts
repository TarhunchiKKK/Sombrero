import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { FaqsService } from './faqs.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Faq } from './entities/faq.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@ApiTags('Faqs')
@Controller('faqs')
export class FaqsController {
    constructor(
        private readonly faqService: FaqsService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {
        this.cacheManager.reset();
    }

    @ApiOperation({ summary: 'Creates a new faq' })
    @ApiBody({ type: CreateFaqDto, description: 'Data for faq creation' })
    @ApiResponse({ status: 201, type: Faq })
    @Post()
    create(@Body() createFaqDto: CreateFaqDto) {
        this.cacheManager.del('faqs');
        return this.faqService.create(createFaqDto);
    }

    @ApiOperation({ summary: 'Get all faqs' })
    @ApiResponse({ type: [Faq] })
    @Get()
    async findAll() {
        const cachedFaqs: Faq[] = await this.cacheManager.get('faqs');
        if (cachedFaqs && cachedFaqs.length !== 0) {
            console.log('Get all faqs. Value from cache');
            return cachedFaqs;
        }
        const faqs: Faq[] = await this.faqService.findAll();
        this.cacheManager.set('faqs', faqs);
        return faqs;
    }

    @ApiOperation({ summary: 'Get one faq by id' })
    @ApiParam({ name: 'id', description: 'Faq id to search' })
    @ApiResponse({ type: Faq })
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const cachedFaq: Faq = await this.cacheManager.get(`faq:${id}`);
        if (cachedFaq) {
            console.log('Get one faq. Value from cache');
            return cachedFaq;
        }

        console.log('Get one faq. Value from database');
        const faq: Faq = await this.faqService.findOne(+id);
        this.cacheManager.set(`faq:${id}`, faq, 5000);
        return faq;
    }

    @ApiOperation({ summary: 'Update one faq by id' })
    @ApiParam({ name: 'id', description: 'Faq id to search' })
    @ApiBody({ type: UpdateFaqDto })
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
        this.cacheManager.del('faqs');
        this.cacheManager.del(`faq:${id}`);

        return await this.faqService.update(+id, updateFaqDto);
    }

    @ApiOperation({ summary: 'Delete one faq by id' })
    @ApiParam({ name: 'id', description: 'Faq id to search' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        this.cacheManager.del('faqs');
        this.cacheManager.del(`faq:${id}`);

        return this.faqService.remove(+id);
    }
}
