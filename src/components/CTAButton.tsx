"use client"
import { motion } from 'framer-motion';
import AnimateVisible from './AnimateVisible';
const CTAButton = ({children}: {children: React.ReactNode}) => {
  return (
    <AnimateVisible>
      <div className="flex mt-5 w-full items-center justify-center">
        <motion.button className="bg-accent py-2 rounded-xl w-full px-7" whileTap={{scale: 0.9}} whileHover={{scale: 1.1}}>{children}</motion.button>
      </div>
    </AnimateVisible>
  )
}

export default CTAButton