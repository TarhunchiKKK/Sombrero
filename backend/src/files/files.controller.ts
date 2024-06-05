import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    StreamableFile,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StoredFilesService } from './services/stored-files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { StoredFile } from './entities/stored-file.entiry';
import { FilesService } from './services/files.service';
import { RequiredRoles } from 'src/roles/decorators/roles.decorator';
import { RolesGuard } from 'src/roles/middleware/roles.guard';
import { Roles } from 'src/roles/enums/roles.enum';
import { ScreenSizes } from './enums/screen-size.enum';
import { CreateStoredFileDto } from './dto/create-stored-file.dto';

@ApiTags('Static files')
@Controller('files')
export class FilesController {
    constructor(
        private readonly storedFilesService: StoredFilesService,
        private readonly filesService: FilesService,
    ) {}

    @ApiOperation({ summary: 'Get home images count' })
    @ApiResponse({ status: 200, type: Number })
    @RequiredRoles(Roles.Admin)
    @UseGuards(RolesGuard)
    @Get('home/count')
    public getHomeFilesCount(): Promise<number> {
        return this.storedFilesService.getCount();
    }

    @ApiOperation({ summary: 'Get home images' })
    @ApiParam({ name: 'screen', enum: ScreenSizes, description: 'Screen size for searched image' })
    @ApiResponse({ status: 200, type: [StoredFile] })
    @Get('home/:screen')
    public async getHomeFiles(@Param('screen') screenSize: ScreenSizes): Promise<StoredFile[]> {
        return await this.storedFilesService.findAll(screenSize);
    }

    @ApiOperation({ summary: 'Create slider image' })
    @ApiBody({ type: CreateStoredFileDto })
    @ApiParam({ name: 'image', description: 'Slider image file' })
    @ApiResponse({ status: 200, type: StoredFile })
    @RequiredRoles(Roles.Admin)
    @UseGuards(RolesGuard)
    @UseInterceptors(FileInterceptor('image'))
    @Post('/home')
    public createHomeImage(
        @Body() dto: CreateStoredFileDto,
        @UploadedFile() file: Express.Multer.File,
    ): Promise<StoredFile> {
        return this.storedFilesService.create(dto, file);
    }

    @ApiOperation({ summary: 'Remove slider image' })
    @ApiParam({ name: 'id', description: 'Slider image id for search' })
    @RequiredRoles(Roles.Admin)
    @UseGuards(RolesGuard)
    @Delete('/home/:id')
    public removeHomeImage(@Param('id') id: string) {
        this.storedFilesService.remove(id);
    }

    @ApiOperation({ summary: 'Send requested file' })
    @ApiParam({ name: 'filename', description: 'Downloaded file name' })
    @ApiResponse({ status: 200, type: StreamableFile })
    @Get(':filename')
    public downloadFile(@Param('filename') filename: string): StreamableFile {
        return this.filesService.downloadFile(filename);
    }
}
