

import CheckBoxComp from '@/components/shared/checkbox'
import Forma from '@/components/shared/form'
import { Checkbox } from '@/components/ui/checkbox'
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { LocateIcon, MapPin, MessageCircleIcon, PhoneCallIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className=' container mx-auto my-6'>
      <h1 className="text-4xl font-['Poppins'] text-center font-bold ">
        Contact Us
      </h1>
      <p className="text-center text-lg font-['Poppins'] font-medium text-[#717171] ">
        Any question or remarks? Just write us a message!
      </p>
      <div className='flex justify-between my-4 '>
        <div className=' p-5 border relative w-[41%] h-full'>
          
            <h1 className="text-3xl leading-12 font-['Poppins'] font-semibold text-white ">
              Contact Information
            </h1>
            <p className="text-lg leading-9 py-3 font-['Poppins'] text-[#c9c9c9] ">
              Say something to start a live chat!
            </p>
          
          <div className='flex flex-col  gap-8'>
            <span className='flex gap-4 items-center text-sm'>
              <PhoneCallIcon /> +1012 3456 789
            </span>
            <span className='flex gap-4 items-center text-sm'>
              <MessageCircleIcon /> demo@gmail.com
            </span>
            <span className='flex gap-4 items-center  text-sm'>
              <MapPin className='h-6 w-6' /> 132 Dartmouth Street Boston, <br /> Massachusetts 02156 United States
            </span>
          </div>
          <div className='flex items-center justify-start w-1/2 md:py-12 gap-5  '>
            <TwitterLogoIcon className='h-8 w-8 hover:translate-y-1 hover:transition ' />
            <InstagramLogoIcon className='h-8 w-8 hover:translate-y-1 hover:transition ' />
            <LinkedInLogoIcon className='h-8 w-8 hover:translate-y-1 hover:transition ' />
          </div>

          <Image 
          src={'/contact.svg'} alt='image'
          width={150} height={150}
          className='absolute  bottom-0 right-0' />
          <Image 
          src={'/contact-bg.svg'} alt='image'
          width={150} height={150}
          className='absolute  bottom-16 right-10' />
        </div>
      <div className='w-[70%]'>
          <Forma />
          <CheckBoxComp />
      </div>

      </div>

    </div>
  )
}

export default Contact