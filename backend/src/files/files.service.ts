import { Injectable, StreamableFile } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { generateFilename } from './helpers/generateFilename';

const fs = require('fs');
const path = require('path');

@Injectable()
export class FilesService {
    private readonly accountsDir: string;
    private readonly advertisementsDir: string;

    constructor(private configService: ConfigService) {
        const filesStorage: string = this.configService.get('FILES_STORAGE');
        this.accountsDir = path.join(`${filesStorage}/accounts/`);
        this.advertisementsDir = path.join(`${filesStorage}/advertisements/`);
    }

    public uploadAccountImage(file: Express.Multer.File): void {
        const filename: string = generateFilename(file.originalname);
        const writeStream = fs.createWriteStream(path.join(this.accountsDir, filename));
        writeStream.write(file.buffer);
        writeStream.close();
    }

    public downloadAccountImage(fileName: string): StreamableFile {
        let readStream: any;
        if (!fileName || !fs.existsSync(path.join(this.accountsDir, fileName))) {
            readStream = fs.createReadStream(path.join(this.accountsDir, '_default.jpg'));
        } else {
            readStream = fs.createReadStream(path.join(this.accountsDir, fileName));
        }
        return new StreamableFile(readStream);
    }

    public uploadAdvertisementImage(file: Express.Multer.File): void {
        const filename: string = generateFilename(file.originalname);
        const writeStream = fs.createWriteStream(path.join(this.advertisementsDir, filename));
        writeStream.write(file.buffer);
        writeStream.close();
    }

    public downloadAdvertisementImage(fileName: string): StreamableFile {
        let readStream: any;
        if (!fileName || !fs.existsSync(path.join(this.advertisementsDir, fileName))) {
            readStream = fs.createReadStream(path.join(this.advertisementsDir, '_default.webp'));
        } else {
            readStream = fs.createReadStream(path.join(this.advertisementsDir, fileName));
        }
        return new StreamableFile(readStream);
    }
}
