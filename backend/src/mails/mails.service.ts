import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import {sendEmail} from './utils/mailer'

const nodemailer = require("nodemailer");
var generator = require('generate-password');


@Injectable()
export class MailsService {
  async sendMail() {
    let message = {
      to: 'TarhunchicKKK@yandex.ru',
      subject: "Authorization",
      text: "Plaintext version of the message",
    };
    await sendEmail(message.to, message.subject, message.text)
  }

  // private passwordGeneratorOptions = {
  //   length: 10,
  //   numbers: true
  // }
}
