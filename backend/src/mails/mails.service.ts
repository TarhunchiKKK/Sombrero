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
            service: this.configService.get<string>('MAIL_SERVICE'),
            auth: {
                user: this.configService.get<string>('MAIL_USER'),
                pass: this.configService.get<string>('MAIL_PASSWORD'),
            },
        });
        return transport;
    }

    async sendMail(dto: SendMailDto) {
        const { recipients, subject, html } = dto;

        const transport = this.mailTransport();

        const options: Mail.Options = {
            from: {
                name: this.configService.get<string>('MAIL_FROM'),
                address: this.configService.get<string>('MAIL_ADDRESS'),
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
