import { Injectable, StreamableFile } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { generateFilename } from './helpers/generateFilename';
import { Express } from 'express';
import { Multer } from 'multer';
import { IStorage } from './types/storage.interface';

const fs = require('fs');
const path = require('path');

@Injectable()
export class FilesService {
    private readonly storage: IStorage;

    constructor(private configService: ConfigService) {
        const filesStorage: string = this.configService.get('FILES_STORAGE')!;

        this.storage = {
            advertisements: path.join(`${filesStorage}/advertisements/`),
            accounts: path.join(`${filesStorage}/accounts/`),
            contacts: path.join(`${filesStorage}/contacts/`),
            home: path.join(`${filesStorage}/home/`),
            default: {
                person: path.join(`${filesStorage}/_default/`, 'default-person.jpg'),
                object: path.join(`${filesStorage}/_default/`, 'default-object.webp'),
            },
        };
    }

    public uploadAccountImage(file: Express.Multer.File): string {
        const filename: string = generateFilename(file.originalname);
        const writeStream = fs.createWriteStream(path.join(this.storage.accounts, filename));
        writeStream.write(file.buffer);
        writeStream.close();
        return filename;
    }

    public downloadAccountImage(fileName: string): StreamableFile {
        let readStream: any;
        if (!fileName || !fs.existsSync(path.join(this.storage.accounts, fileName))) {
            readStream = fs.createReadStream(this.storage.default.person);
        } else {
            readStream = fs.createReadStream(path.join(this.storage.accounts, fileName));
        }
        return new StreamableFile(readStream);
    }

    public removeAccountImage(fileName: string) {
        if (fileName && fs.existsSync(path.join(this.storage.accounts, fileName))) {
            fs.rm(path.join(this.storage.accounts, fileName), (err) => {
                console.log(err);
            });
        }
    }

    public uploadAdvertisementImage(file: Express.Multer.File): string {
        const filename: string = generateFilename(file.originalname);
        const writeStream = fs.createWriteStream(path.join(this.storage.advertisements, filename));
        writeStream.write(file.buffer);
        writeStream.close();
        return filename;
    }

    public downloadAdvertisementImage(fileName: string): StreamableFile {
        let readStream: any;
        if (!fileName || !fs.existsSync(path.join(this.storage.advertisements, fileName))) {
            readStream = fs.createReadStream(this.storage.default.object);
        } else {
            readStream = fs.createReadStream(path.join(this.storage.advertisements, fileName));
        }
        return new StreamableFile(readStream);
    }

    public removeAdvertisementImage(fileName: string) {
        if (fileName && fs.existsSync(path.join(this.storage.advertisements, fileName))) {
            fs.rm(path.join(this.storage.advertisements, fileName), (err) => {
                console.log(err);
            });
        }
    }

    public uploadContactImage(file: Express.Multer.File): string {
        const filename: string = generateFilename(file.originalname);
        const writeStream = fs.createWriteStream(path.join(this.storage.contacts, filename));
        writeStream.write(file.buffer);
        writeStream.close();
        return filename;
    }

    public downloadContactImage(fileName: string): StreamableFile {
        let readStream: any;
        if (!fileName || !fs.existsSync(path.join(this.storage.contacts, fileName))) {
            readStream = fs.createReadStream(this.storage.default.person);
        } else {
            readStream = fs.createReadStream(path.join(this.storage.contacts, fileName));
        }
        return new StreamableFile(readStream);
    }

    public removeContactImage(fileName: string) {
        if (fileName && fs.existsSync(path.join(this.storage.contacts, fileName))) {
            fs.rm(path.join(this.storage.contacts, fileName), (err) => {
                console.log(err);
            });
        }
    }
}
