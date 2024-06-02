import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Address } from './entities/address.entity';
import * as argon2 from 'argon2';
import { FilesService } from 'src/files/services/files.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,

        @InjectRepository(Address)
        private readonly addressesRepository: Repository<Address>,

        private readonly filesServide: FilesService,
    ) {}

    public async create(createUserDto: CreateUserDto): Promise<any> {
        const existUser: User = await this.usersRepository.findOne({
            where: {
                email: createUserDto.email,
            },
        });

        if (existUser) {
            throw new BadRequestException('User with such email already exists');
        }

        if (createUserDto.address) {
            const address: Address = await this.addressesRepository.save({
                ...createUserDto.address,
            });
            createUserDto.address = address;
        }

        return await this.usersRepository.save({
            ...createUserDto,
            password: await argon2.hash(createUserDto.password),
            // address: address,
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
            relations: {
                address: true,
                salesList: true,
                wishList: true,
                purchasesList: true,
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

    public async update(id: number, updateUserDto: UpdateUserDto, image: Express.Multer.File): Promise<void> {
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

        if (image) {
            const photo: string = this.filesServide.createFile(image);
            this.filesServide.removeFile(user.photo);
            user.photo = photo;
        }

        await this.usersRepository.update(id, {
            ...user,
            ...updateUserDto,
            address: undefined,
        });
    }

    public async remove(id: number): Promise<void> {
        const user: User = await this.usersRepository.findOne({
            where: {
                id: id,
            },
            relations: {
                address: true,
            },
        });

        if (!user) {
            throw new NotFoundException(`User with id=${id} not found`);
        }

        this.filesServide.removeFile(user.photo);

        // await this.addressesRepository.delete(user.address.id);
        await this.usersRepository.delete(id);
    }
}
