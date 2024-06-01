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
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Advertisement } from './entities/advertisement.entity';
import { ChangeAdvertisementCategoryDto } from './dto/change-advertisement-category.dto';

@ApiTags('Advertisements')
@Controller('advertisements')
export class AdvertisementsController {
    constructor(private readonly advertisementsService: AdvertisementsService) {}

    @ApiOperation({ summary: 'Create advertisemnt' })
    @ApiParam({ name: 'image', description: 'Advertisement image' })
    @ApiBody({ type: CreateAdvertisementDto })
    @ApiResponse({ status: 201, type: Advertisement })
    @Post()
    @UsePipes(ValidationPipe)
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() createAdvertisementDto: CreateAdvertisementDto, @UploadedFile() image: Express.Multer.File) {
        return this.advertisementsService.create(createAdvertisementDto, image);
    }

    @ApiOperation({ summary: 'Find all advertisements' })
    @ApiParam({ name: 'page', description: 'Page for pagination' })
    @ApiParam({ name: 'limit', description: 'One page advertisements count' })
    @ApiParam({ name: 'categoryId', description: 'Category for search' })
    @ApiResponse({ status: 200, type: [Advertisement] })
    @Get()
    findAll(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 100,
        @Query('category') categoryId: number = undefined,
    ) {
        return this.advertisementsService.findAll(page, limit, categoryId);
    }

    @ApiOperation({ summary: 'Get one advertisement by id' })
    @ApiParam({ name: 'id', description: 'Advertisement id for search' })
    @ApiResponse({ type: Advertisement })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.advertisementsService.findOne(+id);
    }

    @ApiOperation({ summary: 'Update one advertisement by id' })
    @ApiParam({ name: 'id', description: 'Advertisement id for search' })
    @ApiParam({ name: 'image', description: 'Advertisement image to update' })
    @ApiBody({ type: UpdateAdvertisementDto })
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

    @ApiOperation({ summary: 'Remove one advertisement by id' })
    @ApiParam({ name: 'id', description: 'Advertisement id for search' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.advertisementsService.remove(+id);
    }

    @ApiOperation({ summary: 'Like one advertisement' })
    @ApiBody({ type: LikeAdvertisementDto })
    @ApiResponse({ status: 200 })
    @Post('like')
    likeAdvertisement(@Body() likeDto: LikeAdvertisementDto) {
        return this.advertisementsService.likeAdvertisement(likeDto);
    }

    @ApiOperation({ summary: 'Buy one advertisement' })
    @ApiBody({ type: BuyAdvertisementDto })
    @ApiResponse({ status: 200 })
    @Post('buy')
    buyAdvertisement(@Body() buyAdvertisementDto: BuyAdvertisementDto) {
        return this.advertisementsService.buyAdvertisement(buyAdvertisementDto);
    }

    @ApiOperation({ summary: 'Change advertisement category' })
    @ApiBody({ type: ChangeAdvertisementCategoryDto })
    @ApiResponse({ status: 200, type: Advertisement })
    @Post('category')
    changeAdvertisementCategory(@Body() dto: ChangeAdvertisementCategoryDto) {
        return this.advertisementsService.changeAdvertisementCategory(dto);
    }
}
