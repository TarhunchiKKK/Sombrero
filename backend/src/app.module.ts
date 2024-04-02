import { Module } from '@nestjs/common';
import { MailsModule } from './mails/mails.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [MailsModule, ConfigModule.forRoot()],
})
export class AppModule {}
