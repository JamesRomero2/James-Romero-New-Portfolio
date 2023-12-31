"use client"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const CircleImage = dynamic(() => import('@/components/CircleImage'))

const FloatingImages = () => {
  return (
    <motion.div className="hidden md:block" initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.4 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}>
    
        <motion.div className="absolute top-20 right-7" initial={{scale: 1}} animate={{scale: 1.2}} transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "backInOut",
          delay: 1
        }}>
          <CircleImage ImageSource="/react.webp" ImageSize={6}/>
        </motion.div>
        <motion.div className="absolute bottom-24 right-3" initial={{scale: 1}} animate={{scale: 1.2}} transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "backInOut",
          delay: 1
        }}>
          <CircleImage ImageSource="/android.webp" ImageSize={3}/>
        </motion.div>
        <motion.div className="absolute bottom-7 left-4" initial={{scale: 1}} animate={{scale: 1.2}} transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "backInOut",
          delay: 2,
        }}>
          <CircleImage ImageSource="/vscode.webp" ImageSize={4}/>
        </motion.div>
        <motion.div className="absolute top-3 left-16" initial={{scale: 1}} animate={{scale: 1.2}} transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "backInOut",
          delay: 3
        }}>
          <CircleImage ImageSource="/git.webp" ImageSize={4}/>
        </motion.div>
        <div className="hidden lg:block">
          <motion.div className="absolute bottom-56 right-28" initial={{scale: 1}} animate={{scale: 1.2}} transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "backInOut",
            delay: 2
          }}>
            <CircleImage ImageSource="/godot.webp" ImageSize={2}/>
          </motion.div>
          <motion.div className="absolute top-56 left-32" initial={{scale: 1}} animate={{scale: 1.2}} transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "backInOut",
            delay: 1
          }}>
            <CircleImage ImageSource="/figma.webp" ImageSize={3}/>
          </motion.div>
        </div>
      
    </motion.div>
  )
}

export default FloatingImages