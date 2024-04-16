import { CreateUserDto } from 'src/users/dto/create-user.dto';

export interface ConfirmVerificationData {
    createUserDto: CreateUserDto;
    verificationCode: string;
}
