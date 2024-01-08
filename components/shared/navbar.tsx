import Image from 'next/image'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=' w-full h-[10vh] bg-[#EDEDED] dark:bg-gray-900 flex items-center'>

    <div className='container mx-auto flex items-center justify-between '>
      <Link href={'/'}>
          <Image src={'/logoo.jpg'} alt='logo' width={162} height={162} className=' rounded' />
      </Link>
      
      <ul className='flex items-center text-xl font-[Heebo] gap-5 font-medium w-min'>
      <Link href={'/works'} className=' hover:underline transition' >
        works
      </Link>
      <Link href={'/blog'} className=' hover:underline transition' >
        blog
      </Link>
      <Link href={'/contact'} className=' hover:underline transition' >
        contact
      </Link>
       <ModeToggle />
      </ul>
    </div>
    </div>
  )
}

export default Navbar

