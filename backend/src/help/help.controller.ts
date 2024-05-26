import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { HelpService } from './help.service';
import { CreateQuestionsCategoryDto } from './dto/create-questions-category.dto';
import { UpdateQuestionsCategoryDto } from './dto/update-questions-category.dto';
import { AddQuestionToCategryDto } from './dto/add-question-to-category.dto';

@Controller('help')
export class HelpController {
    constructor(private readonly questionsService: HelpService) {}

    @Get()
    findAll() {
        return this.questionsService.findAll();
    }

    @Get('questions')
    findAllQuestions() {
        return this.questionsService.findAllQuestions();
    }

    @Get('categories')
    findAllQuestionsCategories() {
        return this.questionsService.findAllQuestionsCategories();
    }

    @Get('questions/:id')
    findOneQuestion(@Param('id') id: string) {
        return this.questionsService.findOneQuestion(+id);
    }

    @Get('categories/:id')
    findOneQuestionsCategory(@Param('id') id: string) {
        return this.questionsService.findOneQuestionsCategory(+id);
    }

    @Post('questions')
    createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
        return this.questionsService.createQuestion(createQuestionDto);
    }

    @Post('categories')
    createQuestionsCategory(@Body() createQuestionsCategoryDto: CreateQuestionsCategoryDto) {
        return this.questionsService.createQuestionsCategory(createQuestionsCategoryDto);
    }

    @Patch('questions/add-to-category')
    addQuestionToCategory(@Body() addQuestionToCategoryDto: AddQuestionToCategryDto) {
        return this.questionsService.addQuestionToCategory(addQuestionToCategoryDto);
    }

    @Patch('questions/:id')
    updateQuestion(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
        return this.questionsService.updateQuestion(+id, updateQuestionDto);
    }

    @Patch('categories/:id')
    updateQuestionsCategory(@Param('id') id: string, @Body() updateQuestionsCategoryDto: UpdateQuestionsCategoryDto) {
        return this.questionsService.updateQuestionsCategory(+id, updateQuestionsCategoryDto);
    }

    @Delete('questions/:id')
    removeQuestion(@Param('id') id: string) {
        return this.questionsService.removeQuestion(+id);
    }

    @Delete('categories/:id')
    removeQuestionsCategory(@Param('id') id: string) {
        return this.questionsService.removeQuestionsCategory(+id);
    }
}
