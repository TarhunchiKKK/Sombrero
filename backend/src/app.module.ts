import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { AdvertisementsModule } from './advertisements/advertisements.module';
import { FaqModule } from './faq/faq.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Faq } from './faq/entities/faq.entity';
import { User } from './users/entities/user.entity';
import { Address } from './users/entities/address.entity';
import { Advertisement } from './advertisements/entities/advertisement.entity';
import { Category } from './categories/entities/category.entity';
import { SombreroConfigModule } from './config/sombrero-config.module';

import { CacheModule } from '@nestjs/cache-manager';
import { RedisClientOptions } from 'redis';
import { AuthModule } from './auth/auth.module';
import * as redisStore from 'cache-manager-redis-store';

@Module({
    imports: [
        CategoriesModule,
        UsersModule,
        AdvertisementsModule,
        FaqModule,
        ConfigModule.forRoot({ isGlobal: true }),
        SombreroConfigModule,
        // TypeOrmModule.forRootAsync({
        //   useClass: TypeOrmConfigService,
        // }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'root',
            password: '123456',
            database: 'sombrero',
            synchronize: true,
            entities: [Faq, User, Address, Advertisement, Category],
        }),
        CacheModule.register<RedisClientOptions>({
            isGlobal: true,
            store: redisStore,
            socket: {
                host: 'localhost',
                port: 6379,
            },
        }),
        AuthModule,
    ],
})
export class AppModule {}
