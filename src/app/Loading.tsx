"use client"
import { motion } from 'framer-motion';
import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen bg-accent flex items-center justify-center">
      <motion.div className="relative w-60 h-60 border-2 rounded-full bg-lightMdBG splashImage" animate={{
        rotate: -360
      }} transition={{repeat: Infinity, duration: 1, ease: 'linear'}}>
        <Image alt="Logo" src={'/splashlogo.webp'} width={240} height={240} className="p-3" priority/>
      </motion.div>
    </div>
  )
}

export default LoadingPage