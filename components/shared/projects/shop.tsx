import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

import shop1 from "@/public/shop/shop1.png"
import shop2 from "@/public/shop/shop2.png"
import shop3 from "@/public/shop/shop3.png"
import shop4 from "@/public/shop/shop4.png"
import shop5 from "@/public/shop/shop5.png"
import shop6 from "@/public/shop/shop6.png"

import { GitHubLogoIcon, PlayIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

const Shop = () => {
      return (
            <div className="card">
                  <h1 className=" md:py-4 py-2 md:text-4xl text-xl">Techno Shop</h1>
                  <div className=" flex justify-between md:flex-row md:gap-16 gap-0  flex-col">
                        <Carousel className="w-full ">
                              <CarouselContent className="flex md:flex-row   md:items-start ">
                                    {robotImages.map((item) => (
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
                                    This is a techno shop project, you can buy any product you want from this project. Project built on Next version 13 and used tailwind css for ui part
                              </p>

                              <Button variant={"default"} className="  my-3">
                                    <Link href={'https://github.com/erkinovnurjon/clothes-shope'}
                                          className=" flex gap-3" >

                                          Open Project
                                          <PlayIcon className="h-5 w-5" />
                                    </Link>
                              </Button>



                              <Button variant={"default"} >
                                    <Link href={'https://github.com/erkinovnurjon/clothes-shope'} className=" flex gap-3  ">
                                          Open Code
                                          <GitHubLogoIcon className="h-5 w-5" />
                                    </Link>
                              </Button>

                        </div>


                  </div>

            </div>
      )
}

export default Shop

const robotImages = [
      {
            img: shop1,
            id: 1
      },
      {
            img: shop2,
            id: 2
      },
      {
            img: shop3,
            id: 3
      },
      {
            img: shop4,
            id: 4
      },
      {
            img: shop5,
            id: 5
      },
      {
            img: shop5,
            id: 6
      },
]