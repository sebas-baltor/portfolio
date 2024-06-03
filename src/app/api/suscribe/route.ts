import { NextResponse, NextRequest } from "next/server";
import { transporter } from "@/utils/nodemailer";
import { IsimpleRes } from "@/utils/interfaces";

export async function POST(request: NextRequest) {
  const html = `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <style>
          .email-signature {
              font-family: Arial, sans-serif;
              font-size: 14px;
              line-height: 1.6;
              color: #333;
          }
          .signature-container {
              display: flex;
              align-items: center;
          }
          .profile-image {
              border-radius: 50%;
              width: 80px;
              height: 80px;
              margin-right: 15px;
          }
          .contact-info {
              margin-left: 10px;
          }
          .contact-info h2 {
              margin: 0;
              font-size: 18px;
              color: #0073aa;
          }
          .contact-info p {
              margin: 5px 0;
          }
          .contact-info a {
              color: #0073aa;
              text-decoration: none;
          }
          .contact-info a:hover {
              text-decoration: underline;
          }
          .social-icons {
              margin-top: 10px;
          }
          .social-icons img {
              width: 20px;
              height: 20px;
              margin-right: 10px;
          }
      </style>
  </head>
  <body>
      <div class="email-signature">
          <div class="signature-container">
              <img src="https://via.placeholder.com/80" alt="Profile Picture" class="profile-image">
              <div class="contact-info">
                <h2>Sebastián Baltazar</h2>
                <p>.NET & Node developer</p>
                <p>Blog Personal</p>
                <p><a href="mailto:sebastianbaltazar@dapec.net">sebastianbaltazar@dapec.net</a></p>
                <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
                <div class="social-icons">
                    <a href="https://www.linkedin.com/in/sebastian-baltazar-b76232209" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn">
                    </a>
                    <a href="https://www.linkedin.com/in/sebastian-baltazar-b76232209" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="X">
                    </a>
                </div>
              </div>
          </div>
      </div>
  </body>
  </html>
  `
    // the request.body()
  const { name, email, budget, message } = await request.json();
  const mailOptions = {
    from: "Sebastian Baltazar <sebastianbaltazar@dapec.net>",
    to: email,
    subject: "Gracias por tu interes en mi trabajo pronto me pondre en contacto contigo",
    
    html: html,
    // subject: name,
    // text: message,
    // html: `<div>
    //         <div><strong>Nombre: </strong> ${name}</div>
    //         <div><strong>Message: </strong> ${message}</div>
    //         <div><strong>Budget: </strong> ${budget}</div>
    //         <div><strong>From: </strong> ${email}</div>
    //     </div>`,
  };
  // interface to return a simple response
  let infoRes = {
    message: "algo salio mal al enviar el correo, intenta de nuevo mas tarde",
    status: 500,
  } satisfies IsimpleRes;
  // sending email and handle error
  await transporter
    .sendMail(mailOptions)
    .then((info) => {
      infoRes.message = "success send email";
      infoRes.status = 200;
    })
    .catch((err) => {
      console.log(err);
    });
    // send the response
  return NextResponse.json(infoRes);
}
