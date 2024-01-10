import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

import najot from "@/public/najot/najot.png"
import najot1 from "@/public/najot/najot1.png"
import najot2 from "@/public/najot/najot2.png"
import najot3 from "@/public/najot/najot3.png"
import najot4 from "@/public/najot/najot4.png"

import { GitHubLogoIcon, PlayIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

const NajotTalim = () => {
      return (
            <div className="card">
                  <h1 className=" md:py-4 py-2 md:text-4xl text-xl">Najot Talim </h1>
                  <div className=" flex justify-between md:flex-row md:gap-16 gap-0  flex-col">
                        <Carousel className="w-full ">
                              <CarouselContent className="flex md:flex-row   md:items-start ">
                                    {najotImages.map((item) => (
                                          <CarouselItem key={item.id}>
                                                <div className="p-1">
                                                      <Image src={item.img} alt='img' width={800} height={500} className=" w-full md:w-[800px]" />
                                                </div>
                                          </CarouselItem>
                                    ))}
                              </CarouselContent>
                              <CarouselPrevious />
                              <CarouselNext />
                        </Carousel>
                        <div className=" flex flex-col space-y-4 w-full border my-4 md:w-1/2 h-full dark:bg-gradient-to-t dark:from-black dark:to-violet-900 p-7 md:p-8 rounded-xl  ">
                              <h1 className="text-2xl font-bold">About the project</h1>
                              <p >
                                    This is a clone version of Najot Talim's official website.
                                    This task was given in the competition between Frontend programmers in Najot Talim. And our team won the 3rd place. The project did not use redundant libraries, everything was compiled from 0
                              </p>

                              <Button variant={"default"} className="  my-3">
                                    <Link href={'https://github.com/erkinovnurjon/netflix'}
                                          className=" flex gap-3" >

                                          Open Project
                                          <PlayIcon className="h-5 w-5" />
                                    </Link>
                              </Button>



                              <Button variant={"default"} >
                                    <Link href={'https://github.com/erkinovnurjon/najot-talim'} className=" flex gap-3  ">
                                          Open Code
                                          <GitHubLogoIcon className="h-5 w-5" />
                                    </Link>
                              </Button>

                        </div>


                  </div>

            </div>
      )
}

export default NajotTalim

const najotImages = [
      {
            img: najot,
            id: 1
      },
      {
            img: najot1,
            id: 2
      },
      {
            img: najot2,
            id: 3
      },
      {
            img: najot3,
            id: 4
      },
      {
            img: najot4,
            id: 5
      },
]