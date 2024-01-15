import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import rob1 from "@/public/robot/robo1.png";
import rob2 from "@/public/robot/robo2.png";
import rob3 from "@/public/robot/robo3.png";
import rob4 from "@/public/robot/robo4.png";
import rob5 from "@/public/robot/robo5.png";

import { GitHubLogoIcon, PlayIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const Robot = () => {
  return (
    <div className="card">
      <h1 className=" md:py-4 py-2 md:text-4xl text-xl">Prime Shop </h1>
      <div className=" flex justify-between md:flex-row md:gap-16 gap-0  flex-col">
        <Carousel className="w-full ">
          <CarouselContent className="flex md:flex-row   md:items-start ">
            {robotImages.map((item) => (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut
            asperiores vel dolorem. Alias tenetur rem quia quibusdam suscipit
            numquam vel porro rerum.
          </p>

          <Button variant={"default"} className="  my-3">
            <Link
              href={"https://project-tawilwind-css.vercel.app/"}
              className=" flex gap-3"
            >
              Open Project
              <PlayIcon className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant={"default"}>
            <Link
              href={"https://github.com/erkinovnurjon/project-tawilwind-css"}
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

export default Robot;

const robotImages = [
  {
    img: rob1,
    id: 1,
  },
  {
    img: rob2,
    id: 2,
  },
  {
    img: rob3,
    id: 3,
  },
  {
    img: rob4,
    id: 4,
  },
  {
    img: rob5,
    id: 5,
  },
];
