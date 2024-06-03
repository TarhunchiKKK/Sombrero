import { ApiProperty } from '@nestjs/swagger';
import { Roles } from '../enums/roles.enum';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateRoleDto {
    @ApiProperty({ enum: Roles, description: 'Role value' })
    @IsNotEmpty()
    @IsEnum(Roles, { message: 'No such role' })
    value: Roles;
}
