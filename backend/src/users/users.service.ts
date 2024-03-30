import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
        @InjectRepository(Address)
        private readonly addressesRepository: Repository<Address>,
    ) {}

    public async create(createUserDto: CreateUserDto): Promise<User> {
        const existUser: User = await this.usersRepository.findOne({
            where: {
                email: createUserDto.email,
            },
        });

        console.log('Exist user');

        if (existUser) {
            throw new BadRequestException('This user already exists');
        }

        console.log('Before saving address');
        const address: Address = await this.addressesRepository.save({
            ...createUserDto.address,
        });

        console.log('Before saving user');

        return await this.usersRepository.save({
            ...createUserDto,
            address: address,
        });
    }

    public async findAll(): Promise<User[]> {
        return await this.usersRepository.find({
            relations: {
                address: true,
                salesList: false,
                wishList: false,
                purchasesList: false,
            },
        });
    }

    public async findOne(id: number): Promise<User> {
        return await this.usersRepository.findOne({
            where: {
                id: id,
            },
        });
    }

    public async findOneByEmail(email: string): Promise<User> {
        return await this.usersRepository.findOne({
            where: {
                email: email,
            },
        });
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
