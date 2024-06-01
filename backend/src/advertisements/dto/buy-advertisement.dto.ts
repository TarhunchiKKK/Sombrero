import { User } from 'src/users/entities/user.entity';
import { Advertisement } from '../entities/advertisement.entity';
import { ApiProperty } from '@nestjs/swagger';

export class BuyAdvertisementDto {
    @ApiProperty({ description: 'Purchased product (need to extract advertisement id)' })
    advertisement: Advertisement;

    @ApiProperty({ description: 'Buyer (need to extract user id)' })
    user: User;
}
