import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendMailDto } from './dto/send-mail.dto';
import Mail from 'nodemailer/lib/mailer';
import { getMailHtml } from './utils/getMailHtml';
import { getMailText } from './utils/getMailText';
import { generateVerificationCode } from './utils/generateVerificationCode';

@Injectable()
export class MailsService {
    constructor(private configService: ConfigService) {}

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
