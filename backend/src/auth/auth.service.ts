import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { ConfirmVerificationDto } from './dto/confirm-verification.dto';
import { MailsService } from '../mails/mails.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    private createUserDtos: CreateUserDto[] = [];

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly mailsService: MailsService,
    ) {}

    public async startRegistration(createUserDto: CreateUserDto) {
        this.createUserDtos.push(createUserDto);
        await this.mailsService.sendVerificationCode(createUserDto.email);
    }

    public async endRegistration(confirmVerificationDto: ConfirmVerificationDto) {
        const verificationResult: boolean = this.mailsService.confirmVerificationCode(
            confirmVerificationDto.email,
            confirmVerificationDto.verificationCode,
        );
        if (verificationResult) {
            const createUserDto: CreateUserDto = this.createUserDtos.find(
                (dto) => dto.email === confirmVerificationDto.email,
            );
            this.createUserDtos = this.createUserDtos.filter((dto) => dto.email !== createUserDto.email);

            const user: User = await this.usersService.create(createUserDto);
            return {
                user: user,
                token: await this.jwtService.sign({ id: user.id, email: user.email }),
            };
        } else {
            throw new BadRequestException('Incorrect veerification code');
        }
    }

    public async login(loginDto: LoginDto) {
        const user: User = await this.usersService.findOneByEmail(loginDto.email);
        if (user) {
            const passwordsMatch: boolean = await argon2.verify(user.password, loginDto.password);
            if (passwordsMatch) {
                return {
                    id: user.id,
                    email: user.email,
                    token: this.jwtService.sign({ id: user.id, email: user.email, roles: user.roles }),
                };
            }
            throw new UnauthorizedException('Incorrect password');
        }
        throw new BadRequestException('No such user');
    }
}
