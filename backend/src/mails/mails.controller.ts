import { Body, Controller, Post } from '@nestjs/common';
import { MailsService } from './mails.service';
import { SendMailDto } from './dto/send-mail.dto';

@Controller('mails')
export class MailsController {
    constructor(private readonly mailsService: MailsService) {}

    @Post()
    public async send(@Body() sendmailDto: SendMailDto) {
        await this.mailsService.send(sendmailDto.email, sendmailDto.message);
    }
}
