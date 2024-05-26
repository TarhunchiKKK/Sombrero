import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {
    constructor(@InjectRepository(Contact) private readonly contactsRepository: Repository<Contact>) {}

    public async create(createContactDto: CreateContactDto): Promise<Contact> {
        return await this.contactsRepository.save({ ...createContactDto });
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

    public async update(id: number, updateContactDto: UpdateContactDto): Promise<void> {
        const contact: Contact = await this.contactsRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!contact) {
            throw new BadRequestException(`Contact with id=${id} not found`);
        }

        await this.contactsRepository.update(id, {
            ...contact,
            ...updateContactDto,
        });
    }

    public async remove(id: number): Promise<void> {
        await this.contactsRepository.delete(id);
    }
}
