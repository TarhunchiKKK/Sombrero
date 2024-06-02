import { Module } from '@nestjs/common';
import { FaqsService } from './faqs.service';
import { FaqsController } from './faqs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faq } from './entities/faq.entity';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisClientOptions } from 'redis';
import { RedisConfigOptions } from 'src/config';

@Module({
    imports: [TypeOrmModule.forFeature([Faq]), CacheModule.register<RedisClientOptions>(RedisConfigOptions)],
    controllers: [FaqsController],
    providers: [FaqsService],
})
export class FaqsModule {}
