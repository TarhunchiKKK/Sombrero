import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FaqsService } from './faqs.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Faq } from './entities/faq.entity';

@ApiTags('Faqs')
@Controller('faqs')
export class FaqsController {
    constructor(private readonly faqService: FaqsService) {}

    @ApiOperation({ summary: 'Creates a new faq' })
    @ApiBody({ type: CreateFaqDto, description: 'Data for faq creation' })
    @ApiResponse({ status: 201, type: Faq })
    @Post()
    create(@Body() createFaqDto: CreateFaqDto) {
        return this.faqService.create(createFaqDto);
    }

    @ApiOperation({ summary: 'Get all faqs' })
    @ApiResponse({ type: [Faq] })
    @Get()
    findAll() {
        return this.faqService.findAll();
    }

    @ApiOperation({ summary: 'Get one faq by id' })
    @ApiParam({ name: 'id', description: 'Faq id to search' })
    @ApiResponse({ type: Faq })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.faqService.findOne(+id);
    }

    @ApiOperation({ summary: 'Update one faq by id' })
    @ApiParam({ name: 'id', description: 'Faq id to search' })
    @ApiBody({ type: UpdateFaqDto })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
        return this.faqService.update(+id, updateFaqDto);
    }

    @ApiOperation({ summary: 'Delete one faq by id' })
    @ApiParam({ name: 'id', description: 'Faq id to search' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.faqService.remove(+id);
    }
}
