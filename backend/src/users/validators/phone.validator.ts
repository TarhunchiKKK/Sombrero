import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint()
export class PhoneValidator implements ValidatorConstraintInterface {
    validate(phone: string): boolean {
        if (phone[0] !== '+') {
            return false;
        }

        for (let i = 1; i < phone.length; i++) {
            if (!('0' <= phone[i] && phone[i] <= '9')) {
                return false;
            }
        }

        return true;
    }
}
