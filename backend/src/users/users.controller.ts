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

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @Patch(':id')
    @UsePipes(ValidationPipe)
    @UseInterceptors(FileInterceptor('image'))
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @UploadedFile() image: Express.Multer.File) {
        return this.usersService.update(+id, updateUserDto, image);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.usersService.remove(+id);
    }
}
