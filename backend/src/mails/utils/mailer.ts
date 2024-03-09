const nodemailer = require('nodemailer')
const sombreroEmail = 'kostabarilo12@gmail.com'

const transporter = nodemailer.createTransport({
    host: 'gsmtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: sombreroEmail,
        pass: 'Tarhunaye228'
    },
})

export const sendEmail = async (to, subject, text) => {
    await transporter.sendMail({
        from: sombreroEmail,
        to,
        subject,
        text
    })
}

// module.exports = {
//     sendemail,
// }