"use client";

import Image from "next/image";
import BublyButton from "./BublyButton";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [title] = useTypewriter({
    words: ["Software Engineer ", "Frontend Developer", "Krasavchik"],
    // @ts-ignore
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 20,
  });
  const { toast } = useToast();
  const handleDownload = () => {
    let fileDownloaded = false;
    const downloadFile = () => {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    setTimeout(() => {
      if (fileDownloaded) {
        downloadFile();
        toast({
          title: "Downloaded",
          description: "Muvaffaqqiyatli downloaded",
        });
      } else {
        toast({
          title: "Downloaded",
          description: "bu avval downloaded",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    }, 7000);
  };

  return (
    <div className=" container mx-auto">
      <div className="md:flex flex-row justify-start md:justify-between items-center py-7">
        <div className=" md:w-1/2 w-full flex flex-col justify-center md:flex md:justify-start">
          <h1 className="  md:text-6xl text-4xl py-1 md:py-5 text-center md:text-start font-bold font-[Heebo] leading-[50px] text-[#21243d] dark:text-[#e3e3f19f]">
            <span>Hi , I'm Nurjon</span>
            <br />
            <span>{title}</span>
            <span>
              <Cursor />
            </span>
          </h1>
          <p className="font-[Heebo] text-xl py-1 md:py-4 md:text-2xl text-[#21243d] dark:text-[#e3e3f19f] text-center md:text-start  md:w-2/3 pt-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div
            role="button"
            className="   my-4 md:my-6"
            onClick={handleDownload}
          >
            <BublyButton />
          </div>
        </div>
        <div className=" hidden md:flex">
          <Image
            src="/menn.jpg"
            alt="Ellipse"
            id="EllipseRoot"
            className=" rounded-full bg-background"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
