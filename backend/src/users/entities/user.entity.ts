import { Advertisement } from 'src/advertisements/entities/advertisement.entity';
import { Address } from './address.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    phoneNumber: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    registrationDate: Date;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @Column({ nullable: true })
    photo?: string;

    @OneToMany(
        () => Advertisement,
        (advertisment: Advertisement) => advertisment.vendor,
        {
            onDelete: 'CASCADE',
        },
    )
    salesList: Advertisement[];

    @ManyToMany(
        () => Advertisement,
        (advertisment: Advertisement) => advertisment.wishedUsers,
        {
            onDelete: 'NO ACTION',
        },
    )
    wishList: Advertisement[];

    @OneToMany(
        () => Advertisement,
        (advertisment: Advertisement) => advertisment.buyer,
        {
            onDelete: 'CASCADE',
        },
    )
    purchasesList: Advertisement[];
}
