"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import node1 from "@/public/node/node1.png";
import node2 from "@/public/node/node2.png";
import node3 from "@/public/node/node3.png";
import node4 from "@/public/node/node4.png";
import node5 from "@/public/node/node5.png";
import node6 from "@/public/node/node6.png";
import node7 from "@/public/node/node7.png";

import { GitHubLogoIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";
import Loader from "../loader";

const Boomshop = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [loader, setLoader] = useState(true)
  const [isLoading, setIsLoading] = useState(
    Array(mapImages.length).fill(true)
  );

  const handleImageLoad = (index: any) => {
    setIsLoading((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  useEffect(() => {
    setLoader(false);
  }, []);
  return (
    <div className="card">
      <h1 className=" md:py-4 py-2 md:text-4xl text-xl">Boom shop</h1>
      <div className=" flex justify-between md:flex-row md:gap-16 gap-0  flex-col">
        <Carousel
          plugins={[plugin.current]}
          className="w-[88%] mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="flex md:flex-row   md:items-start ">
            {mapImages.map((item, index) => (
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
                        isLoading[index]
                          ? "scale-110 blur-2xl grayscale"
                          : "scale-100 blur-0 grayscale-0"
                      }`}
                      onLoadingComplete={() => handleImageLoad(index)}
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
            This project is made using nodejs and expressjs. And the project
            mainly uses Handlebars, Bootstrap library is used for the ui part.
            In this project, you can add a new product after logging in and
            registering. To login and save products MongoDB platform is used
          </p>

          <Button variant={"default"} className="  my-3">
            <Link
              href={"https://github.com/erkinovnurjon/boom-shop"}
              className=" flex gap-3"
            >
              Open Project
              <PlayIcon className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant={"default"}>
            <Link
              href={"https://github.com/erkinovnurjon/boom-shop"}
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

export default Boomshop;

const mapImages = [
  {
    img: node1,
    id: 1,
  },
  {
    img: node2,
    id: 2,
  },
  {
    img: node3,
    id: 3,
  },
  {
    img: node4,
    id: 4,
  },
  {
    img: node5,
    id: 5,
  },
  {
    img: node6,
    id: 6,
  },
  {
    img: node7,
    id: 7,
  },
];
