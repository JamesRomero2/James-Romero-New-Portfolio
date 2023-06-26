'use client'
import { useTheme } from 'next-themes';
import Image from "next/image";
import { useEffect, useState } from 'react';

const Header = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()
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
      <header className="container my-4 flex flex-row justify-between items-center">
        <p className="font-barl font-bold text-2xl">James Romero</p>
        <div className="flex flex-row items-center gap-3">
          <div className="w-[30px] h-[30px] relative" onClick={e => setMenuOpen(!menuOpen)}>
            <Image alt="Menu" src={resolvedTheme == 'light' ? '/menu-dark.svg' : '/menu-light.svg'} fill style={{objectFit: 'contain'}} className="mx-1 grayscale saturate-0 brightness-[70%] contrast-[1000%]" sizes="40px"/>
          </div>
          <div className="w-[40px] h-[40px] relative">
            <Image alt="Toggle Theme" src={resolvedTheme == 'light' ? '/moon.png' : '/sun.png'} fill style={{objectFit: 'contain'}} sizes="40px" onClick={e => toggleTheme()}/>
          </div>
        </div>
      </header>
      {
        menuOpen && 
        <ul className="absolute w-60 h-fit z-10 inset-x-0 ml-auto mr-auto rounded-xl bg-darkMdBG dark:bg-lightMdBG text-lightMdBG dark:text-darkMdBG font-mont font-semibold text-center gap-4 flex flex-col py-5">
          <li>Projects</li>
          <li>Contact Me</li>
          <li>Source Code</li>
        </ul>
      }
    </>
  )
}

export default Header 