import { Controller, Get, Param, Post, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @Get('account/:filename')
    public downloadAccountImage(@Param('filename') filename: string): StreamableFile {
        return this.filesService.downloadAccountImage(filename);
    }

    @Post('account')
    @UseInterceptors(FileInterceptor('account'))
    public uploadAccountImage(@UploadedFile() file: Express.Multer.File) {
        this.filesService.uploadAccountImage(file);
    }

    @Get('advertisement/:filename')
    public downloadAdvertisementImage(@Param('filename') filename: string): StreamableFile {
        return this.filesService.downloadAdvertisementImage(filename);
    }

    @Post('advertisement')
    @UseInterceptors(FileInterceptor('advrtisement'))
    public uploadAdvertisemetImage(@UploadedFile() file: Express.Multer.File) {
        this.filesService.uploadAdvertisementImage(file);
    }
}
