import { ApiProperty } from '@nestjs/swagger';
import { Roles } from '../enums/roles.enum';
import { IsNotEmpty } from 'class-validator';

export class UpdateRoleDto {
    @ApiProperty({ enum: Roles, description: 'Role value' })
    @IsNotEmpty()
    value: Roles;
}
