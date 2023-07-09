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
        url: "https://www.jamesromero.tech",
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
        {/* {
          loading ? 
          (
            // Splash Screen
            <div className="w-screen h-screen bg-accent flex items-center justify-center">
              <motion.div className="relative w-60 h-60 border-2 rounded-full bg-lightMdBG splashImage" ref={scope} initial={{opacity: 0}}>
                <Image alt="Logo" src={'/splashlogo.webp'} width={240} height={240} className="p-3" priority/>
              </motion.div>
            </div>
          )
          : */}
          <Providers>
            {children}
          </Providers>
        {/* } */}
      </body>
    </html>
  )
}
