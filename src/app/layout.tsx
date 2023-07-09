import { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "James Romero",
  description: "Web Portfolio for James Romero, made using Next.JS, Framer-Motion, and TailwindCSS",
  icons: {
    icon: "/logo_16.ico",
    apple: "/logo_16.ico",
  },
  authors: {
    name: "James Romero",
    url: "https://github.com/JamesRomero2"
  },
  keywords: "web-portfolio, james romero, nextjs, tailwind, nextjs portfolio, blue portfolio",
  openGraph: {
      type: "website",
      url: "https://www.jamesromero.tech/",
      title: "James Romero | Aspiring Full Stack Developer",
      description: "Heyyy 🤗 ! Come and Visit my new and latest Web Portfolio ! Also, Hire me as your Web Developer 🙏",
      siteName: "James Romero's Portfolio",
      images: [{
        url: "https://www.jamesromero.tech/twitterOG.png",
      }],
  },
  twitter: { 
    card: "summary_large_image", 
    site: "@Blue_semicolon",
    title: "James Romero | Aspiring Full Stack Web Developer",
    description: "Heyyy 🤗 ! Come and Visit my new and latest Web Portfolio ! Also, Hire me as your Web Developer 🙏",
    creator: "@Blue_semicolon", 
    images: "https://www.jamesromero.tech/twitterOG.png" 
  },
  robots: "index, follow"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
