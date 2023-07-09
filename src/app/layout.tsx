"use client"
import { motion, useAnimate } from 'framer-motion';
import { Metadata } from 'next';
import Image from "next/image";
import { useEffect, useState } from 'react';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "James Romero",
  description: "Web Portfolio for James Romero, made using Next.JS, Framer-Motion, MDX and TailwindCSS",
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
      url: "https://example.com",
      title: "James Romero | Aspiring Full Stack Web Developer",
      description: "Hello ! Come and Visit my Personal Web Portfolio",
      siteName: "James Romero's Portfolio",
      images: [{
        url: "https://example.com/og.png",
      }],
  },
  twitter: { 
    card: "summary_large_image", 
    site: "@site",
    title: "James Romero | Aspiring Full Stack Web Developer",
    description: "Hello ! Come and Visit my Personal Web Portfolio",
    creator: "@creator", 
    images: "https://example.com/og.png" 
  },
  robots: "index, follow"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateSplashScreen = async () => {
      await animate(scope.current, {opacity: 0},  {duration: 0.5, ease: 'easeIn'});
      await animate(scope.current, {opacity: 1},  {duration: 1});
      await animate(scope.current, {rotate: 45},  {duration: 0.5, ease: 'anticipate'});
      await animate(scope.current, {scaleY: 0, rotate: -360},  {duration: 0.3, ease: 'easeIn'});
      setLoading(false);
    }

    animateSplashScreen();
  }, [scope, animate])
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {
          loading ? 
          (
            // Splash Screen
            <div className="w-screen h-screen bg-accent flex items-center justify-center">
              <motion.div className="relative w-60 h-60 border-2 rounded-full bg-lightMdBG splashImage" ref={scope} initial={{opacity: 0}}>
                <Image alt="Logo" src={'/splashlogo.webp'} width={240} height={240} className="p-3" priority/>
              </motion.div>
            </div>
          )
          :
          <Providers>
            {children}
          </Providers>
        }
      </body>
    </html>
  )
}
