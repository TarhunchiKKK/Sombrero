import { User } from 'src/users/entities/user.entity';
import { Advertisement } from '../entities/advertisement.entity';
import { ApiProperty } from '@nestjs/swagger';

export class LikeAdvertisementDto {
    @ApiProperty({ description: 'Liked advertisement (need to extract advertisement id)' })
    advertisement: Advertisement;

    @ApiProperty({ description: 'User who like advertisement (need to extract user id)' })
    user: User;
}
