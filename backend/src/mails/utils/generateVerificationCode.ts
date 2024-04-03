const generatePassword = require('password-generator');

export function generateVerificationCode(): string {
    return generatePassword(process.env.VERIFICATION_CODE_LENGTH, false);
}
