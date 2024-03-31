import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,

        @InjectRepository(Address)
        private readonly addressesRepository: Repository<Address>,

        private readonly jwtService: JwtService,
    ) {}

    public async create(createUserDto: CreateUserDto): Promise<any> {
        const existUser: User = await this.usersRepository.findOne({
            where: {
                email: createUserDto.email,
            },
        });

        if (existUser) {
            throw new BadRequestException('This user already exists');
        }

        const address: Address = await this.addressesRepository.save({
            ...createUserDto.address,
        });

        const user: User = await this.usersRepository.save({
            ...createUserDto,
            password: await argon2.hash(createUserDto.password),
            address: address,
        });

        return {
            ...user,
            token: await this.jwtService.sign({ id: user.id, email: user.email }),
        };
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
            relations: {
                address: true,
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

    public async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
        const user: User = await this.usersRepository.findOne({
            where: {
                id: id,
            },
            relations: {
                address: true,
            },
        });

        if (!user) {
            throw new BadRequestException('No such user');
        }

        if (updateUserDto.address) {
            await this.addressesRepository.update(user.address.id, updateUserDto.address);
        }

        await this.usersRepository.update(id, updateUserDto);
    }

    public async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
