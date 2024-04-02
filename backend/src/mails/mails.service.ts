import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendMailDto } from './dto/send-mail.dto';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class MailsService {
    constructor(private configService: ConfigService) {}

    mailTransport() {
        const transport = nodemailer.createTransport({
            host: 'sandbox.smtp.mailtrap.io', // this.configService.get<string>('MAIL_HOST'),
            port: 465, // +this.configService.get<number>('MAIL_PORT'),
            secure: false,
            auth: {
                user: '5201168406c57d', //this.configService.get<string>('MAIL_USER'),
                pass: 'b17700abc344ef', //this.configService.get<string>('MAIL_PASSWORD'),
            },
        });
        console.log(transport);
        return transport;
    }

    async sendMail(dto: SendMailDto) {
        const { from, recipients, subject, html, placeholderReplacements } =
            dto;

        const transport = this.mailTransport();

        const options: Mail.Options = {
            from: from ?? {
                name: this.configService.get<string>('APP_NAME'),
                address: this.configService.get<string>('DEFAULT_MAIL_FROM'),
            },
            to: recipients,
            subject: subject,
            html: html,
        };

        try {
            const result = await transport.sendMail(options);
            return result;
        } catch (error) {
            console.log('Error: ', error);
        }
    }
}
