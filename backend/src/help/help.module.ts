import { Module } from '@nestjs/common';
import { HelpController } from './help.controller';
import { HelpService } from './help.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { QuestionsCategory } from './entities/questions-category.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Question, QuestionsCategory])],
    controllers: [HelpController],
    providers: [HelpService],
})
export class HelpModule {}
