import { NextResponse, NextRequest } from "next/server";
import { transporter } from "@/utils/nodemailer";
import { IsimpleRes } from "@/utils/interfaces";
export async function POST(request: NextRequest) {
    // the request.body()
  const { name, email, budget, message } = await request.json();
  const mailOptions = {
    from: "sebastian-baltazar.vercel.app",
    to: "baltazarosebas@gmail.com",
    subject: name,
    text: message,
    html: `<div>
            <div><strong>Nombre: </strong> ${name}</div>
            <div><strong>Message: </strong> ${message}</div>
            <div><strong>Budget: </strong> ${budget}</div>
            <div><strong>From: </strong> ${email}</div>
        </div>`,
  };
  // interface to return a simple response
  let infoRes = {
    message: "something went wrong",
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
