import { Module } from '@nestjs/common';
import { AdvertisementsService } from './advertisements.service';
import { AdvertisementsController } from './advertisements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advertisement } from './entities/advertisement.entity';
import { FilesModule } from 'src/files/files.module';

@Module({
    imports: [TypeOrmModule.forFeature([Advertisement]), FilesModule],
    controllers: [AdvertisementsController],
    providers: [AdvertisementsService],
    exports: [FilesModule],
})
export class AdvertisementsModule {}
