import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { AdvertisementsModule } from './advertisements/advertisements.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/entities/user.entity';
import { Address } from './users/entities/address.entity';
import { Advertisement } from './advertisements/entities/advertisement.entity';
import { Category } from './categories/entities/category.entity';

import { CacheModule } from '@nestjs/cache-manager';
import { RedisClientOptions } from 'redis';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { ContactsModule } from './contacts/contacts.module';
import * as redisStore from 'cache-manager-redis-store';
import { Contact } from './contacts/entities/contact.entity';
import { FaqsModule } from './faqs/faqs.module';
import { Faq } from './faqs/entities/faq.entity';
import { HelpModule } from './help/help.module';
import { Question } from './help/entities/question.entity';
import { QuestionsCategory } from './help/entities/questions-category.entity';
import { MailsModule } from './mails/mails.module';

@Module({
    imports: [
        CategoriesModule,
        UsersModule,
        AdvertisementsModule,
        AuthModule,
        FilesModule,
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'konstantin',
            password: '123456',
            database: 'sombrero',
            synchronize: true,
            entities: [User, Address, Advertisement, Category, Contact, Faq, Question, QuestionsCategory],
        }),
        CacheModule.register<RedisClientOptions>({
            isGlobal: true,
            store: redisStore,
            socket: {
                host: 'localhost',
                port: 6379,
            },
        }),
        ContactsModule,
        FaqsModule,
        HelpModule,
        MailsModule,
    ],
})
export class AppModule {}
