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
            host: this.configService.get<string>('MAIL_HOST'),
            port: this.configService.get<number>('MAIL_PORT'),
            secure: false,
            auth: {
                user: this.configService.get<string>('MAIL_USER'),
                pass: this.configService.get<string>('MAIL_PASSWORD'),
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
