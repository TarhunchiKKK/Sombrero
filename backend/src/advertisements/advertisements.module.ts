import { Module } from '@nestjs/common';
import { AdvertisementsService } from './advertisements.service';
import { AdvertisementsController } from './advertisements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advertisement } from './entities/advertisement.entity';
import { FilesModule } from 'src/files/files.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisClientOptions } from 'redis';
import { RedisConfigOptions } from 'src/config';

@Module({
    imports: [
        TypeOrmModule.forFeature([Advertisement]),
        CacheModule.register<RedisClientOptions>(RedisConfigOptions),
        CategoriesModule,
        FilesModule,
    ],
    controllers: [AdvertisementsController],
    providers: [AdvertisementsService],
    exports: [FilesModule],
})
export class AdvertisementsModule {}
