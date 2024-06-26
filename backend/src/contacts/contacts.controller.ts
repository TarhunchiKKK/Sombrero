import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseInterceptors,
    UploadedFile,
    Inject,
    UseGuards,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Contact } from './entities/contact.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { RequiredRoles } from 'src/roles/decorators/roles.decorator';
import { Roles } from 'src/roles/enums/roles.enum';
import { RolesGuard } from 'src/roles/middleware/roles.guard';

@ApiTags('Contacts')
@Controller('contacts')
export class ContactsController {
    constructor(
        private readonly contactsService: ContactsService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {
        this.cacheManager.reset();
    }

    @ApiOperation({ summary: 'Creates a new contact. Only admin can create new contact' })
    @ApiBody({ type: CreateContactDto })
    @ApiResponse({ status: 201, type: Contact })
    @RequiredRoles(Roles.Admin)
    @UseGuards(RolesGuard)
    @UseInterceptors(FileInterceptor('image'))
    @Post()
    public async create(@Body() createContactDto: CreateContactDto, @UploadedFile() image: Express.Multer.File) {
        this.cacheManager.del('contacts');
        return this.contactsService.create(createContactDto, image);
    }

    @ApiOperation({ summary: 'Find all contacts' })
    @ApiResponse({ status: 200, type: [Contact] })
    @Get()
    public async findAll() {
        const cachedContacts: Contact[] = await this.cacheManager.get('contacts');
        if (!cachedContacts) {
            const contacts: Contact[] = await this.contactsService.findAll();
            this.cacheManager.set('contacts', contacts);
            return contacts;
        }
        return cachedContacts;
    }

    @ApiOperation({ summary: 'Find a contact by id' })
    @ApiResponse({ status: 200, type: Contact })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.contactsService.findOne(id);
    }

    @ApiOperation({ summary: 'Update a contact by id. Only admin can do this' })
    @ApiParam({ name: 'id', description: 'Contact id for update' })
    @ApiBody({ type: UpdateContactDto })
    @ApiResponse({ status: 200 })
    @UseInterceptors(FileInterceptor('image'))
    @RequiredRoles(Roles.Admin)
    @UseGuards(RolesGuard)
    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateContactDto: UpdateContactDto,
        @UploadedFile() image: Express.Multer.File,
    ) {
        this.cacheManager.del('contacts');
        return this.contactsService.update(id, updateContactDto, image);
    }

    @ApiOperation({ summary: 'Delete one contact by id. Only admin can do this' })
    @ApiParam({ name: 'id', description: 'Conact id for remove' })
    @RequiredRoles(Roles.Admin)
    @UseGuards(RolesGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        this.cacheManager.del('contacts');
        return this.contactsService.remove(id);
    }
}
