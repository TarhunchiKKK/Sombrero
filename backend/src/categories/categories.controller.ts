import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from './entities/category.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { RolesGuard } from 'src/roles/middleware/roles.guard';
import { RequiredRoles } from 'src/roles/decorators/roles.decorator';
import { Roles } from 'src/roles/enums/roles.enum';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
    constructor(
        private readonly categoriesService: CategoriesService,

        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {
        this.cacheManager.reset();
    }

    @ApiOperation({ summary: 'Create new category' })
    @ApiBody({ type: CreateCategoryDto })
    @ApiResponse({ status: 201, type: Category })
    @RequiredRoles(Roles.Admin)
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() dto: CreateCategoryDto) {
        this.cacheManager.del('categories');
        return this.categoriesService.create(dto);
    }

    @ApiOperation({ summary: 'Get all categories' })
    @ApiResponse({ status: 200, type: [Category] })
    @Get()
    public async findAll() {
        const cachedCategories: Category = await this.cacheManager.get('categories');
        if (!cachedCategories) {
            const categories: Category[] = await this.categoriesService.findAll();
            this.cacheManager.set('categories', categories);
            return categories;
        }
        return cachedCategories;
    }

    @ApiOperation({ summary: 'Get one category by id' })
    @ApiParam({ name: 'id', description: 'Category id to search' })
    @ApiResponse({ status: 200, type: Category })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.categoriesService.findOne(id);
    }

    @ApiOperation({ summary: 'Update one category by id' })
    @ApiParam({ name: 'id', description: 'Category id to search' })
    @ApiBody({ type: UpdateCategoryDto })
    @RequiredRoles(Roles.Admin)
    @UseGuards(RolesGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
        this.cacheManager.del('categories');
        return this.categoriesService.updtate(id, dto);
    }

    @ApiOperation({ summary: 'Delete one category by id' })
    @ApiParam({ name: 'id', description: 'Category id to search' })
    @RequiredRoles(Roles.Admin)
    @UseGuards(RolesGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        this.cacheManager.del('categories');
        return this.categoriesService.remove(id);
    }
}
