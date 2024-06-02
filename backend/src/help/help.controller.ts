import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { HelpService } from './help.service';
import { CreateQuestionsCategoryDto } from './dto/create-questions-category.dto';
import { UpdateQuestionsCategoryDto } from './dto/update-questions-category.dto';
import { AddQuestionToCategryDto } from './dto/add-question-to-category.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QuestionsCategory } from './entities/questions-category.entity';
import { Question } from './entities/question.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@ApiTags('Help')
@Controller('help')
export class HelpController {
    private readonly cacheKeys = {
        help: 'help',
        questions: 'help-questions',
        categories: 'help-categories',
    };

    constructor(
        private readonly questionsService: HelpService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {
        this.cacheManager.reset();
    }

    private resetCache(...keys: string[]) {
        for (const key of keys) {
            this.cacheManager.del(key);
        }
    }

    @ApiOperation({ summary: 'Get all help questions categories with their questions' })
    @ApiResponse({ status: 200, type: [QuestionsCategory] })
    @Get()
    public async findAll() {
        const cachedCategories: QuestionsCategory[] = await this.cacheManager.get(this.cacheKeys.help);
        if (!cachedCategories) {
            const questionscategories: QuestionsCategory[] = await this.questionsService.findAll();
            this.cacheManager.set(this.cacheKeys.help, questionscategories);
            return questionscategories;
        }
        return cachedCategories;
    }

    @ApiOperation({ summary: 'Get all help questions' })
    @ApiResponse({ status: 200, type: [Question] })
    @Get('questions')
    public async findAllQuestions() {
        const cachedQuestions: Question[] = await this.cacheManager.get(this.cacheKeys.questions);
        if (!cachedQuestions) {
            const questions: Question[] = await this.questionsService.findAllQuestions();
            this.cacheManager.set(this.cacheKeys.questions, questions);
            return questions;
        }
        return cachedQuestions;
    }

    @ApiOperation({ summary: 'Get all help questions categories' })
    @ApiResponse({ status: 200, type: [QuestionsCategory] })
    @Get('categories')
    public async findAllQuestionsCategories() {
        const cachedCategories: QuestionsCategory[] = await this.cacheManager.get(this.cacheKeys.categories);
        if (!cachedCategories) {
            const questionscategories: QuestionsCategory[] = await this.questionsService.findAllQuestionsCategories();
            this.cacheManager.set(this.cacheKeys.categories, questionscategories);
            return questionscategories;
        }
        return cachedCategories;
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
        this.resetCache(...Object.values(this.cacheKeys));
        return this.questionsService.createQuestion(createQuestionDto);
    }

    @ApiOperation({ summary: 'Create new help questions category' })
    @ApiResponse({ status: 201, type: QuestionsCategory })
    @ApiBody({ type: CreateQuestionsCategoryDto })
    @Post('categories')
    createQuestionsCategory(@Body() createQuestionsCategoryDto: CreateQuestionsCategoryDto) {
        this.resetCache(this.cacheKeys.help, this.cacheKeys.categories);
        return this.questionsService.createQuestionsCategory(createQuestionsCategoryDto);
    }

    @ApiOperation({ summary: 'Add help question to questions category' })
    @ApiBody({ type: AddQuestionToCategryDto })
    @ApiResponse({ status: 200, type: QuestionsCategory })
    @Patch('questions/add-to-category')
    addQuestionToCategory(@Body() addQuestionToCategoryDto: AddQuestionToCategryDto) {
        this.resetCache(this.cacheKeys.help, this.cacheKeys.categories);
        return this.questionsService.addQuestionToCategory(addQuestionToCategoryDto);
    }

    @ApiOperation({ summary: 'Update help question' })
    @ApiParam({ name: 'id', description: 'Help question id to search' })
    @ApiBody({ type: UpdateQuestionDto })
    @Patch('questions/:id')
    updateQuestion(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
        this.resetCache(...Object.values(this.cacheKeys));
        return this.questionsService.updateQuestion(+id, updateQuestionDto);
    }

    @ApiOperation({ summary: 'Update help questions category' })
    @ApiParam({ name: 'id', description: 'Help question category id to search' })
    @ApiBody({ type: UpdateQuestionsCategoryDto })
    @Patch('categories/:id')
    updateQuestionsCategory(@Param('id') id: string, @Body() updateQuestionsCategoryDto: UpdateQuestionsCategoryDto) {
        this.resetCache(this.cacheKeys.help, this.cacheKeys.categories);
        return this.questionsService.updateQuestionsCategory(+id, updateQuestionsCategoryDto);
    }

    @ApiOperation({ summary: 'Remove help question by id' })
    @ApiParam({ name: 'id', description: 'Help question id to search' })
    @Delete('questions/:id')
    removeQuestion(@Param('id') id: string) {
        this.resetCache(...Object.values(this.cacheKeys));
        return this.questionsService.removeQuestion(+id);
    }

    @ApiOperation({ summary: 'Remove help questions category by id' })
    @ApiParam({ name: 'id', description: 'Help questions category id to search' })
    @Delete('categories/:id')
    removeQuestionsCategory(@Param('id') id: string) {
        this.resetCache(this.cacheKeys.help, this.cacheKeys.categories);
        return this.questionsService.removeQuestionsCategory(+id);
    }
}
