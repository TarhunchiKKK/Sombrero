import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Contact) private readonly contactsRepository: Repository<Contact>,
        private readonly filesService: FilesService,
    ) {}

    public async create(createContactDto: CreateContactDto, image: Express.Multer.File): Promise<Contact> {
        const photoPath: string = this.filesService.uploadContactImage(image);
        return await this.contactsRepository.save({ ...createContactDto, photo: photoPath });
    }

    public async findAll(): Promise<Contact[]> {
        return this.contactsRepository.find();
    }

    public async findOne(id: number): Promise<Contact> {
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

    public async update(id: number, updateContactDto: UpdateContactDto, image: Express.Multer.File): Promise<void> {
        const contact: Contact = await this.contactsRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!contact) {
            throw new BadRequestException(`Contact with id=${id} not found`);
        }

        if (image) {
            const photo: string = this.filesService.uploadContactImage(image);
            this.filesService.removeContactImage(contact.photo);
            contact.photo = photo;
        }

        await this.contactsRepository.update(id, {
            ...contact,
            ...updateContactDto,
        });
    }

    public async remove(id: number): Promise<void> {
        const contact: Contact = await this.contactsRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!contact) {
            throw new BadRequestException(`Contact with id=${id} not found`);
        }

        this.filesService.removeContactImage(contact.photo);

        await this.contactsRepository.delete(id);
    }
}
