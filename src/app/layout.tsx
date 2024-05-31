import '../style/globals.css'
import "../style/prism-lucario.css"

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: 'Sebastián Baltazar',
  description: 'Freelancer, Web development, disarrollo de paginas web, amazing web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
