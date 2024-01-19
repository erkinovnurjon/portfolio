"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import tube1 from "@/public/vue/tube1.png";
import tube2 from "@/public/vue/tube2.png";
import tube3 from "@/public/vue/tube3.png";
import tube4 from "@/public/vue/tube4.png";
import tube5 from "@/public/vue/tube5.png";

import { GitHubLogoIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";
import Loader from "../loader";

const Youtube = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
  }, []);
  return (
    <div className="card">
      <h1 className=" md:py-4 py-2 md:text-4xl text-xl">Youtube</h1>
      <div className=" flex justify-between md:flex-row md:gap-16 gap-0  flex-col">
        <Carousel
          plugins={[plugin.current]}
          className="w-[88%] mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="flex md:flex-row   md:items-start ">
            {mapImages.map((item) => (
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
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
        <div className=" flex flex-col space-y-4 w-full border my-4 md:w-1/2 h-full dark:bg-gradient-to-t dark:from-black dark:to-violet-900 p-7 md:p-8 rounded-xl  ">
          <h1 className="text-2xl font-bold">About the project</h1>
          <p>
            This project is similar to the Youtube platform, where you can
            subscribe to watch the videos you want. The project is made using
            VueJs and Viteda, using the MUI library for Ui
          </p>

          <Button variant={"default"} className="  my-3">
            <Link
              href={"https://youtube-clone-drab-six.vercel.app/"}
              className=" flex gap-3"
            >
              Open Project
              <PlayIcon className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant={"default"}>
            <Link
              href={"https://github.com/erkinovnurjon/youtube-clone"}
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

export default Youtube;

const mapImages = [
  {
    img: tube1,
    id: 1,
  },
  {
    img: tube2,
    id: 2,
  },
  {
    img: tube3,
    id: 3,
  },
  {
    img: tube4,
    id: 4,
  },
  {
    img: tube5,
    id: 5,
  },
];
