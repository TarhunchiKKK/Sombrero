import { Advertisement } from 'src/advertisements/entities/advertisement.entity';
import { Address } from './address.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/roles/entities/role.entity';

@Entity()
export class User {
    @ApiProperty({ example: 'dba8cd51-8c6b-4f16-a710-64d0957c4812', description: 'User id' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ example: 'Victor', description: 'User name' })
    @Column({ nullable: true })
    name: string;

    @ApiProperty({ example: 'Barinov', description: 'User surname' })
    @Column({ nullable: true })
    surname: string;

    @ApiProperty({ example: '+375298672635', description: 'User phone number' })
    @Column({ nullable: true })
    phoneNumber: string;

    @ApiProperty({ example: 'victorbarinov@gmail.com', description: 'User email' })
    @Column()
    email: string;

    @ApiProperty({ example: '123456789', description: 'User password' })
    @Column()
    password: string;

    @ApiProperty({ example: 'u3TMx6J0p7QxrI33o8vPI9HEy5a6TSJs.jpg', description: 'User avatar' })
    @Column({ nullable: true })
    photo?: string;

    @ApiProperty({ example: '', description: 'User id' })
    @CreateDateColumn()
    registrationDate: Date;

    @ApiProperty({ type: () => Address, description: 'User address' })
    @OneToOne(() => Address, {
        onDelete: 'CASCADE',
    })
    @JoinColumn()
    address: Address;

    @ApiProperty({ type: () => [Advertisement], description: 'User advertisements' })
    @OneToMany(() => Advertisement, (advertisment: Advertisement) => advertisment.vendor, {
        onDelete: 'CASCADE',
    })
    salesList: Advertisement[];

    @ApiProperty({ type: () => [Advertisement], description: 'Advertisements user liked' })
    @ManyToMany(() => Advertisement, (advertisment: Advertisement) => advertisment.wishedUsers)
    @JoinTable()
    wishList: Advertisement[];

    @ApiProperty({ type: () => [Advertisement], description: 'Advertisements user bought' })
    @OneToMany(() => Advertisement, (advertisment: Advertisement) => advertisment.buyer)
    purchasesList: Advertisement[];

    @ApiProperty({ type: () => [Role], description: 'Roles this user has' })
    @ManyToMany(() => Role, (role: Role) => role.users)
    @JoinTable()
    roles: Role[];
}
