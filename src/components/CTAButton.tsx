"use client"
import { motion } from 'framer-motion';

const CTAButton = ({children}: {children: React.ReactNode}) => {
  return <motion.div className="bg-accent rounded-xl my-5" whileTap={{scale: 0.9}} whileHover={{scale: 1.1}}>{children}</motion.div>
  
}

export default CTAButton