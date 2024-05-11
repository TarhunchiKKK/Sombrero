import { Controller, Get, Param } from '@nestjs/common';
import { StaticDataService } from './static-data.service';

@Controller('help')
export class StaticDataController {
    constructor(private readonly questionsService: StaticDataService) {}

    @Get('questions')
    findAllHelpQuestions() {
        return this.questionsService.findAllQuestions();
    }

    @Get('faqs')
    findAllfaqs() {
        return this.questionsService.findAllFaqs();
    }

    @Get('contacts')
    findAllContacts() {
        return this.questionsService.findAllContacts();
    }
}
