import { Controller, Get, Param } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('help')
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService) {}

    @Get('questions')
    findAllHelpQuestions() {
        return this.questionsService.findAllQuestions();
    }

    @Get('faqs')
    findAllfaqs() {
        return this.questionsService.findAllFaqs();
    }
}
