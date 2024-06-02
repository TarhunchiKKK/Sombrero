import { Module } from '@nestjs/common';
import { HelpController } from './help.controller';
import { HelpService } from './help.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { QuestionsCategory } from './entities/questions-category.entity';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisClientOptions } from 'redis';
import { RedisConfigOptions } from 'src/config';

@Module({
    imports: [
        TypeOrmModule.forFeature([Question, QuestionsCategory]),
        CacheModule.register<RedisClientOptions>(RedisConfigOptions),
    ],
    controllers: [HelpController],
    providers: [HelpService],
})
export class HelpModule {}
