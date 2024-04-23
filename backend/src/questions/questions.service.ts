import { Injectable } from '@nestjs/common';
import { HelpQuestionsCategory } from './entities/help-questions-category.entity';

import { helpQuestionsCategories } from './data/help-questions';
import { faqs } from './data/faqs';
import { Faq } from './entities/faq.entity';

@Injectable()
export class QuestionsService {
    private helpQuestionsCategories: HelpQuestionsCategory[] = helpQuestionsCategories;
    private faqs: Faq[] = faqs;

    public findAllQuestions(): HelpQuestionsCategory[] {
        return this.helpQuestionsCategories;
    }

    public findAllFaqs(): Faq[] {
        return this.faqs;
    }
}
