import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { UserValidationResult } from './types/user-validation-result.type';
import { UserValidationStatus } from './types/user-validation-status.enum';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    public async validateUser(email: string, password: string): Promise<UserValidationResult> {
        const user: User = await this.usersService.findOneByEmail(email);
        if (user && user.password === password) {
            const passwordsMatch: boolean = await argon2.verify(user.password, password);
            if (passwordsMatch) {
                const { password: pass, ...result } = user;
                return {
                    status: UserValidationStatus.OK,
                    user: result,
                };
            }
            return {
                status: UserValidationStatus.INCORRECT_PASSWORD,
                user: null,
            };
        }
        return {
            status: UserValidationStatus.NO_SUCH_USER,
            user: null,
        };
    }

    public async login(user: User) {
        const { id, email } = user;
        return {
            id,
            email,
            token: this.jwtService.sign({ id: user.id, email: user.email }),
        };
    }
}
