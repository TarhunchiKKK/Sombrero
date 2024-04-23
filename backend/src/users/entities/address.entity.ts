import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Countries {
    Belarus = 'Belarus',
    Russia = 'Russia',
    Poland = 'Poland',
    Kazakhstan = 'Kazakhstan',
    France = 'France',
}

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: Countries;

    @Column()
    city: string;

    @Column({ nullable: true })
    street?: string;

    @Column({ nullable: true })
    houseNumber?: number;

    @Column({ nullable: true })
    flatNumber?: number;
}
