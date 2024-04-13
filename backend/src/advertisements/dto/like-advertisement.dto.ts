import { User } from 'src/users/entities/user.entity';
import { Advertisement } from '../entities/advertisement.entity';

export class LikeAdvertisementDto {
    advertisement: Advertisement;
    user: User;
}
