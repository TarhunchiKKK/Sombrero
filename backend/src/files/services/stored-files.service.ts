import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StoredFile } from '../entities/stored-file.entiry';
import { Repository } from 'typeorm';
import { FilesService } from './files.service';

@Injectable()
export class StoredFilesService {
    constructor(
        @InjectRepository(StoredFile) private storedFilesRepository: Repository<StoredFile>,
        private filesService: FilesService,
    ) {}

    public async create(file: Express.Multer.File): Promise<StoredFile> {
        if (file) {
            const filename = this.filesService.createFile(file);
            return await this.storedFilesRepository.save({ filename });
        }
        throw new BadRequestException('File not found');
    }

    public async remove(id: number) {
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
