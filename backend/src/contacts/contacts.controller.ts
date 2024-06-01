import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Contact } from './entities/contact.entity';

@ApiTags('Contacts')
@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService: ContactsService) {}

    @ApiOperation({ summary: 'Creates a new contact. Only admin can create new contact' })
    @ApiBody({ type: CreateContactDto })
    @ApiResponse({ status: 201, type: Contact })
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() createContactDto: CreateContactDto, @UploadedFile() image: Express.Multer.File) {
        return this.contactsService.create(createContactDto, image);
    }

    @ApiOperation({ summary: 'Find all contacts' })
    @ApiResponse({ status: 200, type: [Contact] })
    @Get()
    findAll() {
        return this.contactsService.findAll();
    }

    @ApiOperation({ summary: 'Find a contact by id' })
    @ApiResponse({ status: 200, type: Contact })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.contactsService.findOne(+id);
    }

    @ApiOperation({ summary: 'Update a contact by id. Only admin can do this' })
    @ApiParam({ name: 'id', description: 'Contact id for update' })
    @ApiBody({ type: UpdateContactDto })
    @ApiResponse({ status: 200 })
    @Patch(':id')
    @UseInterceptors(FileInterceptor('image'))
    update(
        @Param('id') id: string,
        @Body() updateContactDto: UpdateContactDto,
        @UploadedFile() image: Express.Multer.File,
    ) {
        return this.contactsService.update(+id, updateContactDto, image);
    }

    @ApiOperation({ summary: 'Delete one contact by id. Only admin can do this' })
    @ApiParam({ name: 'id', description: 'Conact id for remove' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.contactsService.remove(+id);
    }
}
