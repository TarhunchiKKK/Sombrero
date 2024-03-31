import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { User } from 'src/users/entities/user.entity';
import { UserValidationResult } from '../types/user-validation-result.type';
import { UserValidationStatus } from '../types/user-validation-status.enum';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'email',
        });
    }

    public async validate(email: string, password: string): Promise<Omit<User, 'password'>> {
        const result: UserValidationResult = await this.authService.validateUser(email, password);
        switch (result.status) {
            case UserValidationStatus.NO_SUCH_USER:
                throw new UnauthorizedException('No such user');
            case UserValidationStatus.INCORRECT_PASSWORD:
                throw new UnauthorizedException('Invalid password');
            default:
                const user = result.user;
                return user;
        }
    }
}
