import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';
import { FilesService } from 'src/files/services/files.service';

@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Contact) private readonly contactsRepository: Repository<Contact>,
        private readonly filesService: FilesService,
    ) {}

    public async create(createContactDto: CreateContactDto, image: Express.Multer.File): Promise<Contact> {
        if (image) {
            const photoPath: string = this.filesService.createFile(image);
            return await this.contactsRepository.save({ ...createContactDto, photo: photoPath });
        }
        return await this.contactsRepository.save(createContactDto);
    }

    public async findAll(): Promise<Contact[]> {
        return this.contactsRepository.find();
    }

    public async findOne(id: string): Promise<Contact> {
        const contact: Contact = await this.contactsRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!contact) {
            throw new BadRequestException(`Contact with id=${id} not found`);
        }

        return contact;
    }

    public async update(id: string, updateContactDto: UpdateContactDto, image: Express.Multer.File): Promise<void> {
        const contact: Contact = await this.contactsRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!contact) {
            throw new BadRequestException(`Contact with id=${id} not found`);
        }

        if (image) {
            const photo: string = this.filesService.createFile(image);
            this.filesService.removeFile(contact.photo);
            contact.photo = photo;
        }

        await this.contactsRepository.update(id, {
            ...contact,
            ...updateContactDto,
        });
    }

    public async remove(id: string): Promise<void> {
        const contact: Contact = await this.contactsRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!contact) {
            throw new BadRequestException(`Contact with id=${id} not found`);
        }

        this.filesService.removeFile(contact.photo);

        await this.contactsRepository.delete(id);
    }
}
