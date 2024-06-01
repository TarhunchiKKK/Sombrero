import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionsCategory } from './entities/questions-category.entity';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';
import { CreateQuestionsCategoryDto } from './dto/create-questions-category.dto';
import { UpdateQuestionsCategoryDto } from './dto/update-questions-category.dto';
import { AddQuestionToCategryDto } from './dto/add-question-to-category.dto';

@Injectable()
export class HelpService {
    constructor(
        @InjectRepository(QuestionsCategory)
        private readonly categoriesRepository: Repository<QuestionsCategory>,

        @InjectRepository(Question)
        private readonly questionsRepository: Repository<Question>,
    ) {}

    public async findAllQuestions(): Promise<Question[]> {
        return await this.questionsRepository.find();
    }

    public findAll(): Promise<QuestionsCategory[]> {
        return this.categoriesRepository.find({
            relations: {
                questions: true,
            },
        });
    }

    public async findAllQuestionsCategories(): Promise<QuestionsCategory[]> {
        return await this.categoriesRepository.find();
    }

    public async createQuestion(questionDto: CreateQuestionDto): Promise<Question> {
        const category: QuestionsCategory = await this.categoriesRepository.findOne({
            where: {
                id: +questionDto.category.id,
            },
        });

        if (!category) {
            throw new BadRequestException(`Category with id=${questionDto.category.id} not found`);
        }

        const question: Question = this.questionsRepository.create({
            ...questionDto,
            categories: [category],
        });

        return this.questionsRepository.save(question);
    }

    public async createQuestionsCategory(categoryDto: CreateQuestionsCategoryDto): Promise<QuestionsCategory> {
        return this.categoriesRepository.save({ ...categoryDto });
    }

    public async findOneQuestion(id: number): Promise<Question> {
        const question: Question = await this.questionsRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!question) {
            throw new BadRequestException(`Question with id=${id} not found`);
        }

        return question;
    }

    public async findOneQuestionsCategory(id: number): Promise<QuestionsCategory> {
        const category: QuestionsCategory = await this.categoriesRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!category) {
            throw new BadRequestException(`Questions category with id=${id} not found`);
        }

        return category;
    }

    public async updateQuestion(id: number, questionDto: UpdateQuestionDto): Promise<void> {
        const question: Question = await this.questionsRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!question) {
            throw new BadRequestException(`Question with id=${id} not found`);
        }

        await this.questionsRepository.update(id, {
            ...question,
            ...questionDto,
        });
    }

    public async updateQuestionsCategory(id: number, categoryDto: UpdateQuestionsCategoryDto): Promise<void> {
        const category: QuestionsCategory = await this.categoriesRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!category) {
            throw new BadRequestException(`Questions category with id=${id} not found`);
        }

        await this.categoriesRepository.update(id, {
            ...categoryDto,
        });
    }

    public async removeQuestion(id: number): Promise<void> {
        await this.questionsRepository.delete(id);
    }

    public async removeQuestionsCategory(id: number): Promise<void> {
        await this.categoriesRepository.delete(id);
    }

    public async addQuestionToCategory(dto: AddQuestionToCategryDto): Promise<QuestionsCategory> {
        const question: Question = await this.questionsRepository.findOne({
            where: {
                id: dto.question.id,
            },
        });

        if (!question) {
            throw new BadRequestException(`Question with id=${dto.question.id} not found`);
        }

        const category: QuestionsCategory = await this.categoriesRepository.findOne({
            where: {
                id: dto.category.id,
            },
            relations: {
                questions: true,
            },
        });

        if (!category) {
            throw new BadRequestException(`Category with id=${dto.category.id} not found`);
        }

        category.questions.push(dto.question);
        return await this.categoriesRepository.save(category);
    }
}
