import { NextResponse, NextRequest } from "next/server";
import { transporter } from "@/utils/nodemailer";
import { IsimpleRes } from "@/utils/interfaces";
import { workEmail } from "@/utils/nodemailer";

export async function POST(request: NextRequest) {
//   const html = `<!DOCTYPE html>
//   <html lang="es">
//   <head>
//       <meta charset="UTF-8">
//       <style>
//           .email-signature {
//               font-family: Arial, sans-serif;
//               font-size: 14px;
//               line-height: 1.6;
//               color: #333;
//           }
//           .signature-container {
//               display: flex;
//               align-items: center;
//           }
//           .profile-image {
//               border-radius: 50%;
//               width: 80px;
//               height: 80px;
//               margin-right: 15px;
//           }
//           .contact-info {
//               margin-left: 10px;
//           }
//           .contact-info h2 {
//               margin: 0;
//               font-size: 18px;
//               color: #0073aa;
//           }
//           .contact-info p {
//               margin: 5px 0;
//           }
//           .contact-info a {
//               color: #0073aa;
//               text-decoration: none;
//           }
//           .contact-info a:hover {
//               text-decoration: underline;
//           }
//           .social-icons {
//               margin-top: 10px;
//           }
//           .social-icons img {
//               width: 20px;
//               height: 20px;
//               margin-right: 10px;
//           }
//       </style>
//   </head>
//   <body>
//       <div class="email-signature">
//           <div class="signature-container">
//               <img src="https://via.placeholder.com/80" alt="Profile Picture" class="profile-image">
//               <div class="contact-info">
//                 <h2>Sebastián Baltazar</h2>
//                 <p>.NET & Node developer</p>
//                 <p>Blog Personal</p>
//                 <p><a href="mailto:sebastianbaltazar@dapec.net">sebastianbaltazar@dapec.net</a></p>
//                 <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
//                 <div class="social-icons">
//                     <a href="https://www.linkedin.com/in/sebastian-baltazar-b76232209" target="_blank">
//                         <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn">
//                     </a>
//                     <a href="https://www.linkedin.com/in/sebastian-baltazar-b76232209" target="_blank">
//                         <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="X">
//                     </a>
//                 </div>
//               </div>
//           </div>
//       </div>
//   </body>
//   </html>
//   `
    // the request.body()
    const { name, email, budget, message } = await request.json();
    let html = workEmail(name);
    // let html = `
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //   <meta charset="UTF-8">
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //   <style>
    //     body {
    //       font-family: Arial, sans-serif;
    //       background-color: #f4f4f4;
    //       margin: 0;
    //       padding: 0;
    //     }
    //     .container {
    //       width: 100%;
    //       max-width: 600px;
    //       margin: 0 auto;
    //       background-color: #ffffff;
    //       padding: 20px;
    //       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    //     }
    //     h1 {
    //       color: #333333;
    //     }
    //     p {
    //       color: #666666;
    //     }
    //     .button {
    //       display: inline-block;
    //       padding: 10px 20px;
    //       margin-top: 20px;
    //       color: #ffffff;
    //       background-color: #007bff;
    //       text-decoration: none;
    //       border-radius: 5px;
    //     }
    //     .button:hover {
    //       background-color: #0056b3;
    //     }
    //   </style>
    // </head>
    // <body>
    //   <div class="container">
    //     <h1>Hello, World!</h1>
    //     <p>This is a sample email sent with <strong>Nodemailer</strong>.</p>
    //     <a href="#" class="button">Click Me</a>
    //   </div>
    // </body>
    // </html>
    // `;
  const mailOptions = {
    from: "Sebastian Baltazar <sebastianbaltazar@dapec.net>",
    to: email,
    subject: "Thanks for the interest in my work!",
    html: html,
    attachments: [
      {
        filename: "logo.png",
        path: "./logo.png",
        cid: "logo",
      },
      {
        filename: "linkedin.png",
        path: "./email/linkedin.png",
        cid: "linkedin",
      },
      {
        filename: "github.png",
        path: "./email/github.png",
        cid: "github",
      },
      {
        filename: "ex.png",
        path: "./email/ex.png",
        cid: "ex",
      },
      {
        filename: "sheet.png",
        path: "./public/email/sheet.png",
        cid: "blog",
      }
      
    ]
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
