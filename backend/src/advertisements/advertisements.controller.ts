import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, Query } from '@nestjs/common';
import { AdvertisementsService } from './advertisements.service';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { CreateAdvertisementDtoValidatioonPipe } from './pipes/create-advertisement-dto-validation.pipe';
import { UpdateAdvertisementDtoValidatioonPipe } from './pipes/update-advertisement-dto-validation.pipe';
import { LikeAdvertisementDto } from './dto/like-advertisement.dto';
import { BuyAdvertisementDto } from './dto/buy-advertisement.dto';

@Controller('advertisements')
export class AdvertisementsController {
    constructor(private readonly advertisementsService: AdvertisementsService) {}

    @Post()
    @UsePipes(CreateAdvertisementDtoValidatioonPipe)
    create(@Body() createAdvertisementDto: CreateAdvertisementDto) {
        return this.advertisementsService.create(createAdvertisementDto);
    }

    @Get()
    findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 40) {
        return this.advertisementsService.findAll(page, limit);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.advertisementsService.findOne(+id);
    }

    @Patch(':id')
    @UsePipes(UpdateAdvertisementDtoValidatioonPipe)
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
