import { Controller, Get, Param, StreamableFile } from '@nestjs/common';
import { FilesService } from './files.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Static files')
@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @ApiOperation({ summary: 'Get user avatar image' })
    @ApiParam({ name: 'filename', description: 'User avatar filename' })
    @ApiResponse({ status: 200, type: StreamableFile })
    @Get('account/:filename')
    public downloadAccountImage(@Param('filename') filename: string): StreamableFile {
        return this.filesService.downloadAccountImage(filename);
    }

    @ApiOperation({ summary: 'Get advertisement image' })
    @ApiParam({ name: 'filename', description: 'Advertisement image filename' })
    @ApiResponse({ status: 200, type: StreamableFile })
    @Get('advertisement/:filename')
    public downloadAdvertisementImage(@Param('filename') filename: string): StreamableFile {
        return this.filesService.downloadAdvertisementImage(filename);
    }

    @ApiOperation({ summary: 'Get contact person avatar' })
    @ApiParam({ name: 'filename', description: 'Contact person avatar filename' })
    @ApiResponse({ status: 200, type: StreamableFile })
    @Get('contact/:filename')
    public downloadContactImage(@Param('filename') filename: string): StreamableFile {
        return this.filesService.downloadContactImage(filename);
    }

    @ApiOperation({ summary: 'Get home images count' })
    @ApiResponse({ status: 200, type: Number })
    @Get('home/count')
    public getHomeFilesCount(): Promise<number> {
        return this.filesService.getHomeImagesCount();
    }

    @ApiOperation({ summary: 'Get slider image' })
    @ApiParam({ name: 'filename', description: 'Slider image filename' })
    @ApiResponse({ status: 200, type: StreamableFile })
    @Get('home/:filename')
    public downloadHomeImage(@Param('filename') filename: string): StreamableFile {
        return this.filesService.downloadHomeImage(filename);
    }
}
