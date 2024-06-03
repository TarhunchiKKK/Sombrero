import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Roles } from '../enums/roles.enum';
import { User } from 'src/users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Role {
    @ApiProperty({ example: 'dba8cd51-8c6b-4f16-a710-64d0957c4812', description: 'Role id' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ enum: Roles, description: 'Role value' })
    @Column()
    value: Roles;

    @ApiProperty({ type: () => [User], description: 'Users with such role' })
    @ManyToMany(() => User, (user: User) => user.roles)
    users: User[];
}
