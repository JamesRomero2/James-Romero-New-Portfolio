'use client'
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';

const Header = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const { setTheme } = useTheme()
  const {resolvedTheme} = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    if(resolvedTheme == 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <>
      <header className='sticky top-0 z-50 backdrop-blur-md'>
        <motion.div className="p-4 flex flex-row justify-between items-center"
          style={{position: "sticky"}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { y: "0%" },
            hidden: { y: "-100%" }
          }}>
          <motion.p className="font-barl font-bold text-2xl cursor-pointer" whileTap={{scale: 0.9}} whileHover={{scale: 1.1}}>
            <LinkScroll to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setMenuOpen(false)}>
              James Romero
            </LinkScroll>
          </motion.p>
          <div className="flex flex-row items-center gap-3">
            <ul className='sm:flex flex-row gap-4 hidden font-medium font-mont'>
              <motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                <LinkScroll to="about" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer'>
                  About
                </LinkScroll>
              </motion.li>
              <motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                <LinkScroll to="projects" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer'>
                  Projects
                </LinkScroll>
              </motion.li>
              <motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                <Link href='https://github.com/JamesRomero2' target='_blank' className='cursor-pointer' rel="noreferrer">
                  Source Code
                </Link>
              </motion.li>
            </ul>
            <motion.div className="" whileTap={{scale: 0.8}}>
              <Image alt="Toggle Theme" src={resolvedTheme == 'light' ? '/moon.webp' : '/sun.webp'} width={40} height={40} onClick={e => toggleTheme()} className='cursor-pointer w-10 h-10'/>
            </motion.div>
            <motion.div className="sm:hidden" whileTap={{scale: 0.8}} onClick={e => setMenuOpen(!menuOpen)}>
              <Image alt="Menu" src={menuOpen ? '/close.webp' : '/menu.webp'} width={30} height={30} className="mx-1 grayscale saturate-0 contrast-[1000%] cursor-pointer brightness-0 dark:brightness-100"/>
            </motion.div>
          </div>
          {
            menuOpen && 
              <ul className="absolute w-60 h-fit top-20 z-10 inset-x-0 ml-auto mr-auto rounded-xl bg-darkMdBG dark:bg-lightMdBG text-lightMdBG dark:text-darkMdBG font-mont font-semibold text-center gap-4 flex flex-col py-5 sm:hidden">
                <motion.li whileTap={{scale: 0.9}}>
                  <LinkScroll to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setMenuOpen(false)} className='cursor-pointer'>
                    About Me
                  </LinkScroll>
                </motion.li>
                <motion.li whileTap={{scale: 0.9}}>
                  <LinkScroll to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setMenuOpen(false)} className='cursor-pointer'>
                    Projects
                  </LinkScroll>
                </motion.li>
                <motion.li whileTap={{scale: 0.9}}>
                  <LinkScroll to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={() => setMenuOpen(false)} className='cursor-pointer'>
                    Contact Me
                  </LinkScroll>
                </motion.li>
                <motion.li whileTap={{scale: 0.9}}>
                  <Link href="https://github.com/JamesRomero2" target='_blank' onClick={() => setMenuOpen(false)} className='cursor-pointer' rel="noreferrer">Source Code</Link>
                </motion.li>
              </ul>
          }
        </motion.div>
      </header>
    </>
  )
}

export default Header 