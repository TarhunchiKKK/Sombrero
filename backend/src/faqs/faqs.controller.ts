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
    public async create(@Body() createFaqDto: CreateFaqDto) {
        this.cacheManager.del('faqs');
        return this.faqService.create(createFaqDto);
    }

    @ApiOperation({ summary: 'Get all faqs' })
    @ApiResponse({ type: [Faq] })
    @Get()
    public async findAll() {
        const cachedFaqs: Faq[] = await this.cacheManager.get('faqs');
        if (cachedFaqs && cachedFaqs.length !== 0) {
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
    public async findOne(@Param('id') id: string) {
        return await this.faqService.findOne(+id);
    }

    @ApiOperation({ summary: 'Update one faq by id' })
    @ApiParam({ name: 'id', description: 'Faq id to search' })
    @ApiBody({ type: UpdateFaqDto })
    @Patch(':id')
    public async update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
        this.cacheManager.del('faqs');
        return await this.faqService.update(+id, updateFaqDto);
    }

    @ApiOperation({ summary: 'Delete one faq by id' })
    @ApiParam({ name: 'id', description: 'Faq id to search' })
    @Delete(':id')
    public async remove(@Param('id') id: string) {
        this.cacheManager.del('faqs');
        return this.faqService.remove(+id);
    }
}
