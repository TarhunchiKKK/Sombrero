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
import { StaticDataModule } from './static-data/static-data.module';
import * as redisStore from 'cache-manager-redis-store';

@Module({
    imports: [
        CategoriesModule,
        UsersModule,
        AdvertisementsModule,
        AuthModule,
        FilesModule,
        StaticDataModule,
        ConfigModule.forRoot({ isGlobal: true }),
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
            entities: [User, Address, Advertisement, Category],
        }),
        CacheModule.register<RedisClientOptions>({
            isGlobal: true,
            store: redisStore,
            socket: {
                host: 'localhost',
                port: 6379,
            },
        }),
    ],
})
export class AppModule {}
