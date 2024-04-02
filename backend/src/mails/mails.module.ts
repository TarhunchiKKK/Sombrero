import { Module } from '@nestjs/common';
import { MailsService } from './mails.service';
import { MailsController } from './mails.controller';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
    imports: [ConfigModule],
    controllers: [MailsController],
    providers: [MailsService],
})
export class MailsModule {}
