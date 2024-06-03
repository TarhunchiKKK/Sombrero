import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { ContactsModule } from './contacts/contacts.module';
import { FaqsModule } from './faqs/faqs.module';
import { HelpModule } from './help/help.module';
import { MailsModule } from './mails/mails.module';
import { ConfigModuleConfigOptions, JwtConfigOptions, PostgresConfigOptions } from './config';
import { RolesModule } from './roles/roles.module';
import { JwtModule } from '@nestjs/jwt';
import { AdvertisementsModule } from './advertisements/advertisements.module';

@Module({
    imports: [
        UsersModule,
        AdvertisementsModule,
        CategoriesModule,
        RolesModule,
        AuthModule,
        MailsModule,
        FilesModule,
        ContactsModule,
        FaqsModule,
        HelpModule,
        ConfigModule.forRoot(ConfigModuleConfigOptions),
        TypeOrmModule.forRoot(PostgresConfigOptions),
        JwtModule.register(JwtConfigOptions),
    ],
})
export class AppModule {}
