import { Controller, Request, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { SendMailDto } from './dto/send-mail.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ConfirmVerificationDto } from './dto/confirm-verification.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    @UseGuards(LocalAuthGuard)
    public async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    getProfile(@Request() req) {
        return req.user;
    }

    // @Post('verification')
    // async sendMail(@Body() sendMailDto: SendMailDto) {
    //     return await this.authService.sendVerificationCode(sendMailDto);
    // }

    @Post('regisration')
    async registration(@Body() createUserDto: CreateUserDto) {
        await this.authService.registration(createUserDto);
    }

    @Post('confirm')
    async confirmVerificationCode(@Body() confirmVerificationDto: ConfirmVerificationDto) {
        return await this.authService.confirmVerificetionCode(confirmVerificationDto);
    }
}
