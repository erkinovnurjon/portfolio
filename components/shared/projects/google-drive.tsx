"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import google from "@/public/google-1.png";
import googl from "@/public/googleee.png";
import goog from "@/public/ggg.png";
import goo from "@/public/google-4.png";
import go from "@/public/google-5.png";
import gogle from "@/public/gogle.png";
import Autoplay from "embla-carousel-autoplay";
import { GitHubLogoIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "../loader";


const GoogleDrive = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [loader, setLoader] = useState(true);

 useEffect(() => {
   setLoader(false)
 }, []);

  return (
    <div className="card">
      <h1 className="md:py-4 py-2 md:text-4xl text-xl ">
        Google Drive Clone Version
      </h1>
      <div className="flex justify-between md:flex-row md:gap-16 gap-0 flex-col">
        <Carousel
          plugins={[plugin.current]}
          className="w-[88%] mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="flex md:flex-row md:items-start">
            {googleImages.map((item) => (
              <CarouselItem key={item.id}>
                <div className="p-1">
                  {loader ? (
                    <Loader />
                  ) : (
                    <Image
                      src={item.img}
                      alt="img"
                      width={800}
                      height={500}
                      className="w-full md:w-[800px]"
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="block mx-auto">
            <CarouselPrevious className="w-4 h-4 md:w-6 md:h-6 " />
            <CarouselNext />
          </div>
        </Carousel>
        <div className="flex flex-col space-y-4 border w-full my-4 md:w-1/2 h-full dark:bg-gradient-to-t dark:from-black dark:to-violet-900 p-3 md:p-8 rounded-xl">
          <h1 className="text-xl md:text-2xl font-bold">
            About the project
          </h1>
          <p className="text-sm md:text-[16px]">
            In the Google Drive project, I used version 14 of NextJs, Firebase
            Platform for data storage, Stripe Platform for Authorization, I used
            the shadcn/ui library for the UI part, and the Tailwind.Css library
            for styling
          </p>

          <Button variant={"default"} className="my-3">
            <Link
              href={"https://google-drive-erkinov.netlify.app/"}
              className="flex gap-3"
            >
              Open Project
              <PlayIcon className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant={"default"}>
            <Link
              href={"https://github.com/erkinovnurjon/google-drive"}
              className="flex gap-3 "
            >
              Open Code
              <GitHubLogoIcon className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GoogleDrive;

const googleImages = [
  {
    img: google,
    id: 1,
  },
  {
    img: googl,
    id: 2,
  },
  {
    img: goog,
    id: 3,
  },
  {
    img: goo,
    id: 4,
  },
  {
    img: go,
    id: 5,
  },
  {
    img: gogle,
    id: 6,
  },
];
