import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import movie from "@/public/vue/mov1.png";
import movie1 from "@/public/vue/mov2.png";
import movie2 from "@/public/vue/mov3.png";

import { GitHubLogoIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const Movie = () => {
  return (
    <div className="card">
      <h1 className=" md:py-4 py-2 md:text-4xl text-xl">Movie app</h1>
      <div className=" flex justify-between md:flex-row md:gap-16 gap-0  flex-col">
        <Carousel className="w-full ">
          <CarouselContent className="flex md:flex-row   md:items-start ">
            {mapImages.map((item) => (
              <CarouselItem key={item.id}>
                <div className="p-1">
                  <Image
                    src={item.img}
                    alt="img"
                    width={800}
                    height={500}
                    className=" w-full md:w-[800px]"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className=" flex flex-col space-y-4 w-full border my-4 md:w-1/2 h-full dark:bg-gradient-to-t dark:from-black dark:to-violet-900 p-7 md:p-8 rounded-xl  ">
          <h1 className="text-2xl font-bold">About the project</h1>
          <p>
            This project is mainly functional. I made this project when I
            started learning VueJs
          </p>

          <Button variant={"default"} className="  my-3">
            <Link
              href={"youtube-clone-drab-six.vercel.app"}
              className=" flex gap-3"
            >
              Open Project
              <PlayIcon className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant={"default"}>
            <Link
              href={"https://github.com/erkinovnurjon/vue3-movie-app-small-"}
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

export default Movie;

const mapImages = [
  {
    img: movie,
    id: 1,
  },
  {
    img: movie1,
    id: 2,
  },
  {
    img: movie2,
    id: 3,
  },
];
