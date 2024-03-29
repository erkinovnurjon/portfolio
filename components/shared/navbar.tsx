"use client";

import Image from "next/image";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Logo from "./logo";
import MenuBar from "./menu-bar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    setOpen(true);
  };

  return (
    <div className=" w-full  h-[10vh]   bg-[#EDF7FA] dark:bg-black  flex items-center">
      <div className="container mx-auto flex items-center justify-between ">
        <Link href={"/"}>
          {/* <Image src={'/logoo.jpg'} alt='logo' width={142} height={142} className=' rounded' /> */}
          <Logo />
        </Link>

        <div className="flex items-center gap-3">
          <div onSubmit={onToggle} className=" md:hidden flex">
            <Popover>
              <PopoverTrigger asChild>
                <AlignJustify />
              </PopoverTrigger>
              <PopoverContent className="w-32 ">
                <ul className=" flex flex-col text-xl font-[Heebo]  font-medium w-min">
                  <Link
                    href={"/projects"}
                    className=" hover:underline transition"
                  >
                    projects
                  </Link>
                  <Link href={"/blog"} className=" hover:underline transition">
                    blog
                  </Link>
                  <Link
                    href={"/contact"}
                    className=" hover:underline transition"
                  >
                    contact
                  </Link>
                </ul>
              </PopoverContent>
            </Popover>
          </div>
          <div className="md:flex hidden">
          <MenuBar />

          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
