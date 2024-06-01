import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from './entities/category.entity';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @ApiOperation({ summary: 'Create new category' })
    @ApiBody({ type: CreateCategoryDto })
    @ApiResponse({ status: 201, type: Category })
    @Post()
    create(@Body() dto: CreateCategoryDto) {
        return this.categoriesService.create(dto);
    }

    @ApiOperation({ summary: 'Get all categories' })
    @ApiResponse({ status: 200, type: [Category] })
    @Get()
    findAll() {
        return this.categoriesService.findAll();
    }

    @ApiOperation({ summary: 'Get one category by id' })
    @ApiParam({ name: 'id', description: 'Category id to search' })
    @ApiResponse({ status: 200, type: Category })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.categoriesService.findOne(+id);
    }

    @ApiOperation({ summary: 'Update one category by id' })
    @ApiParam({ name: 'id', description: 'Category id to search' })
    @ApiBody({ type: UpdateCategoryDto })
    @Patch(':id')
    update(@Param('id') id: number, @Body() dto: UpdateCategoryDto) {
        return this.categoriesService.updtate(id, dto);
    }

    @ApiOperation({ summary: 'Delete one category by id' })
    @ApiParam({ name: 'id', description: 'Category id to search' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.categoriesService.remove(+id);
    }
}
