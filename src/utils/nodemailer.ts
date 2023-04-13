import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'baltazarosebas@gmail.com',
      pass: 'swflmyalwebujeis'
    }
  });

