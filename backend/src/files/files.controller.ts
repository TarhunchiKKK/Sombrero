import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Post,
    StreamableFile,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { DownloadFileDto } from './dto/download-file.dto';
import { FilesControllerRoutes } from './enums/files-controller-routes.enum';

@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @Get(FilesControllerRoutes.Account)
    public downloadAccountImage(@Body() downloadFileDto: DownloadFileDto): StreamableFile {
        if (downloadFileDto.fileName) {
            return this.filesService.downloadAccountImage(downloadFileDto.fileName);
        }
        throw new BadRequestException('Filename should be provided');
    }

    @Post(FilesControllerRoutes.Account)
    @UseInterceptors(FileInterceptor('file'))
    public uploadAccountImage(@UploadedFile() file: Express.Multer.File) {
        this.filesService.uploadAccountImage(file);
    }

    @Get(FilesControllerRoutes.Advertisement)
    public downloadAdvertisementImage(@Body() downloadFileDto: DownloadFileDto): StreamableFile {
        if (downloadFileDto.fileName) {
            return this.filesService.downloadAdvertisementImage(downloadFileDto.fileName);
        }
        throw new BadRequestException('Filename should be provided');
    }

    @Post(FilesControllerRoutes.Advertisement)
    @UseInterceptors(FileInterceptor('file'))
    public uploadAdvertisemetImage(@UploadedFile() file: Express.Multer.File) {
        this.filesService.uploadAdvertisementImage(file);
    }

    @Get(FilesControllerRoutes.Category)
    public downloadCategoryImage(@Body() downloadFileDto: DownloadFileDto): StreamableFile {
        if (downloadFileDto.fileName) {
            return this.filesService.downloadCategoryImage(downloadFileDto.fileName);
        }
        throw new BadRequestException('Filename should be provided');
    }

    @Post(FilesControllerRoutes.Category)
    @UseInterceptors(FileInterceptor('file'))
    public uploadCategoryImage(@UploadedFile() file: Express.Multer.File) {
        this.filesService.uploadCategoryImage(file);
    }
}
