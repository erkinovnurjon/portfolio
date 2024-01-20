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
  const [loader, setLoader] = useState(true);
  const [isLoading, setIsLoading] = useState(
    Array(mapImages.length).fill(true)
  );

  useEffect(() => {
    setLoader(false);
  }, []);

  const handleImageLoad = (index : any) => {
    setIsLoading((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <div className="card">
      <h1 className="md:py-4 py-2 md:text-4xl text-xl">Boom shop</h1>
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
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
        {/* ... */}
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
