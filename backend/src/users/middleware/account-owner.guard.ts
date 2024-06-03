import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users.service';
import { User } from '../entities/user.entity';
import { Roles } from 'src/roles/enums/roles.enum';

@Injectable()
export class AccountOwnerGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const request = context.switchToHttp().getRequest();

            const authHeader = request.headers.authorization;
            const [bearer, token, _] = authHeader.split(' ');

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException('No authorization token or not bearer');
            }

            const user: Pick<User, 'id' | 'email' | 'roles'> = this.jwtService.verify(token);

            // проверка на админа
            if (user.roles.find((role) => role.value === Roles.Admin)) {
                return true;
            }

            // проверка на владельца аккаунта
            const accountOwner: User = await this.usersService.findOneByEmail(user.email);
            if (accountOwner) {
                if (accountOwner.id === user.id) {
                    request.user = user;
                    return true;
                }
                throw new UnauthorizedException('You are not the author of this account');
            }
            throw new BadRequestException('Account not found');
        } catch (exception) {
            throw new UnauthorizedException('You are not an owner of this account and have not administrator role');
        }
    }
}
