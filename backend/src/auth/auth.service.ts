import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { UserValidationResult } from './types/user-validation-result.type';
import { UserValidationStatus } from './types/user-validation-status.enum';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { getMailText } from './helpers/getMailText';
import { getMailHtml } from './helpers/getMailHtml';
import { generateVerificationCode } from './helpers/generateVerificationCode';
import { SendMailDto } from './dto/send-mail.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {}

    public async validateUser(email: string, password: string): Promise<UserValidationResult> {
        const user: User = await this.usersService.findOneByEmail(email);
        if (user && user.password === password) {
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

    public async login(user: User) {
        const { id, email } = user;
        return {
            id,
            email,
            token: this.jwtService.sign({ id: user.id, email: user.email }),
        };
    }

    getMailTransport() {
        const transport = nodemailer.createTransport({
            service: this.configService.get<string>('MAIL_SERVICE'),
            auth: {
                user: this.configService.get<string>('MAIL_USER'),
                pass: this.configService.get<string>('MAIL_PASSWORD'),
            },
        });
        return transport;
    }

    async sendVerificationCode(sendMailDto: SendMailDto) {
        const transport = this.getMailTransport();

        const verificationCode: string = generateVerificationCode();

        const options: Mail.Options = {
            from: {
                name: this.configService.get<string>('MAIL_FROM'),
                address: this.configService.get<string>('MAIL_ADDRESS'),
            },
            to: [
                {
                    name: '',
                    address: sendMailDto.recipientEmail,
                },
            ],
            subject: this.configService.get<string>('MAIL_SUBJECT'),
            text: getMailText(sendMailDto.recipientEmail, verificationCode),
            html: getMailHtml(sendMailDto.recipientEmail, verificationCode),
        };

        try {
            const result = await transport.sendMail(options);
            return result;
        } catch (error) {
            console.error('Error: ', error);
        }
    }
}
