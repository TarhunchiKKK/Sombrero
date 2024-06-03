import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();

        try {
            const authHeader = request.headers.authorization;
            const [bearer, token, _] = authHeader.split(' ');

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException('No authorization token or not bearer');
            }

            const user = this.jwtService.verify(token);
            request.user = user;
            return true;
        } catch (e) {
            throw new UnauthorizedException('You are unauthorized');
        }
    }
}
