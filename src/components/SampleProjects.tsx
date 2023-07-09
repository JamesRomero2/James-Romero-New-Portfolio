"use client"
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import projects from "../data/data.json";

const CallToActionButton = dynamic(() => import('@/components/CTAButton'))

const SampleProjects = () => {
  const [proj, setProj] = useState<Project[]>([])
  const [viewAll, setViewAll] = useState(false)
  let projectNum = 4

  useEffect(() => {
    setProj(projects)
  }, [])

  if (viewAll) {
    projectNum = proj.length;
  } else {
    projectNum = 4;
  }
  
  return (
    <>
      <ul className='flex flex-col gap-y-3 my-5 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4'>
        {
          proj.sort(() => 0.5 - Math.random()).slice(0, projectNum).map((project) => {
            return(
              <motion.li className="border-b py-3 cursor-pointer md:relative" key={project.ProjectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 }
                }}
                whileTap={{scale: 0.95}} whileHover={{scale: 1.03}}
              >
                <Link href={project.Link} target='_blank' className='flex flex-row justify-between items-center md:items-start'>
                  <div>
                    <h3 className='font-barl tracking-widest text-lg mb-1 font-medium md:text-2xl'>
                      {project.ProjectName}
                    </h3>
                    <p className='hidden md:block mt-2 font-mont text-sm pr-5 mb-10'>
                      {project.ProjectDesc}
                    </p>
                    <div className="flex flex-row flex-wrap gap-2 pr-5 md:absolute md:bottom-2">
                      {
                        project.Tags.sort(() => 0.5 - Math.random()).slice(0, 3).map(tag => <h4 className="text-xs font-mont md:bg-accent md:text-white md:px-2 md:py-1 md:rounded-full" key={tag}>{tag}</h4>)
                      }
                    </div>
                  </div>
                  <div className='min-w-[24px] min-h-[24px]'>
                    <Image alt='Link Icon' width="24" height="24" src={'/external_link.svg'} className={'dark:brightness-100 brightness-0'}/>
                  </div>
                </Link>
              </motion.li>
            )
          })
        }
      </ul>
      <div className="flex justify-center items-center w-full">
        <CallToActionButton>
          <button className='font-barl font-bold text-2xl tracking-wide text-white px-12 md:px-40 py-2 block' onClick={() => setViewAll(!viewAll)}>
            {
              viewAll ? 
              "Summarized Projects"
              :
              "View All Projects"
            }
          </button>
        </CallToActionButton>
      </div>
    </>
  )
}

export default SampleProjects