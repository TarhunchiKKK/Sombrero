import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigOptions } from 'src/config';
import { Reflector } from '@nestjs/core';

@Module({
    imports: [TypeOrmModule.forFeature([Role]), JwtModule.register(JwtConfigOptions), Reflector],
    controllers: [RolesController],
    providers: [RolesService],
    exports: [RolesService],
})
export class RolesModule {}
