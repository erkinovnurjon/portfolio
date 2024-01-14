import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import matras1 from "@/public/matras/mat1.png";
import matras2 from "@/public/matras/mat2.png";
import matras3 from "@/public/matras/mat3.png";
import matras4 from "@/public/matras/mat4.png";
import matras5 from "@/public/matras/mat5.png";

import { GitHubLogoIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const Matras = () => {
  return (
    <div className="card">
      <h1 className=" md:py-4 py-2 my-5 md:text-4xl text-xl">Matras </h1>
      <div className=" flex justify-between md:flex-row md:gap-16 gap-0 items-center  flex-col">
        <Carousel className="w-full ">
          <CarouselContent className="flex md:flex-row   md:items-start ">
            {matrasImages.map((item) => (
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
            This project was made by me and 2 of my friends, When we were
            finishing the course, we were given this project for the exam. and
            We did well in the exam
          </p>

          <Button variant={"default"} className="  my-3">
            <Link
              href={"https://matraslar.netlify.app/"}
              className=" flex gap-3"
            >
              Open Project
              <PlayIcon className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant={"default"}>
            <Link
              href={"https://github.com/erkinovnurjon/najot-talim"}
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

export default Matras;

const matrasImages = [
  {
    img: matras1,
    id: 1,
  },
  {
    img: matras2,
    id: 2,
  },
  {
    img: matras3,
    id: 3,
  },
  {
    img: matras4,
    id: 4,
  },
  {
    img: matras5,
    id: 5,
  },
];
