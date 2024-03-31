import { Module } from '@nestjs/common';
import { AdvertisementsService } from './advertisements.service';
import { AdvertisementsController } from './advertisements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advertisement } from './entities/advertisement.entity';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
    imports: [TypeOrmModule.forFeature([Advertisement]), CategoriesModule],
    controllers: [AdvertisementsController],
    providers: [AdvertisementsService],
})
export class AdvertisementsModule {}
