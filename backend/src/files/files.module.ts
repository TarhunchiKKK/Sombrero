import { Module } from '@nestjs/common';
import { FilesService } from './services/files.service';
import { FilesController } from './files.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoredFile } from './entities/stored-file.entiry';
import { StoredFilesService } from './services/stored-files.service';

@Module({
    imports: [ConfigModule, TypeOrmModule.forFeature([StoredFile])],
    controllers: [FilesController],
    providers: [StoredFilesService, FilesService],
    exports: [FilesService],
})
export class FilesModule {}
