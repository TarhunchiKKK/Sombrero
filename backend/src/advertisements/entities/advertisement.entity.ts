import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/users/entities/user.entity';
import {
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Advertisement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    price: number;

    @Column({ default: false })
    saleStatus: boolean;

    @Column({ nullable: true })
    photo: string;

    @ManyToOne(() => Category, (category: Category) => category.advertisements)
    category: Category;

    @ManyToOne(() => User, (user: User) => user.salesList)
    vendor: User;

    @ManyToMany(() => User, (user: User) => user.wishList)
    wishedUsers: User[];

    @ManyToOne(() => User, (user: User) => user.purchasesList)
    buyer: User;
}
