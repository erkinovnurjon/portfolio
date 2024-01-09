"use client"

import Image from 'next/image'
import  { useState } from 'react'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'
import { AlignJustify } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'


const Navbar = () => {

  const [open, setOpen] = useState(false)
  const onToggle = () => {
    setOpen(true)
  }

  return (
    <div className=' w-full h-[10vh] bg-[#EDEDED] dark:bg-black  flex items-center'>

    <div className='container mx-auto flex items-center justify-between '>
      <Link href={'/'}>
          <Image src={'/logoo.jpg'} alt='logo' width={142} height={142} className=' rounded' />
        </Link>
      
      <div className='flex items-center gap-3'>
          <div onSubmit={onToggle} className=' md:hidden flex' >
            <Popover >
              <PopoverTrigger asChild>
                
                <AlignJustify />

                
              </PopoverTrigger>
              <PopoverContent className='w-32 '>
                <ul className=' flex flex-col text-xl font-[Heebo]  font-medium w-min'>
                  <Link href={'/works'} className=' hover:underline transition' >
                    works
                  </Link>
                  <Link href={'/blog'} className=' hover:underline transition' >
                    blog
                  </Link>
                  <Link href={'/contact'} className=' hover:underline transition' >
                    contact
                  </Link>
                </ul>
                
              </PopoverContent>
            </Popover>
          </div>
            
       

      <ul className='md:flex justify-end items-center hidden text-xl font-[Heebo] gap-5 font-medium w-min'>
      <Link href={'/works'} className=' hover:underline transition' >
        works
      </Link>
      <Link href={'/blog'} className=' hover:underline transition' >
        blog
      </Link>
      <Link href={'/contact'} className=' hover:underline transition' >
        contact
      </Link>
      </ul>
       <ModeToggle />
      </div>
    </div>
    </div>
  )
}

export default Navbar

