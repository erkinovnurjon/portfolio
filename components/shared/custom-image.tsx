"use client";


import Image from "next/image";
import { useState } from "react";



const CustomImage  = (image : string) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      
        <Image
          src={image}
          alt=""
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      
    </>
  );
};

export default CustomImage;
