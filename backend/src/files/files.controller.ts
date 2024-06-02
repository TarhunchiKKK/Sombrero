import { Controller, Delete, Get, Param, Post, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StoredFilesService } from './services/stored-files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { StoredFile } from './entities/stored-file.entiry';
import { FilesService } from './services/files.service';

@ApiTags('Static files')
@Controller('files')
export class FilesController {
    constructor(
        private readonly storedFilesService: StoredFilesService,
        private readonly filesService: FilesService,
    ) {}

    @ApiOperation({ summary: 'Send requested file' })
    @ApiParam({ name: 'filename', description: 'Downloaded file name' })
    @ApiResponse({ status: 200, type: StreamableFile })
    @Get(':filename')
    public downloadFile(@Param('filename') filename: string): StreamableFile {
        return this.filesService.downloadFile(filename);
    }

    @ApiOperation({ summary: 'Get home images count' })
    @ApiResponse({ status: 200, type: Number })
    @Get('home/count')
    public getHomeFilesCount(): Promise<number> {
        return this.storedFilesService.getCount();
    }

    @ApiOperation({ summary: 'Create slider image' })
    @ApiParam({ name: 'image', description: 'Slider image file' })
    @ApiResponse({ status: 200, type: StoredFile })
    @Post('/home')
    @UseInterceptors(FileInterceptor('image'))
    public createHomeImage(@UploadedFile() file: Express.Multer.File): Promise<StoredFile> {
        return this.storedFilesService.create(file);
    }

    @ApiOperation({ summary: 'Remove slider image' })
    @ApiParam({ name: 'id', description: 'Slider image id for search' })
    @Delete('/home/:id')
    public removeHomeImage(@Param('id') id: number) {
        this.storedFilesService.remove(id);
    }
}
