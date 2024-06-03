import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { MailsModule } from 'src/mails/mails.module';
import { JwtConfigOptions } from 'src/config';

@Module({
    imports: [UsersModule, MailsModule, JwtModule.register(JwtConfigOptions)],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
