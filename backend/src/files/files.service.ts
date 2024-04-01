import { Injectable, StreamableFile } from '@nestjs/common';
import path, { join } from 'path';
const fs = require('fs');

@Injectable()
export class FilesService {
    private readonly accountsDir: string = path.join('static/account/');
    private readonly advertisementsDir: string = path.join('static/products/');
    private readonly categoriesDir: string = path.join('static/categories/');

    constructor() {
        fs.mkdirSync(path.join('static'));
        fs.mkdirSync(this.accountsDir);
        fs.mkdirSync(this.advertisementsDir);
        fs.mkdirSync(this.categoriesDir);
    }

    public uploadAccountImage(file: Express.Multer.File): void {
        const writeStream = fs.createWriteStream(join(this.accountsDir, file.originalname));
        writeStream.write(file.buffer);
        writeStream.close();
    }

    public downloadAccountImage(fileName: string): StreamableFile {
        const readStream = fs.createReadStream(join(this.accountsDir, fileName));
        return new StreamableFile(readStream);
    }

    public uploadAdvertisementImage(file: Express.Multer.File): void {
        const writeStream = fs.createWriteStream(join(this.advertisementsDir, file.originalname));
        writeStream.write(file.buffer);
        writeStream.close();
    }

    public downloadAdvertisementImage(fileName: string): StreamableFile {
        const readStream = fs.createReadStream(join(this.advertisementsDir, fileName));
        return new StreamableFile(readStream);
    }

    public uploadCategoryImage(file: Express.Multer.File): void {
        const writeStream = fs.createWriteStream(join(this.categoriesDir, file.originalname));
        writeStream.write(file.buffer);
        writeStream.close();
    }

    public downloadCategoryImage(fileName: string): StreamableFile {
        const readStream = fs.createReadStream(join(this.categoriesDir, fileName));
        return new StreamableFile(readStream);
    }
}
