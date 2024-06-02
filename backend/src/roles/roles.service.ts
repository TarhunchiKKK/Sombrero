import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { Roles } from './enums/roles.enum';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Role)
        private readonly rolesRepository: Repository<Role>,
    ) {}

    public async create(createRoleDto: CreateRoleDto): Promise<Role> {
        const existRole = await this.rolesRepository.findOne({
            where: {
                value: createRoleDto.value,
            },
        });

        if (existRole) {
            throw new BadRequestException('Such role already exist');
        }

        return await this.rolesRepository.save(createRoleDto);
    }

    public async findAll(): Promise<Role[]> {
        return await this.rolesRepository.find();
    }

    public async findOne(id: number): Promise<Role> {
        const role: Role = await this.rolesRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!role) {
            throw new BadRequestException('Such role not found');
        }

        return role;
    }

    public async findOneByValue(value: Roles): Promise<Role> {
        const role: Role = await this.rolesRepository.findOne({
            where: {
                value: value,
            },
        });

        if (!role) {
            throw new BadRequestException('Such role not found');
        }

        return role;
    }

    public async update(id: number, updateRoleDto: UpdateRoleDto): Promise<void> {
        const role: Role = await this.rolesRepository.findOne({
            where: {
                id: id,
            },
        });

        if (!role) {
            throw new BadRequestException('Such role not found');
        }

        await this.rolesRepository.update(id, updateRoleDto);
    }

    public async remove(id: number): Promise<void> {
        await this.rolesRepository.delete(id);
    }
}
