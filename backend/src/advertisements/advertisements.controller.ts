import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UsePipes,
    Query,
    ValidationPipe,
    UseInterceptors,
    UploadedFile,
} from '@nestjs/common';
import { AdvertisementsService } from './advertisements.service';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { LikeAdvertisementDto } from './dto/like-advertisement.dto';
import { BuyAdvertisementDto } from './dto/buy-advertisement.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('advertisements')
export class AdvertisementsController {
    constructor(private readonly advertisementsService: AdvertisementsService) {}

    @Post()
    @UsePipes(ValidationPipe)
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() createAdvertisementDto: CreateAdvertisementDto, @UploadedFile() image: Express.Multer.File) {
        return this.advertisementsService.create(createAdvertisementDto, image);
    }

    @Get()
    findAll(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 100,
        @Query('category') categoryId: number = undefined,
    ) {
        return this.advertisementsService.findAll(page, limit, categoryId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.advertisementsService.findOne(+id);
    }

    @Patch(':id')
    @UsePipes(ValidationPipe)
    @UseInterceptors(FileInterceptor('image'))
    update(
        @Param('id') id: string,
        @Body() updateAdvertisementDto: UpdateAdvertisementDto,
        @UploadedFile() image: Express.Multer.File,
    ) {
        return this.advertisementsService.update(+id, updateAdvertisementDto, image);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.advertisementsService.remove(+id);
    }

    @Post('like')
    likeAdvertisement(@Body() likeDto: LikeAdvertisementDto) {
        return this.advertisementsService.likeAdvertisement(likeDto);
    }

    @Post('buy')
    buyAdvertisement(@Body() buyAdvertisementDto: BuyAdvertisementDto) {
        return this.advertisementsService.buyAdvertisement(buyAdvertisementDto);
    }
}
