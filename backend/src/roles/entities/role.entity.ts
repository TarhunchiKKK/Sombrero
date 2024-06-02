import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Roles } from '../enums/roles.enum';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: Roles;

    @ManyToMany(() => User, (user: User) => user.roles)
    users: User[];
}
