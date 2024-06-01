export function getMailHtml(email: string, verificationCode: string) {
    return `
        <p>Hello, ${email}!</p>
        <p>We've received a request to send you a verification code for your account.</p>
        <p>Your verification code:  ${verificationCode}</p>
        <p>If you did not request this code, feel free to ignore this email. Someone may have entered your email address by mistake.</p>
        <p>Sincerely, Sombrero trading platform support service</p>
    `;
}
