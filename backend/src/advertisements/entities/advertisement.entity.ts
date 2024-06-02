import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Advertisement {
    @ApiProperty({ example: '1', description: 'Advertisement id' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Велосипед', description: 'Advertisement title' })
    @Column()
    title: string;

    @ApiProperty({ example: 'Большая строка', description: 'Advertisement description' })
    @Column({ nullable: true })
    description: string;

    @ApiProperty({ example: '200', description: 'Advertisement price' })
    @Column()
    price: number;

    @ApiProperty({ example: 'false', description: 'Was advertisement bought by somebody' })
    @Column({ default: false })
    saleStatus: boolean;

    @ApiProperty({ example: 'u3TMx6J0p7QxrI33o8vPI9HEy5a6TSJs.jpg', description: 'Advertisement photo' })
    @Column({ nullable: true })
    photo: string;

    @ApiProperty({ type: () => Category, description: 'Advertisement category' })
    @ManyToOne(() => Category, (category: Category) => category.advertisements, {
        onDelete: 'SET NULL',
    })
    category: Category;

    @ApiProperty({ type: () => User, description: 'Product vendor' })
    @ManyToOne(() => User, (user: User) => user.salesList, {
        onDelete: 'SET NULL',
    })
    vendor: User;

    @ApiProperty({ type: () => [User], description: 'Users liked this advertisement' })
    @ManyToMany(() => User, (user: User) => user.wishList)
    wishedUsers: User[];

    @ApiProperty({ type: () => User, description: 'User who bought this product' })
    @ManyToOne(() => User, (user: User) => user.purchasesList, {
        onDelete: 'CASCADE',
    })
    buyer: User;
}
