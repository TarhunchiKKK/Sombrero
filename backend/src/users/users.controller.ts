import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UsePipes,
    ValidationPipe,
    UseInterceptors,
    UploadedFile,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @ApiOperation({ summary: 'Create user' })
    @ApiBody({ type: CreateUserDto, description: 'Data for user creation' })
    @ApiResponse({ status: 201, type: User })
    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, type: [User] })
    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @ApiOperation({ summary: 'Get one user by id' })
    @ApiParam({ name: 'id', description: 'User id to search' })
    @ApiResponse({ status: 200, type: User })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @ApiOperation({ summary: 'Update one user by id' })
    @ApiParam({ name: 'id', description: 'User id to search' })
    @ApiParam({ name: 'image', description: 'User avatar to update' })
    @ApiBody({ type: UpdateUserDto })
    @ApiResponse({ status: 200 })
    @Patch(':id')
    @UsePipes(ValidationPipe)
    @UseInterceptors(FileInterceptor('image'))
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @UploadedFile() image: Express.Multer.File) {
        return this.usersService.update(+id, updateUserDto, image);
    }

    @ApiOperation({ summary: 'Delete one user by id' })
    @ApiParam({ name: 'id', description: 'User id for search' })
    @ApiResponse({ status: 200 })
    @Delete(':id')
    remove(@Param('id') id: string) {
        this.usersService.remove(+id);
    }
}
