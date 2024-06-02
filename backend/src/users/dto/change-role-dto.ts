import { Role } from 'src/roles/entities/role.entity';
import { User } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ChangeRoleDto {
    @ApiProperty({ type: () => User, description: 'User changing roles for who (need to extract user id)' })
    @IsNotEmpty()
    user: User;

    @ApiProperty({ type: () => Role, description: 'Role which should be added/removed (need to extract role id)' })
    @IsNotEmpty()
    role: Role;
}
