import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdvertisementsService } from '../advertisements.service';
import { Roles } from 'src/roles/enums/roles.enum';
import { User } from 'src/users/entities/user.entity';
import { Advertisement } from '../entities/advertisement.entity';

@Injectable()
export class AdvertisementOwnerGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private advertisementsService: AdvertisementsService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const request = context.switchToHttp().getRequest();

            const authHeader = request.headers.authorization;
            const [bearer, token, _] = authHeader.split(' ');

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException('No authorization token or not bearer');
            }

            const user: Pick<User, 'id' | 'roles'> = this.jwtService.verify(token);

            // проверка на админа
            if (user.roles.find((role) => role.value === Roles.Admin)) {
                return true;
            }

            // проверка на владельца предложения
            const advertisementId = request.params.id || request.body.advertisement.id;
            const advertisement: Advertisement = await this.advertisementsService.findOne(advertisementId);
            if (advertisement) {
                if (advertisement.vendor.id === user.id || advertisement.buyer.id === user.id) {
                    request.user = user;
                    return true;
                }
                throw new UnauthorizedException('You are not the author of this advertisement');
            }
            throw new BadRequestException('Advertisement not found');
        } catch (exception) {
            throw new UnauthorizedException(
                'You are not an owner of this advertisements and have not administrator role',
            );
        }
    }
}
