import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoredFile } from '../entities/stored-file.entiry';
import { Repository } from 'typeorm';
import { FilesService } from './files.service';
import { ScreenSizes } from '../enums/screen-size.enum';
import { CreateStoredFileDto } from '../dto/create-stored-file.dto';

@Injectable()
export class StoredFilesService {
    constructor(
        @InjectRepository(StoredFile) private storedFilesRepository: Repository<StoredFile>,
        private filesService: FilesService,
    ) {}

    public async findAll(screenSize: ScreenSizes): Promise<StoredFile[]> {
        return await this.storedFilesRepository.find({
            where: {
                screenSize: screenSize,
            },
        });
    }

    public async create(dto: CreateStoredFileDto, file: Express.Multer.File): Promise<StoredFile> {
        if (file) {
            const filename = this.filesService.createFile(file);
            return await this.storedFilesRepository.save({ filename, screenSize: dto.screenSize });
        }
        throw new BadRequestException('File not found');
    }

    public async remove(id: string) {
        const file: StoredFile = await this.storedFilesRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!file) {
            throw new BadRequestException('File not found');
        }

        this.filesService.removeFile(file.filename);

        await this.storedFilesRepository.delete(id);
    }

    public async getCount(): Promise<number> {
        return await this.storedFilesRepository.count();
    }
}
