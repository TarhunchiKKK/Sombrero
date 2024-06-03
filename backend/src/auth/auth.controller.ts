import { Controller, Request, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './middleware/jwt-auth.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ConfirmVerificationDto } from './dto/confirm-verification.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({ summary: 'Login' })
    @Post('login')
    // @UseGuards(JwtAuthGuard)
    public async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    getProfile(@Request() req) {
        return req.user;
    }

    @ApiOperation({ summary: "Start user's registration (sending verification code on email)" })
    @ApiBody({ type: CreateUserDto })
    @Post('registration')
    async registration(@Body() createUserDto: CreateUserDto) {
        await this.authService.startRegistration(createUserDto);
    }

    @ApiOperation({ summary: "End user's registration (email code verification)" })
    @ApiBody({ type: ConfirmVerificationDto })
    @Post('confirm')
    async confirmVerificationCode(@Body() confirmVerificationDto: ConfirmVerificationDto) {
        return await this.authService.endRegistration(confirmVerificationDto);
    }
}
