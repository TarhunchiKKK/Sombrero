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
    Inject,
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
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@ApiTags('Advertisements')
@Controller('advertisements')
export class AdvertisementsController {
    constructor(
        private readonly advertisementsService: AdvertisementsService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {
        this.cacheManager.reset();
    }

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
    public async findAll(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 100,
        @Query('category') categoryId: string = undefined,
    ) {
        const cachedAdvertisements: Advertisement[] = await this.cacheManager.get(
            `advertisements:${page}:${limit}:${categoryId}`,
        );

        if (!cachedAdvertisements) {
            const advertisements: Advertisement[] = await this.advertisementsService.findAll(page, limit, categoryId);
            this.cacheManager.set(`advertisements:${page}:${limit}:${categoryId}`, advertisements, 20000);
            return advertisements;
        }

        return cachedAdvertisements;
    }

    @ApiOperation({ summary: 'Get one advertisement by id' })
    @ApiParam({ name: 'id', description: 'Advertisement id for search' })
    @ApiResponse({ type: Advertisement })
    @Get(':id')
    public async findOne(@Param('id') id: string) {
        const cachedAdvertisement: Advertisement = await this.cacheManager.get(`advertisement:${id}`);
        if (!cachedAdvertisement) {
            const advertisement: Advertisement = await this.advertisementsService.findOne(id);
            this.cacheManager.set(`advertisement:${id}`, advertisement, 20000);
            return advertisement;
        }
        return cachedAdvertisement;
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
        this.cacheManager.del(`advertisement:${id}`);
        return this.advertisementsService.update(id, updateAdvertisementDto, image);
    }

    @ApiOperation({ summary: 'Remove one advertisement by id' })
    @ApiParam({ name: 'id', description: 'Advertisement id for search' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        this.cacheManager.del(`advertisement:${id}`);
        return this.advertisementsService.remove(id);
    }

    @ApiOperation({ summary: 'Like one advertisement' })
    @ApiBody({ type: LikeAdvertisementDto })
    @ApiResponse({ status: 200 })
    @Post('like')
    likeAdvertisement(@Body() likeDto: LikeAdvertisementDto) {
        this.cacheManager.del(`advertisement:${likeDto.advertisement.id}`);
        return this.advertisementsService.likeAdvertisement(likeDto);
    }

    @ApiOperation({ summary: 'Buy one advertisement' })
    @ApiBody({ type: BuyAdvertisementDto })
    @ApiResponse({ status: 200 })
    @Post('buy')
    buyAdvertisement(@Body() buyAdvertisementDto: BuyAdvertisementDto) {
        this.cacheManager.del(`advertisement:${buyAdvertisementDto.advertisement.id}`);
        return this.advertisementsService.buyAdvertisement(buyAdvertisementDto);
    }

    @ApiOperation({ summary: 'Change advertisement category' })
    @ApiBody({ type: ChangeAdvertisementCategoryDto })
    @ApiResponse({ status: 200, type: Advertisement })
    @Post('category')
    changeAdvertisementCategory(@Body() dto: ChangeAdvertisementCategoryDto) {
        this.cacheManager.del(`advertisement:${dto.advertisement.id}`);
        return this.advertisementsService.changeAdvertisementCategory(dto);
    }
}
