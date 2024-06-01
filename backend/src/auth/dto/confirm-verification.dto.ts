import { ApiProperty } from '@nestjs/swagger';

export class ConfirmVerificationDto {
    @ApiProperty({ example: 'victorbarinov@gmail.com', description: 'User email address' })
    email: string;

    @ApiProperty({ example: 'fLm2TqZN', description: "This code was sended to user's email" })
    verificationCode: string;
}
