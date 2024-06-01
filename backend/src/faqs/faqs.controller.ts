import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FaqsService } from './faqs.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('faqs')
export class FaqsController {
    constructor(private readonly faqService: FaqsService) {}

    @Post()
    create(@Body() createFaqDto: CreateFaqDto) {
        return this.faqService.create(createFaqDto);
    }

    @Get()
    findAll() {
        return this.faqService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.faqService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
        return this.faqService.update(+id, updateFaqDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.faqService.remove(+id);
    }

    @Post('/test')
    @UseInterceptors(FileInterceptor('file'))
    test(@Req() request, @UploadedFile() file: Express.Multer.File) {
        console.log(request.file);
        console.log(file.originalname);
    }
}
