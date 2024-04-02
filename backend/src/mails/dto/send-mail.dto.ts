import { Address } from 'nodemailer/lib/mailer';

export class SendMailDto {
    from?: Address;
    recipients: Address[];
    subject: string;
    html: string;
    text?: string;
    placeholderReplacements?: Record<string, string>;
}
