import { Injectable, StreamableFile } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { generateFilename } from '../helpers/generateFilename';
import { removeFileCallback } from '../helpers/removeFileCallback';

import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FilesService {
    private readonly storage: string;
    private readonly defaultImage: string;

    constructor(private configService: ConfigService) {
        this.storage = process.env.FILES_STORAGE || 'static';
        this.defaultImage = path.join(this.storage, process.env.DEFAULT_IMAGE || '_default.webp');
    }

    public createFile(file: Express.Multer.File): string {
        const filename: string = generateFilename(file.originalname);
        const writeStream = fs.createWriteStream(path.join(this.storage, filename));
        writeStream.write(file.buffer);
        writeStream.close();
        return filename;
    }

    public downloadFile(filename: string): StreamableFile {
        let readStream: any;
        if (filename && fs.existsSync(path.join(this.storage, filename))) {
            readStream = fs.createReadStream(path.join(this.storage, filename));
        } else {
            readStream = fs.createReadStream(this.defaultImage);
        }
        return new StreamableFile(readStream);
    }

    public removeFile(filename: string) {
        if (filename && fs.existsSync(path.join(this.storage, filename))) {
            fs.rm(path.join(this.storage, filename), removeFileCallback);
        }
    }
}
