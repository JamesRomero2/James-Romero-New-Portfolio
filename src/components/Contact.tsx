"use client"
import dynamic from 'next/dynamic'
import { useState } from 'react'

const CallToActionButton = dynamic(() => import('@/components/CTAButton'))

const Contact = () => {
  const [showDiv, setShowDiv] = useState(false)

  const showCopied = () => {
    setShowDiv(true);
    navigator.clipboard.writeText('business.jamesromero@gmail.com')

    setTimeout(() => {
      setShowDiv(false);
    }, 3000)
  }
  
  return (
    <>
      <h2 className="text-center font-barl font-bold text-6xl border-b-4 pb-3 mb-4">
        Let&apos;s Chat ! <span className="block sm:inline">📧 💬</span>
      </h2>
      <p className="font-mont text-center text-lg sm:text-2xl">Connect with me !<br/>We can work it out soon !</p>
      <p className="text-sm text-center font-mont">Click the email below to copy the email address.</p>
      <div className="flex justify-center items-center w-full flex-col relative">
        {
          showDiv && <div className="absolute bg-green px-5 py-2 rounded-full -bottom-6">
          <h4 className='text-darkMdBG font-mont font-bold text-xs'>Copied !</h4>
        </div>
        }
        <CallToActionButton>
          <button className="text-xl text-center font-barl cursor-pointer px-6 md:px-20 py-2 text-white" onClick={showCopied}>business.jamesromero@gmail.com</button>
        </CallToActionButton>
      </div>
    </>
  )
}

export default Contact