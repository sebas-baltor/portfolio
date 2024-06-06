import nodemailer, { TransportOptions } from "nodemailer";


export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER_AUTH,
    pass: process.env.EMAIL_PASSWORD_AUTH,
  },
  tls: {
    rejectUnauthorized: false,
  },
  greetingTimeout: 10000,
  connectionTimeout: 10000
} as TransportOptions);

export function workEmail(name:string):string{
  return (
    `
      <!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    
  </head>
  <body class="p-top">
  <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --primary: #09122f;
    --primary-contrast: #4b5c92;
    --text-dark: #868da4;
    --text-light: #c1c6d6;

    /* title-text-dark:#454853,
  title-text-light:#C1C6D6,
  light:#F5F8FF, */

    --gradient-top: #0c1431;
    --gradient-bot: #1c233c27;

    --secondary: #c5ff1e;
    --secondary-contrast: #587111;

    --outside-padding: 3rem;
    --inside-padding: 1.5rem 2.5rem;
  }
  body {
    /* background-color: #09122F; */
    background-color: var(--primary);
    opacity: 1;
    background-image: linear-gradient(#0b1535 2px, transparent 2px),
      linear-gradient(90deg, #0a1433 2px, transparent 2px),
      linear-gradient(#0a1433 1px, transparent 1px),
      linear-gradient(90deg, #0a1435 1px, #09122f 1px);
    background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    font-family: "Montserrat", sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
  a {
    text-decoration: none;
    outline: none;
  }

  .email-signature {
    width: 100%;
    padding: 1px;
    position: relative;
    background-color: var(--gradient-top);
    border-radius: 30px;
    overflow: hidden;
  }

  .email-signature::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: radial-gradient(
      circle,
      var(--secondary) 30%,
      transparent 100%
    );
    filter: blur(40px);
    z-index: 1;
    /* mix-blend-mode: screen; */
    transform: translate(40%, -50%);
  }
  .email-signature::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background: radial-gradient(
      circle,
      var(--secondary) 10%,
      transparent 100%
    );
    filter: blur(40px);
    z-index: 3;
    transform: translate(50%, -50%);
  }
  .email-signature-cont {
    background: linear-gradient(
      -45deg,
      var(--gradient-top),
      var(--gradient-bot)
    );
    padding: var(--inside-padding);
    border-radius: 30px;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;
    position: relative;
    backdrop-filter: blur(70px);
    z-index: 4;
  }

  .header {
    width: 100%;
    padding: 2px;
    position: relative;
    overflow: hidden;
    height: 17rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background: radial-gradient(
      circle,
      var(--secondary) 30%,
      transparent 100%
    );
    filter: blur(40px);
    z-index: 1;
    transform: translate(-50%, -80%);
  }
  .header::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background: radial-gradient(
      circle,
      var(--secondary) 10%,
      transparent 100%
    );
    filter: blur(40px);
    z-index: 3;
    transform: translate(-50%, -50%);
  }
  .header-cont {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;
    position: relative;
    backdrop-filter: blur(70px);
    z-index: 4;
  }
  .header-cont h1 {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-inline: auto;
  }

  .profile-image {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
  .gradient-text {
    display: inline-block; /* inline-block */
    font-size: 1.125rem; /* text-lg */
    font-weight: 600; /* font-semibold */
    background-image: linear-gradient(
      to right,
      var(--text-dark),
      var(--text-light)
    ); /* bg-gradient-to-r from-title-text-light to-title-text-dark */
    color: transparent; /* text-transparent */
    background-clip: text; /* bg-clip-text */
    -webkit-background-clip: text; /* bg-clip-text for Safari */
    line-height: 1.5rem; /* leading-normal */
    font-weight: bold;
    font-size: 3rem;
  }

  .contact-info {
    padding-left: 2rem;
    border-left: 4px solid var(--secondary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
  }

  .text-color {
    color: var(--text-light);
  }
  .text-color-hightlight {
    color: var(--secondary);
  }
  .mb {
    margin-bottom: 1rem;
  }
  .social-icons {
    margin-top: 10px;
  }
  .social-icons img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .paragraph {
    width: 100%;
    max-width: 50%;
    margin-inline: auto;
    text-align: center;
    font-size: large;
  }
  .container {
    padding: var(--outside-padding);
    width: 100%;
  }
  .p-top {
    padding-top: var(--outside-padding);
  }
</style>

    <div class="header">
      <div class="header-cont">
        <h1 class="text-color">
          THANKS FOR THE <br />
          <span class="text-color-hightlight">INTEREST</span>
        </h1>
      </div>
    </div>
    <p class="text-color paragraph">
      We’re in touch now, <span class="text-color-hightlight">${name}</span>, and your project seems amazing. I’ll reply to
      your email as soon as possible, but don’t worry, if I take too long, don’t
      hesitate to contact me.
    </p>
    <div class="container">
      <div class="email-signature">
        <div class="email-signature-cont">
          <img src="cid:logo" alt="Profile Picture" class="profile-image" />
          <div class="contact-info">
            <div>
              <h2 class="text-color">Sebastián Baltazar</h2>
              <small class="text-color">.NET & Node developer</small>
            </div>
            <p class="mb">
              <a
                class="text-color-hightlight"
                href="mailto:sebastianbaltazar@dapec.net"
                >sebastianbaltazar@dapec.net</a
              >
            </p>
            <div class="social-icons">
              <a
                href="https://www.linkedin.com/in/sebastian-baltazar-b76232209"
                target="_blank"
              >
                <img src="cid:linkedin" alt="linkedin" />
              </a>
              <a
                href="https://x.com/SebastinBalta11?t=EOMp9AFP1aPypXEkLV9NcQ&s=09"
                target="_blank"
              >
                <img src="cid:ex" alt="X" />
              </a>
              <a
                href="https://github.com/sebas-baltor"
                target="_blank"
              >
                <img src="cid:github" alt="github" />
              </a>
              <a
                href="https://sebastian-baltazar.vercel.app/blog"
                target="_blank"
              >
                <img src="cid:blog" alt="blog personal" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>`
    )
}