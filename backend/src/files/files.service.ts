import { Injectable, StreamableFile } from '@nestjs/common';
const fs = require('fs');
const path = require('path');

@Injectable()
export class FilesService {
    private readonly accountsDir: string = path.join('data/account/');
    private readonly advertisementsDir: string = path.join('data/products/');
    private readonly categoriesDir: string = path.join('data/categories/');

    constructor() {
        if (!fs.existsSync(this.accountsDir)) {
            fs.mkdirSync(this.accountsDir);
        }
        if (!fs.existsSync(this.advertisementsDir)) {
            fs.mkdirSync(this.advertisementsDir);
        }
        if (!fs.existsSync(this.categoriesDir)) {
            fs.mkdirSync(this.categoriesDir);
        }
    }

    public uploadAccountImage(file: Express.Multer.File): void {
        const writeStream = fs.createWriteStream(path.join(this.accountsDir, file.originalname));
        writeStream.write(file.buffer);
        writeStream.close();
    }

    public downloadAccountImage(fileName: string): StreamableFile {
        const readStream = fs.createReadStream(path.join(this.accountsDir, fileName));
        return new StreamableFile(readStream);
    }

    public uploadAdvertisementImage(file: Express.Multer.File): void {
        const writeStream = fs.createWriteStream(path.join(this.advertisementsDir, file.originalname));
        writeStream.write(file.buffer);
        writeStream.close();
    }

    public downloadAdvertisementImage(fileName: string): StreamableFile {
        const readStream = fs.createReadStream(path.join(this.advertisementsDir, fileName));
        return new StreamableFile(readStream);
    }

    public uploadCategoryImage(file: Express.Multer.File): void {
        const writeStream = fs.createWriteStream(path.join(this.categoriesDir, file.originalname));
        writeStream.write(file.buffer);
        writeStream.close();
    }

    public downloadCategoryImage(fileName: string): StreamableFile {
        const readStream = fs.createReadStream(path.join(this.categoriesDir, fileName));
        return new StreamableFile(readStream);
    }
}
