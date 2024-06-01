import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { UserValidationResult } from './types/user-validation-result.type';
import { UserValidationStatus } from './types/user-validation-status.enum';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { ConfirmVerificationDto } from './dto/confirm-verification.dto';
import { MailsService } from '../mails/mails.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
    private createUserDtos: CreateUserDto[] = [];

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly mailsService: MailsService,
    ) {}

    public async validateUser(email: string, password: string): Promise<UserValidationResult> {
        const user: User = await this.usersService.findOneByEmail(email);
        if (user) {
            const passwordsMatch: boolean = await argon2.verify(user.password, password);
            if (passwordsMatch) {
                const { password: pass, ...result } = user;
                return {
                    status: UserValidationStatus.OK,
                    user: result,
                };
            }
            return {
                status: UserValidationStatus.INCORRECT_PASSWORD,
                user: null,
            };
        }
        return {
            status: UserValidationStatus.NO_SUCH_USER,
            user: null,
        };
    }

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

    public async login(user: User) {
        console.log(user);
        const { id, email } = user;
        return {
            id,
            email,
            token: this.jwtService.sign({ id: user.id, email: user.email }),
        };
    }
}
