import { Separator } from "@/components/ui/separator";

const Blog = () => {
  return (
    <div className="container mx-auto w-full md:w-2/3  my-6 md:my-12 ">
      <h1 className="text-3xl md:text-5xl font-['Heebo'] font-bold leading-[60px] text-[#21243d] dark:text-slate-500">
        Blog
      </h1>
      <div className="flex flex-col my-3 md:my-6 p-4 rounded-xl border shadow">
        <h1 className="text-2xl md:text-2xl font-['Heebo'] py-2 md:py-3 font-medium text-[#21243d] dark:text-slate-500 ">
          Frontend Developer
        </h1>
        <div className="flex flex-row gap-6 w-full py-1 md:py-2 font-['Heebo'] items-center">
          <span className="text-sm md:text-xl text-[#21243d] dark:text-slate-500 mb-0">
            30 Jan 2023
          </span>
          <Separator className="h-6 " orientation="vertical" />
          <span className=" text-sm md:text-xl text-slate-500 font-thin">
            30 Sep 2023
          </span>
        </div>
        <p className="font-['Heebo'] text-xs md:text-xl text-[#21243d] dark:text-slate-500 w-full">
          At the Najot Education Training Center, I learned the basics of html,
          css, javascript, react and redux toolkit for 8 months from my teacher
          Shohabbos Urinov, and this knowledge started working for me later
        </p>
      </div>
      <div className="flex flex-col my-3 md:my-6 p-4 rounded-xl border shadow">
        <h1 className="text-2xl md:text-2xl font-['Heebo'] py-2 md:py-3 font-medium text-[#21243d] dark:text-slate-500 ">
          TypeScript
        </h1>
        <div className="flex flex-row gap-6 w-full py-1 md:py-2 font-['Heebo'] items-center">
          <span className="text-sm md:text-xl text-[#21243d] dark:text-slate-500 mb-0">
            2 Oct 2023
          </span>
          <Separator className="h-6 " orientation="vertical" />
          <span className=" text-sm md:text-xl text-slate-500 font-thin">
            20 Oct 2023
          </span>
        </div>
        <p className="font-['Heebo'] text-xs md:text-xl text-[#21243d] dark:text-slate-500 w-full">
          After finishing Najot Talim, I started buying online classes because
          of my knowledge of making real projects. One of them is TypeScript and
          TailwindCss from Mohridev Platform.
        </p>
      </div>
      <div className="flex flex-col my-3 md:my-6 p-4 rounded-xl border shadow">
        <h1 className="text-2xl md:text-2xl font-['Heebo'] py-2 md:py-3 font-medium text-[#21243d] dark:text-slate-500 ">
          NodeJs
        </h1>
        <div className="flex flex-row gap-6 w-full py-1 md:py-2 font-['Heebo'] items-center">
          <span className="text-sm md:text-xl text-[#21243d] dark:text-slate-500 mb-0">
            1 Nov 2023
          </span>
          <Separator className="h-6 " orientation="vertical" />
          <span className=" text-sm md:text-xl text-slate-500 font-thin">
            5 Dec 2023
          </span>
        </div>
        <p className="font-['Heebo'] text-xs md:text-xl text-[#21243d] dark:text-slate-500 w-full">
          I started doing good projects in the front-end part and started
          learning the backend part of the web myself. But only the parts used
          in the front-end part. I started learning independently by buying
          NodeJs and ExpressJs courses from Mohirdev Platform.
        </p>
      </div>
      <div className="flex flex-col my-3 md:my-6 p-4 rounded-xl border shadow">
        <h1 className="text-2xl md:text-2xl font-['Heebo'] py-2 md:py-3 font-medium text-[#21243d] dark:text-slate-500 ">
          VueJs Vuex
        </h1>
        <div className="flex flex-row gap-6 w-full py-1 md:py-2 font-['Heebo'] items-center">
          <span className="text-sm md:text-xl font-['Heebo']  text-[#21243d] dark:text-slate-500 mb-0">
            4 Dec 2023
          </span>
          <Separator className="h-6 " orientation="vertical" />
          <span className=" text-sm md:text-xl text-slate-500 font-thin">
            10 Jan 2024
          </span>
        </div>
        <p className="font-['Heebo'] text-xs md:text-xl text-[#21243d] dark:text-slate-500 w-full">
          I haven't found a job yet in December. And I started to learn VueJs.
          But I had a lot of difficulties while learning, because my teacher was
          not good!
        </p>
      </div>
    </div>
  );
};

export default Blog;
