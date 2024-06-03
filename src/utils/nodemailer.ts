import nodemailer, { TransportOptions } from "nodemailer";

// export const transporter = nodemailer.createTransport({
//     host: process.env.MAIL_HOST,
//     port: process.env.MAIL_PORT,
//     secure:true,
//     auth: {
//       user: process.env.MAIL_USER_AUTH,
//       pass: process.env.MAIL_PASSWORD_AUTH,
//     },
//     tls: {
//     rejectUnauthorized: false,
//   },
//   greetingTimeout: 10000,
//   connectionTimeout: 10000

//   } as TransportOptions);

export const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "sebastianbaltazar@dapec.net",
    pass: "ilovebasquet18NBA_dapec",
  },
  tls: {
    rejectUnauthorized: false,
  },
  greetingTimeout: 10000,
  connectionTimeout: 10000
} as TransportOptions);
