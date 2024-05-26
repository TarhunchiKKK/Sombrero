import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    post: string;

    @Column({ nullable: true })
    photo: string;

    @Column({ nullable: false })
    about: string;
}
