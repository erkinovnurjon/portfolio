"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import najot from "@/public/najot/najot.png";
import najot1 from "@/public/najot/najot1.png";
import najot2 from "@/public/najot/najot2.png";
import najot3 from "@/public/najot/najot3.png";
import najot4 from "@/public/najot/najot4.png";

import { GitHubLogoIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";
import Loader from "../loader";

const NajotTalim = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [loader, setLoader] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setLoader(false);
    }, []);
  return (
    <div className="card">
      <h1 className=" md:py-4 py-2 md:text-4xl text-xl">Najot Talim </h1>
      <div className=" flex justify-between md:flex-row md:gap-16 gap-0  flex-col">
        <Carousel
          plugins={[plugin.current]}
          className="w-[88%] mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="flex md:flex-row   md:items-start ">
            {najotImages.map((item) => (
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
                      className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                        isLoading
                          ? "scale-110 blur-2xl grayscale"
                          : "scale-100 blur-0 grayscale-0"
                      }}`}
                      onLoadingComplete={() => setIsLoading(false)}
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="block mx-auto">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
        <div className=" flex flex-col space-y-4 w-full border my-4 md:w-1/2 h-full dark:bg-gradient-to-t dark:from-black dark:to-violet-900 p-7 md:p-8 rounded-xl  ">
          <h1 className="md:text-2xl text-xl font-bold">About the project</h1>
          <p className="text-sm md:text-[16px]">
            This is a clone version of Najot Talim's official website. This task
            was given in the competition between Frontend programmers in Najot
            Talim. And our team won the 3rd place. The project did not use
            redundant libraries, everything was compiled from 0
          </p>

          <Button variant={"default"} className="  my-3">
            <Link
              href={"https://najot-talim-react-n9.netlify.app/"}
              className=" flex gap-3"
            >
              Open Project
              <PlayIcon className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant={"default"}>
            <Link
              href={"https://github.com/Alibek1117/Matrass"}
              className=" flex gap-3  "
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

export default NajotTalim;

const najotImages = [
  {
    img: najot,
    id: 1,
  },
  {
    img: najot1,
    id: 2,
  },
  {
    img: najot2,
    id: 3,
  },
  {
    img: najot3,
    id: 4,
  },
  {
    img: najot4,
    id: 5,
  },
];
