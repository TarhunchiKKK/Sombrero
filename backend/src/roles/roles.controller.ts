import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './entities/role.entity';
import { RequiredRoles } from './decorators/roles.decorator';
import { Roles } from './enums/roles.enum';
import { RolesGuard } from './middleware/roles.guard';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @ApiOperation({ summary: 'Create new role' })
    @ApiBody({ type: CreateRoleDto })
    @ApiResponse({ status: 201, type: Role })
    @RequiredRoles(Roles.Admin)
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() createRoleDto: CreateRoleDto) {
        return this.rolesService.create(createRoleDto);
    }

    @ApiOperation({ summary: 'Return all roles' })
    @ApiResponse({ type: [Role] })
    @Get()
    findAll() {
        return this.rolesService.findAll();
    }

    @ApiOperation({ summary: 'Find one role by id' })
    @ApiParam({ name: 'id', description: 'Role id for search' })
    @ApiResponse({ type: Role })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.rolesService.findOne(id);
    }

    @ApiOperation({ summary: 'Update role by id' })
    @ApiParam({ name: 'id', description: 'Role id for search' })
    @ApiBody({ type: UpdateRoleDto })
    @RequiredRoles(Roles.Admin)
    @UseGuards(RolesGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
        return this.rolesService.update(id, updateRoleDto);
    }

    @ApiOperation({ summary: 'Remove role by id' })
    @ApiParam({ name: 'id', description: 'Role id for search' })
    @RequiredRoles(Roles.Admin)
    @UseGuards(RolesGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.rolesService.remove(id);
    }
}
