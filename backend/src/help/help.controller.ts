import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { HelpService } from './help.service';
import { CreateQuestionsCategoryDto } from './dto/create-questions-category.dto';
import { UpdateQuestionsCategoryDto } from './dto/update-questions-category.dto';
import { AddQuestionToCategryDto } from './dto/add-question-to-category.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QuestionsCategory } from './entities/questions-category.entity';
import { Question } from './entities/question.entity';

@ApiTags('Help')
@Controller('help')
export class HelpController {
    constructor(private readonly questionsService: HelpService) {}

    @ApiOperation({ summary: 'Get all help questions categories with their questions' })
    @ApiResponse({ status: 200, type: [QuestionsCategory] })
    @Get()
    findAll() {
        return this.questionsService.findAll();
    }

    @ApiOperation({ summary: 'Get all help questions' })
    @ApiResponse({ status: 200, type: [Question] })
    @Get('questions')
    findAllQuestions() {
        return this.questionsService.findAllQuestions();
    }

    @ApiOperation({ summary: 'Get all help questions categories' })
    @ApiResponse({ status: 200, type: [QuestionsCategory] })
    @Get('categories')
    findAllQuestionsCategories() {
        return this.questionsService.findAllQuestionsCategories();
    }

    @ApiOperation({ summary: 'Get one help question by id' })
    @ApiParam({ name: 'id', description: 'Help question id to search' })
    @ApiResponse({ status: 200, type: Question })
    @Get('questions/:id')
    findOneQuestion(@Param('id') id: string) {
        return this.questionsService.findOneQuestion(+id);
    }

    @ApiOperation({ summary: 'Get one help questions category by id' })
    @ApiParam({ name: 'id', description: 'Help questions category id to search' })
    @ApiResponse({ status: 200, type: QuestionsCategory })
    @Get('categories/:id')
    findOneQuestionsCategory(@Param('id') id: string) {
        return this.questionsService.findOneQuestionsCategory(+id);
    }

    @ApiOperation({ summary: 'Create new help question' })
    @ApiResponse({ status: 201, type: Question })
    @ApiBody({ type: CreateQuestionDto })
    @Post('questions')
    createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
        return this.questionsService.createQuestion(createQuestionDto);
    }

    @ApiOperation({ summary: 'Create new help questions category' })
    @ApiResponse({ status: 201, type: QuestionsCategory })
    @ApiBody({ type: CreateQuestionsCategoryDto })
    @Post('categories')
    createQuestionsCategory(@Body() createQuestionsCategoryDto: CreateQuestionsCategoryDto) {
        return this.questionsService.createQuestionsCategory(createQuestionsCategoryDto);
    }

    @ApiOperation({ summary: 'Add help question to questions category' })
    @ApiBody({ type: AddQuestionToCategryDto })
    @ApiResponse({ status: 200, type: QuestionsCategory })
    @Patch('questions/add-to-category')
    addQuestionToCategory(@Body() addQuestionToCategoryDto: AddQuestionToCategryDto) {
        return this.questionsService.addQuestionToCategory(addQuestionToCategoryDto);
    }

    @ApiOperation({ summary: 'Update help question' })
    @ApiParam({ name: 'id', description: 'Help question id to search' })
    @ApiBody({ type: UpdateQuestionDto })
    @Patch('questions/:id')
    updateQuestion(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
        return this.questionsService.updateQuestion(+id, updateQuestionDto);
    }

    @ApiOperation({ summary: 'Update help questions category' })
    @ApiParam({ name: 'id', description: 'Help question category id to search' })
    @ApiBody({ type: UpdateQuestionsCategoryDto })
    @Patch('categories/:id')
    updateQuestionsCategory(@Param('id') id: string, @Body() updateQuestionsCategoryDto: UpdateQuestionsCategoryDto) {
        return this.questionsService.updateQuestionsCategory(+id, updateQuestionsCategoryDto);
    }

    @ApiOperation({ summary: 'Remove help question by id' })
    @ApiParam({ name: 'id', description: 'Help question id to search' })
    @Delete('questions/:id')
    removeQuestion(@Param('id') id: string) {
        return this.questionsService.removeQuestion(+id);
    }

    @ApiOperation({ summary: 'Remove help questions category by id' })
    @ApiParam({ name: 'id', description: 'Help questions category id to search' })
    @Delete('categories/:id')
    removeQuestionsCategory(@Param('id') id: string) {
        return this.questionsService.removeQuestionsCategory(+id);
    }
}
