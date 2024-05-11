import { Injectable } from '@nestjs/common';
import { IFaq } from './interfaces/faq.interface';
import { IHelpQuestionsCategory } from './interfaces/help-questions-category.interface';
import { IContact } from './interfaces/contact.interface';

const fs = require('fs');
const path = require('path');

@Injectable()
export class StaticDataService {
    public findAllQuestions(): IHelpQuestionsCategory[] {
        const helpQuestionsCategories: string = fs.readFileSync(path.join(__dirname, '../../data/json/help.json'));
        return JSON.parse(helpQuestionsCategories) as IHelpQuestionsCategory[];
    }

    public findAllFaqs(): IFaq[] {
        const faqs: string = fs.readFileSync(path.join(__dirname, '../../data/json/faqs.json'));
        return JSON.parse(faqs) as IFaq[];
    }

    public findAllContacts(): IContact[] {
        const contacts: string = fs.readFileSync(path.join(__dirname, '../../data/json/contacts.json'));
        return JSON.parse(contacts) as IContact[];
    }
}
