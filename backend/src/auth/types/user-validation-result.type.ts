import { User } from 'src/users/entities/user.entity';
import { UserValidationStatus } from './user-validation-status.enum';

export type UserValidationResult = {
    status: UserValidationStatus;
    user: Omit<User, 'password'> | null;
};
