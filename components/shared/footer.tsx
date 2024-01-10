import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, PlusCircledIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' container mx-auto my-16'>
        <div className=' flex flex-col items-center justify-center'>
            <div className='flex items-center gap-4 md:gap-6'>
                  <Link href={'https://www.linkedin.com/in/nurjon-erkinov-58a3b3262/'} >
                  <LinkedInLogoIcon className='w-8 h-8' />
                  </Link>
                  <Link href={'https://www.instagram.com/____n.7777/'}>
                  <InstagramLogoIcon className='w-8 h-8' />
                  
                  </Link>
                        <Link href={'https://github.com/erkinovnurjon'}>
                  <GitHubLogoIcon className='w-8 h-8' />

                  </Link>
                  <Link href={'https://t.me/erkinoff_n'}>
                  <PlusCircledIcon className='w-8 h-8' />

                  </Link>
            </div>
            <div className="text-center  font-['Heebo'] text-[#21243d] dark:text-slate-300 py-5">
                  Copyright ©2020 All rights reserved{" "}
            </div>

        </div>
    </div>
  )
}

export default Footer