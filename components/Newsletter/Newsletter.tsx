import Image from 'next/image'
import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-gradient-to-r from-slate-300 to-slate-100 py-12 md:py-0 md:h-80 md:mt-9 flex flex-col md:flex-row items-center justify-center'>
        <div className='text-center md:text-left md:w-1/3 md:ml-48'>
            <p className='text-blue-600 '>NEWSLETTER</p>
            <p className='text-2xl mt-16'>Security First Newsletter by QuillAudits</p>
            <p className='mt-4'>Subscribe for the most Exclusive Weekly security-based newsletter and covering all the recent hacks up to date.</p>
        </div>
        <div className='md:ml-20 mt-8 md:mt-0'>
            <Image src='/grp.png'
                   alt='logo'
                   width={290}
                   height={70}
            />
        </div>
    </div>
  )
}

export default Newsletter
