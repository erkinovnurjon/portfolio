import Image from 'next/image'


const Dashboard = () => {
  return (
    <div className=' container mx-auto my-6'>
      <div>
                    <h1 className="text-xl font-['Heebo'] leading-[60px] text-[#21243d] dark:text-slate-500">Featured works</h1>
            <div className=' flex flex-col md:flex-row md:my-8 my-2 justify-center md:justify-start md:gap-12'>
                  <Image 
                        src="https://file.rendit.io/n/Ya83xAxYDf0nBazc38R7.png"
                        alt="Rectangle"
                        className=" w-full md:w-[400px]"
                        width={400}
                        height={300}
                   /> 

                   <div >
                        <h1 className="text-3xl font-['Heebo'] text-center md:text-start font-bold text-[#21243d] dark:text-white/70 py-5 ">
                              Designing Dashboards
                        </h1>
                        <div className=' flex gap-5 justify-center md:justify-start py-2'>
                              <div className='bg-[#142850] flex items-center justify-center w-16 h-8  rounded-lg'>
                                    <span className="text-lg font-['Heebo'] font-black leading-[60px] text-white ">
                                          2020
                                    </span>
                              </div>
                                      <span className="text-xl font-['Heebo'] text-[#8695a4] dark:text-white/70 ">
                                 Dashboard
                              </span>
                        </div>
                                <p className="font-['Heebo'] text-[#21243d] dark:text-white/70 w-full text-center md:text-start md:w-2/3 py-4">
                               Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                               Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                              sunt nostrud amet.
                        </p>
                  </div>
            </div>
            <div className=' flex flex-col md:flex-row justify-center md:my-4 md:justify-start md:gap-12'>
                  <Image 
                        src="https://file.rendit.io/n/7bbo6p6tQUKwMrTFVu13.png"
                        alt="Rectangle"
                        className=" w-full md:w-[400px]"
                        width={400}
                        height={200}
                   /> 

                   <div >
                        <h1 className="text-3xl font-['Heebo'] text-center md:text-start font-bold text-[#21243d] dark:text-white/70 py-5 ">
                               Vibrant Portraits of 2020
                        </h1>
                        <div className=' flex gap-5 justify-center md:justify-start py-2'>
                              <div className='bg-[#142850] flex items-center justify-center w-16 h-8  rounded-lg'>
                                    <span className="text-lg font-['Heebo'] font-black leading-[60px] text-white ">
                                          2020
                                    </span>
                              </div>
                                      <span className="text-xl font-['Heebo'] text-[#8695a4] dark:text-white/70 ">
                                     Illustration
                              </span>
                        </div>
                              <p className="font-['Heebo'] text-[#21243d] dark:text-white/70 w-full text-center md:text-start md:w-2/3 py-4">
                                 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                              </p>
                  </div>
            </div>
            <div className=' flex flex-col md:flex-row md:my-8 my-2 justify-center md:justify-start md:gap-12'>
                  <Image 
                        src="https://file.rendit.io/n/S7ADTk0Rou4Y0bVgfRrw.png"
                        alt="Rectangle"
                        className=" w-full md:w-[400px]"
                        width={300}
                        height={200}
                   /> 

                   <div >
                        <h1 className="text-3xl font-['Heebo'] text-center md:text-start font-bold text-[#21243d] dark:text-white/70 py-5 ">
                              36 Days of Malayalam type
                        </h1>
                        <div className=' flex gap-5 justify-center md:justify-start py-2'>
                              <div className='bg-[#142850] flex items-center justify-center w-16 h-8  rounded-lg'>
                                    <span className="text-lg font-['Heebo'] font-black leading-[60px] text-white ">
                                          2020
                                    </span>
                              </div>
                                      <span className="text-xl font-['Heebo'] text-[#8695a4] dark:text-white/70 ">
                                     Typography
                                     </span>
                        </div>
                                <p className="font-['Heebo'] text-[#21243d] dark:text-white/70 w-full text-center md:text-start md:w-2/3 py-4">
                                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Dashboard