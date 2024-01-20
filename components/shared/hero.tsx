"use client";

import Image from "next/image";
import BublyButton from "./BublyButton";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";

const Hero = () => {
  const boxRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(boxRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1,
        ease: "power.out",
      });

      gsap.to(boxRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power.out",
      });
    },
    //@ts-ignore
    { targets: boxRef, start: "hover", end: "unhover" }
  );
  //title
  const [title] = useTypewriter({
    words: ["Software Engineer ", "Frontend Developer"],
    // @ts-ignore
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 20,
  });
  const { toast } = useToast();
  //download
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
          title: "Error",
          description: "bu avval downloaded",
          // action: <ToastAction className="w-1/4 md:max-w-28" altText="Try again">Try again</ToastAction>,
        });
      }
    }, 7000);
  };

  return (
    <div className=" container mx-auto py-2 md:py-4" ref={boxRef}>
      <div className="md:flex flex-row justify-start md:justify-between items-center py-7">
        <div className=" md:w-1/2 w-full flex flex-col justify-center md:flex md:justify-start">
          <h1 className="  md:text-6xl text-3xl py-0 md:py-5 text-center md:text-start font-bold font-[Heebo] leading-[25px] md:leading-[50px] text-[#21243d] dark:text-[#e3e3f19f]">
            <span className=" block py-2 md:py-4">Hi , I'm Nurjon</span>

            <span>{title}</span>
            <span>
              <Cursor />
            </span>
          </h1>
          <p className="font-[Heebo] text-[16px] py-1 md:py-4 md:text-2xl text-[#21243d] dark:text-[#e3e3f19f] text-center md:text-start  md:w-2/3 pt-5">
            Hello. I am a junior front-end developer. A year ago, I started
            studying at the "Na'jot Ta'lim" training center. My interest in
            programming started from watching the work of my classmates at the
            university.
          </p>
          <div
            role="button"
            className="  w-3/2 md:w-full my-4 md:my-6"
            onClick={handleDownload}
          >
            <BublyButton />
          </div>
        </div>
        <div
          className=" hidden md:flex box"
          ref={boxRef}
        >
          <Image
            src="/menn.jpg"
            alt="Ellipse"
            id="EllipseRoot"
            className="rounded-full bg-background"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
