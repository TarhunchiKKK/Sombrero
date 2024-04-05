import { Address } from 'nodemailer/lib/mailer';

export class SendMailDto {
    recipientEmail: string;
    // recipients: Address[];
    // text?: string;
    // placeholderReplacements?: Record<string, string>;
}
