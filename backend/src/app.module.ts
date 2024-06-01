import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { AdvertisementsModule } from './advertisements/advertisements.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { ContactsModule } from './contacts/contacts.module';
import { FaqsModule } from './faqs/faqs.module';
import { HelpModule } from './help/help.module';
import { MailsModule } from './mails/mails.module';
import { ConfigModuleConfigOptions, PostgresConfigOptions } from './config';

@Module({
    imports: [
        CategoriesModule,
        UsersModule,
        AdvertisementsModule,
        AuthModule,
        FilesModule,
        ContactsModule,
        FaqsModule,
        HelpModule,
        MailsModule,
        ConfigModule.forRoot(ConfigModuleConfigOptions),
        TypeOrmModule.forRoot(PostgresConfigOptions),
        // CacheModule.register<RedisClientOptions>(RedisConfigOptions),
        // CacheModule.register({ isGlobal: true }),
    ],
})
export class AppModule {}
