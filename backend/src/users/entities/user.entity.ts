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

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    surname: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    registrationDate: Date;

    @OneToOne(() => Address, {
        onDelete: 'CASCADE',
    })
    @JoinColumn()
    address: Address;

    @Column({ nullable: true })
    photo?: string;

    @OneToMany(() => Advertisement, (advertisment: Advertisement) => advertisment.vendor, {
        onDelete: 'CASCADE',
    })
    salesList: Advertisement[];

    @ManyToMany(() => Advertisement, (advertisment: Advertisement) => advertisment.wishedUsers)
    @JoinTable()
    wishList: Advertisement[];

    @OneToMany(() => Advertisement, (advertisment: Advertisement) => advertisment.buyer)
    purchasesList: Advertisement[];
}
