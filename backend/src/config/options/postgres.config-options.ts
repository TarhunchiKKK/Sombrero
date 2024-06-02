import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Advertisement } from 'src/advertisements/entities/advertisement.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Contact } from 'src/contacts/entities/contact.entity';
import { Faq } from 'src/faqs/entities/faq.entity';
import { StoredFile } from 'src/files/entities/stored-file.entiry';
import { Question } from 'src/help/entities/question.entity';
import { QuestionsCategory } from 'src/help/entities/questions-category.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Address } from 'src/users/entities/address.entity';
import { User } from 'src/users/entities/user.entity';

export const PostgresConfigOptions: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || 'konstantin',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'sombrero',
    synchronize: true,
    entities: [User, Address, Advertisement, Category, Contact, Faq, Question, QuestionsCategory, StoredFile, Role],
};
