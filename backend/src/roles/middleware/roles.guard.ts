import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../enums/roles.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly jwtService: JwtService,
    ) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles: Roles[] = this.reflector.getAllAndOverride(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredRoles) {
            return true;
        }

        try {
            const request = context.switchToHttp().getRequest();
            const [bearer, token, _] = request.headers.authorization.split(' ');

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException('No authorization token or not bearer');
            }

            const user: User = this.jwtService.verify(token);
            request.user = user;
            return user.roles.some((role) => requiredRoles.includes(role.value));
        } catch (e) {
            throw new UnauthorizedException('You have not required roles');
        }
    }
}
