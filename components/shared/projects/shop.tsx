"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import shop1 from "@/public/shop/shop1.png";
import shop2 from "@/public/shop/shop2.png";
import shop3 from "@/public/shop/shop3.png";
import shop4 from "@/public/shop/shop4.png";
import shop5 from "@/public/shop/shop5.png";

import { GitHubLogoIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useState } from "react";
import Loader from "../loader";

const Shop = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [loader, setLoader] = useState(true);
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
      <h1 className=" md:py-4 py-2 md:text-4xl text-xl">Techno Shop</h1>
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
            This is a techno shop project, you can buy any product you want from
            this project. Project built on Next version 13 and used tailwind css
            for ui part
          </p>

          <Button variant={"default"} className="  my-3">
            <Link
              href={"https://github.com/erkinovnurjon/clothes-shope"}
              className=" flex gap-3"
            >
              Open Project
              <PlayIcon className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant={"default"}>
            <Link
              href={"https://github.com/erkinovnurjon/clothes-shope"}
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

export default Shop;

const mapImages = [
  {
    img: shop1,
    id: 1,
  },
  {
    img: shop2,
    id: 2,
  },
  {
    img: shop3,
    id: 3,
  },
  {
    img: shop4,
    id: 4,
  },
  {
    img: shop5,
    id: 5,
  },
  {
    img: shop5,
    id: 6,
  },
];
