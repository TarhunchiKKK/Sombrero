import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport } from 'nodemailer';

import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailsService {
    private readonly transporter;

    constructor(private readonly configService: ConfigService) {
        const host: string = 'smtp.gmail';
        const port: number = 587;
        const user: string = 'kostabarilo12@gmail.com';
        const password: string = 'Tarhunaye228';

        console.log(host, port, user, password);

        this.transporter = createTransport({
            host: host,
            port: port,
            secure: false,
            auth: {
                user: user,
                pass: password,
            },
        });
    }

    // public async send(receiver: string, message: string) {
    //     try {
    //         const info = await this.transporter.sendMail({
    //             from: this.configService.get('EMAIL_HOST_USER'),
    //             to: receiver,
    //             subject: 'Welcome to test site',
    //             text: message,
    //             html: `<b>${message}</b>`,
    //         });
    //         return info.messageId;
    //     } catch (e) {
    //         console.log(e);
    //         return e;
    //     }
    // }
}
