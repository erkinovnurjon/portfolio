"use client"

import Image from 'next/image'
import { Button } from '../ui/button';


const Hero = () => {

  const handleDownload = () => {
    const downloadFile = () => {
      const link = document.createElement('a');
      link.href = '/resume.pdf'; // Fayl manzili
      link.setAttribute('download', 'resume.pdf'); // Fayl nomi
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    downloadFile();
  };

  return (
    <div className=' container mx-auto'>

    <div className= 'md:flex flex-row justify-start md:justify-between items-center py-7'>
        <div className=' md:w-1/2 w-full flex flex-col justify-center md:flex md:justify-start'>
        <h1 className='  md:text-6xl text-4xl py-1 md:py-4 text-center md:text-start font-bold font-[Heebo] leading-[50px] text-[#21243d] dark:text-[#e3e3f19f]'>
          Hi, I am John,
          <br />
          Creative Technologist
       </h1>
        <p className="font-[Heebo] text-xl py-1 md:py-4 md:text-2xl text-[#21243d] dark:text-[#e3e3f19f] text-center md:text-start  md:w-2/3 pt-5">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
       </p>
        <button
         onClick={handleDownload}
        className=' px-3 py-4 text-center w-full md:w-1/2  font-medium text-white bg-[#ff6464]  my-4    rounded-sm
         hover:bg-orange-900/80 transition'>
          Download Resume
       </button>

        </div>
        <div className=' hidden md:flex'>
        <Image
          src="/menn.jpg"
          alt="Ellipse"
          id="EllipseRoot"
          className=' rounded-full bg-background'
          width={400}
          height={400}
        />

        </div>
    </div>
    </div>
  )
}

export default Hero