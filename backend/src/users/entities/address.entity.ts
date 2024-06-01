import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Countries } from '../enums/countries.enum';

@Entity()
export class Address {
    @ApiProperty({ example: '1', description: 'User address id' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ enum: Countries, description: 'User country' })
    @Column()
    country: Countries;

    @ApiProperty({ example: 'Moscow', description: 'User city' })
    @Column()
    city: string;

    @ApiProperty({ example: 'Ponomarenko', description: 'User street' })
    @Column({ nullable: true })
    street?: string;

    @ApiProperty({ example: '45', description: 'User house number' })
    @Column({ nullable: true })
    houseNumber?: number;

    @ApiProperty({ example: '12', description: 'User flat number' })
    @Column({ nullable: true })
    flatNumber?: number;
}
