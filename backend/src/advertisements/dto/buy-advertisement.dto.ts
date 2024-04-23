import { User } from 'src/users/entities/user.entity';
import { Advertisement } from '../entities/advertisement.entity';

export class BuyAdvertisementDto {
    advertisement: Advertisement;
    user: User;
}
