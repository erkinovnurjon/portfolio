"use client";

import { FC, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { MapPin, MessageCircleIcon, PhoneCallIcon } from 'lucide-react';
import Image from 'next/image';

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';


const Contact: FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<number | ''>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Bu joyda kiritilgan malumotlarni saqlash logikasi yoziladi
    console.log({
      firstName,
      lastName,
      email,
      phoneNumber,
    });
    setIsFormSubmitted(true);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isFormSubmitted) {

    
      
      timeout = setTimeout(() => {
        setIsFormSubmitted(false);
       
        
      }, 3500);
    }
    
    return () => clearTimeout(timeout);
  }, [isFormSubmitted]);

 

  return  (
    <div className=' container mx-auto my-6'>
      <h1 className="text-4xl font-['Heebo']  text-[#21243d] dark:text-slate-500 text-center font-bold ">
        Contact me
      </h1>

      <p className="text-center text-lg font-['Heebo']  text-[#21243d] dark:text-slate-500 py-2 font-medium  ">
        Any question or remarks? Just write us a message!
      </p>
      <div className='flex md:flex-row flex-col justify-between my-4 '>
        <div className=' p-5 border relative w-full md:w-[41%] rounded-md h-full'>
          <h1 className="text-3xl leading-12 font-['Heebo']  text-[#21243d] dark:text-slate-500 font-semibold  ">
            Contact Information
          </h1>
          <p className="text-lg leading-9 py-3 font-['Heebo']  text-[#21243d] dark:text-slate-500 ">
            Say something to start a live chat!
          </p>
          <div className="flex flex-col  gap-8 font-['Heebo']  text-[#21243d] dark:text-slate-500">
            <span className='flex gap-4 items-center text-sm'>
              <PhoneCallIcon /> +998 93 336 59 06
            </span>
            <span className='flex gap-4 items-center text-sm'>
              <MessageCircleIcon /> nurjon2477@gmail.com
            </span>
            <span className='flex gap-4 items-center  text-sm'>
              <MapPin className='h-6 w-6' /> Chilanzar 6-kvartal 
            </span>
          </div>
          <div className='flex items-center justify-start w-full md:w-1/2 md:pt-36 py-6 md:pb-6  gap-5  '>
            <TwitterLogoIcon className='h-8 w-8 hover:translate-y-1 hover:transition ' />
            <InstagramLogoIcon className='h-8 w-8 hover:translate-y-1 hover:transition ' />
            <LinkedInLogoIcon className='h-8 w-8 hover:translate-y-1 hover:transition ' />
          </div>

          <Image
            src={'/contact.svg'}
            alt='image'
            width={150}
            height={150}
            className='absolute  w-24 md:w-32  bottom-0 right-0'
          />
          <Image
            src={'/contact-bg.svg'}
            alt='image'
            width={150}
            height={150}
            className='absolute  w-24 md:w-32  md:bottom-16 bottom-8 md:right-10 right-5'
          />
        </div>
        <div className='md:w-[70%] w-full'>
          {isFormSubmitted ? (
           <div className='flex justify-center  items-center'>
              <h1 className="text-center text-4xl font-bold font-[' Heebo']  text-[#21243d] dark:text-slate-500  px-2 md:px-5">
              Ma'lumotlaringiz muvaffaqiyatli yuborildi!
        </h1>
            
           </div>
          ) : (
            <form className='w-full' onSubmit={onSubmit}>
                <div className="flex flex-col md:flex-row font-[' Heebo']  text-[#21243d] dark:text-slate-500 justify-center md:gap-10 gap-2 items-center">
                <div className='w-full md:px-5 md:py-0 '>
                  <Label htmlFor='firstName'>First Name</Label>
                  <Input
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='Name'
                    className='w-full md:my-2 my-1 border-t-0 border-x-0 outline-0'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <Label htmlFor='lastName'>Last Name</Label>
                  <Input
                    type='text'
                    placeholder='Doe'
                    id='lastName'
                    name='lastName'
                    className='w-full md:my-2 my-1 border-t-0 border-x-0 outline-0'
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className='w-full md:p-4 p-0'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='nurjon@gmail.com'
                    className='w-full my-2 border-t-0 border-x-0 outline-0'
                    value={email}
                    
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Label htmlFor='number'>Phone Number</Label>
                  <Input
                    type='number'
                    id='phoneNumber'
                    name='phoneNumber'
                    placeholder='+998933365906'
                    className='w-full my-2 border-t-0 border-x-0 outline-0'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(Number(e.target.value))}
                  />
                </div>
              </div>

            
              {/* Textarea comp */}
              <div className="grid w-full gap-1.5 md:p-4 md:py-6 p-0 ">
                  <Label className="font-['Heebo'] text-xl  text-[#21243d] dark:text-slate-500" htmlFor="message-2">For suggestions</Label>
                <Textarea
                    className="my-2 border-t-0 border-x-0 font-['Heebo']  text-[#21243d] dark:text-slate-500"
                  placeholder="Your Message"
                  id="message-2"
                />
                
                <div className="flex justify-end my-1 md:my-3">
                  <Button type="submit" className=" w-full md:w-1/3">
                    Send
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
