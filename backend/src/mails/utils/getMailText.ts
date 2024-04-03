export function getMailText(email: string, verificationCode: string) {
    return `
        Hello, ${email}!
        We've received a request to send you a verification code for your account.
        Your verification code: ${verificationCode}
        If you did not request this code, feel free to ignore this email. Someone may have entered your email address by mistake.
        Sincerely, Sombrero trading platform support service
    `;
}
