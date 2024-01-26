"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import jira1 from "@/public/jira/jira1.png";
import jira2 from "@/public/jira/jira2.png";
import jira3 from "@/public/jira/jira3.png";
import jira4 from "@/public/jira/jira4.png";
import jira5 from "@/public/jira/jira5.png";
import jira6 from "@/public/jira/jira6.png";

import Autoplay from "embla-carousel-autoplay";
import { GitHubLogoIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "../loader";

const JiraNuxt = () => {
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
      <h1 className="md:py-4 py-2 md:text-4xl text-xl">Jira Software</h1>
      <div className="flex justify-between md:flex-row md:gap-16 gap-0 flex-col">
        <Carousel
          plugins={[plugin.current]}
          className="w-[88%] mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="flex md:flex-row md:items-start">
            {mapImages.map((item, index) => (
              <CarouselItem key={item.id}>
                <div className="p-1">
                  {loader ? (
                    <Loader />
                  ) : (
                    <Image
                      src={item.img}
                      alt={`img-${item.id}`}
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
            <CarouselPrevious className="w-4 h-4 md:w-6 md:h-6 " />
            <CarouselNext />
          </div>
        </Carousel>
        <div className="flex flex-col space-y-4 border w-full my-4 md:w-1/2 h-full dark:bg-gradient-to-t dark:from-black dark:to-violet-900 p-3 md:p-8 rounded-xl">
          <h1 className="text-xl md:text-2xl font-bold">About the project</h1>
          <p className="text-sm md:text-[16px]">
            Этот проект выполнен в новой версии NuxtJs.В проекте использовалась
            платформа appwrite.io для базы данных, ui часть была подготовлена
            ​​из nuxtui и Tailwindcss и других библиотек.
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

export default JiraNuxt;

const mapImages = [
  {
    img: jira1,
    id: 1,
  },
  {
    img: jira2,
    id: 2,
  },
  {
    img: jira3,
    id: 3,
  },
  {
    img: jira4,
    id: 4,
  },
  {
    img: jira5,
    id: 5,
  },
  {
    img: jira6,
    id: 6,
  },
];
