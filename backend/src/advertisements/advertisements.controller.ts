import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, Query, ValidationPipe } from '@nestjs/common';
import { AdvertisementsService } from './advertisements.service';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { LikeAdvertisementDto } from './dto/like-advertisement.dto';
import { BuyAdvertisementDto } from './dto/buy-advertisement.dto';

@Controller('advertisements')
export class AdvertisementsController {
    constructor(private readonly advertisementsService: AdvertisementsService) {}

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createAdvertisementDto: CreateAdvertisementDto) {
        return this.advertisementsService.create(createAdvertisementDto);
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
    update(@Param('id') id: string, @Body() updateAdvertisementDto: UpdateAdvertisementDto) {
        return this.advertisementsService.update(+id, updateAdvertisementDto);
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
