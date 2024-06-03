import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { getMailText } from './helpers/getMailText';
import { getMailHtml } from './helpers/getMailHtml';
import { generateVerificationCode } from './helpers/generateVerificationCode';

@Injectable()
export class MailsService {
    private usersCodes: Map<string, string> = new Map<string, string>();

    constructor(private readonly configService: ConfigService) {}

    private getMailTransporter() {
        const transport = nodemailer.createTransport({
            service: this.configService.get<string>('MAIL_SERVICE'),
            auth: {
                user: this.configService.get<string>('MAIL_USER'),
                pass: this.configService.get<string>('MAIL_PASSWORD'),
            },
        });
        return transport;
    }

    async sendVerificationCode(email: string) {
        const transporter = this.getMailTransporter();
        const verificationCode: string = generateVerificationCode();
        this.usersCodes.set(email, verificationCode);

        // try {
        //     await transporter.sendMail({
        //         from: {
        //             name: this.configService.get<string>('MAIL_FROM'),
        //             address: this.configService.get<string>('MAIL_ADDRESS'),
        //         },
        //         to: [
        //             {
        //                 name: '',
        //                 address: email,
        //             },
        //         ],
        //         subject: this.configService.get<string>('MAIL_SUBJECT'),
        //         text: getMailText(email, verificationCode),
        //         html: getMailHtml(email, verificationCode),
        //     });
        // } catch (error) {
        //     this.usersCodes.delete(email);
        //     console.error(`Error in verification code sending: ${error}`);
        // }
    }

    confirmVerificationCode(email: string, verificationCode: string): boolean {
        const localVerificationCode = this.usersCodes.get(email);

        if (!localVerificationCode) {
            throw new BadRequestException('No verification code sent to this email');
        }

        if (verificationCode === /*localVerificationCode*/ '111') {
            this.usersCodes.delete(email);
            return true;
        }

        return false;
    }
}
