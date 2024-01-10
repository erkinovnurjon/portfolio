import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

import net from "@/public/netflix/net1.png"
import net1 from "@/public/netflix/net2.png"
import net2 from "@/public/netflix/net3.png"
import net3 from "@/public/netflix/net4.png"
import net4 from "@/public/netflix/net5.png"

import { GitHubLogoIcon, PlayIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

const Netflix = () => {
  return (
    <div className="card">
      <h1 className=" md:py-4 py-2 md:text-4xl text-xl">Netflix Clone Version</h1>
      <div className=" flex justify-between md:flex-row md:gap-16 gap-0  flex-col">
        <Carousel className="w-full ">
          <CarouselContent className="flex md:flex-row   md:items-start ">
            {googleImages.map((item) => (
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
            In the Netflix project I used version 14 of NextJs,
            MongoDB Platform for data storage, GitHub  for Authorization,
            I used the shadcn/ui library for the UI part and the Tailwind.Css library for the styling
          </p>

          <Button variant={"default"} className="  my-3">
            <Link href={'https://github.com/erkinovnurjon/netflix'}
              className=" flex gap-3" >

              Open Project
              <PlayIcon className="h-5 w-5" />
            </Link>
          </Button>



          <Button variant={"default"} >
            <Link href={'https://github.com/erkinovnurjon/netflix'} className=" flex gap-3  ">
              Open Code
              <GitHubLogoIcon className="h-5 w-5" />
            </Link>
          </Button>

        </div>


      </div>

    </div>
  )
}

export default Netflix

const googleImages = [
  {
    img: net,
    id: 1
  },
  {
    img: net1,
    id: 2
  },
  {
    img: net2,
    id: 3
  },
  {
    img: net4,
    id: 4
  },
  {
    img: net3,
    id: 5
  },
]