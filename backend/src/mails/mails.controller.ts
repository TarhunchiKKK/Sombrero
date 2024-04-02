import { Body, Controller, Get, Post } from '@nestjs/common';
import { MailsService } from './mails.service';
import { SendMailDto } from './dto/send-mail.dto';

@Controller('mails')
export class MailsController {
    constructor(private readonly mailsService: MailsService) {}

    @Post()
    async sendMail() {
        const dto: SendMailDto = {
            from: {
                name: 'Lucie',
                address: 'lucie@example.com',
            },
            recipients: [
                {
                    name: 'John Doe',
                    address: 'john@example.com',
                },
            ],
            subject: 'Lucky Winner',
            html: '<p><strong>Hi John</strong>, your lucky number won 1 million</p><p>Cheers</p>',
        };
        return await this.mailsService.sendMail(dto);
    }
}
