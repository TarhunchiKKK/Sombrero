import { Body, Controller, Get, Post } from '@nestjs/common';
import { MailsService } from './mails.service';
import { SendMailDto } from './dto/send-mail.dto';

@Controller('mails')
export class MailsController {
    constructor(private readonly mailsService: MailsService) {}

    @Post()
    async sendMail(@Body() sendMailDto: SendMailDto) {
        return await this.mailsService.sendVerificationCode(sendMailDto);
    }
}
