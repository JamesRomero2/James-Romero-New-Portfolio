"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const SocialMediaButtons = () => {
  return (
    <div className="w-full my-4 flex items-center justify-evenly mt-10">
      <motion.a href='https://github.com/JamesRomero2' target='_blank' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
        <Image alt="github" width="48" height="48" src={"/github.svg"} className="brightness-0 dark:brightness-100"/>
      </motion.a>
      <motion.a href='https://www.linkedin.com/in/jameslabradorromero/' target='_blank' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
        <Image alt="linkedin" width="48" height="48" src={"/linkedin.svg"} className="brightness-0 dark:brightness-100"/>
      </motion.a>
      <motion.a href='https://www.instagram.com/dyamesromero/' target='_blank' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
        <Image alt="instagram" width="48" height="48" src={"/instagram.svg"} className="brightness-0 dark:brightness-100"/>
      </motion.a>
      <motion.a href='https://www.youtube.com/channel/UCh0ur_US53T69ajW9K2aYjA' target='_blank' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
        <Image alt="youtube" width="48" height="48" src={"/youtube.svg"} className="brightness-0 dark:brightness-100"/>
      </motion.a>
    </div>
  )
}

export default SocialMediaButtons