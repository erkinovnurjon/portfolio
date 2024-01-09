
import { Separator } from '../ui/separator'

const Feauture = () => {
  return (
    <div className=' dark:bg-[#0A0A0A]
     w-full bg-[#EDF7FA]  my-7'>
      <div className=' container mx-auto'>
          <div className=' w-full flex justify-between my-6' >
          <span className="text-xl font-['Heebo'] leading-[60px] text-[#21243d] dark:text-white ">
              Recent ports
            </span>
            <span className="font-['Heebo'] hidden md:flex text-[#00a8cc] ">
              view all
            </span>
          </div>
        <div className=' md:flex flex-col md:flex-row justify-between items-center my-6'>
          <div className=' bg-white dark:bg-gradient-to-r dark:from-black dark:to-violet-900
           w-full md:w-[600px] md:h-[250px] py-4  my-8 px-8 rounded'>
            <h1 className=' text-2xl  font-[Heebo] font-bold py-3 text-[#21243d] dark:text-white w-full' >Making a design system from scratch</h1>
              <div className=' flex gap-4 py-3'>
              <span>12 Feb 2020</span>
              <Separator orientation="vertical" className=' mt-1 h-4' />
              <span>Design , Pattern</span>

              </div>
            <p className="font-['Heebo'] text-[#21243d] dark:text-white py-3 w-full">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>

         
          
          <div className=' bg-white dark:bg-gradient-to-r dark:from-black dark:to-violet-900
             w-full md:w-[600px] md:h-[250px] py-4 px-8 rounded'>
            <h1 className=' text-2xl  font-[Heebo] font-bold py-3 text-[#21243d] dark:text-white w-full' >
                Creating pixel perfect icons in Figma
              </h1>
              <div className=' flex gap-4 py-3'>
              <span>12 Feb 2020</span>
              <Separator orientation="vertical" className=' mt-1 h-4' />
              <span>Figma Icon , design</span>

              </div>
            <p className="font-['Heebo'] text-[#21243d] dark:text-white py-3 w-full">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          
         </div>
        </div>
    </div>
  )
}

export default Feauture