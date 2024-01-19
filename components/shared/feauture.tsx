import { Separator } from "../ui/separator";

const Feauture = () => {
  return (
    <div
      className=" dark:bg-[#0A0A0A]
     w-full bg-[#EDF7FA]  my-2 md:my-4 "
    >
      <div className=" container mx-auto">
        <div className=" w-full flex justify-between my-3 md:my-6">
          <span className="text-xl font-['Heebo'] leading-[20px] md:leading-[60px] text-[#21243d] dark:text-white ">
            Recent ports
          </span>
          <span className="font-['Heebo'] hover:underline hidden md:flex text-[#00a8cc] ">
            view all
          </span>
        </div>
        <div className=" md:flex flex-col md:flex-row justify-between items-center pb-16 ">
          <div
            className="bg-gradient-to-r from-slate-300 to-white dark:bg-gradient-to-r dark:from-black dark:to-violet-900
           w-full md:w-[600px] md:h-[250px] md:py-4 py-2 md:my-3 my-8 px-4 md:px-8 rounded"
          >
            <h1 className=" text-[18px] md:text-2xl  font-[Heebo] font-bold md:py-3 py-1 text-[#21243d] dark:text-white w-full">
              Making a design system from scratch
            </h1>
            <div className=" flex gap-4 py-1 md:py-3">
              <span className="md:text-xl  text-[14px]">12 Apr 2023</span>
              <Separator orientation="vertical" className=" mt-1 h-4" />
              <span className="md:text-xl  text-[14px]">Design , Pattern</span>
            </div>
            <p className="font-['Heebo'] md:text-[18px] text-[14px] text-[#21243d] dark:text-white py-1 md:py-3 w-full">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div
            className=" bg-gradient-to-r from-slate-300 to-white dark:bg-gradient-to-r dark:from-black dark:to-violet-900
             w-full md:w-[600px] md:h-[250px] md:py-4 py-2 md:px-8 px-4 rounded"
          >
            <h1 className=" md:text-2xl text-[18px]  font-[Heebo] font-bold py-3 text-[#21243d] dark:text-white w-full">
              Creating pixel perfect icons in Figma
            </h1>
            <div className=" flex gap-4 py-3">
              <span className="md:text-xl  text-[14px]">25 Feb 2023</span>
              <Separator orientation="vertical" className=" mt-1 h-4" />
              <span className="md:text-xl  text-[14px]">Figma </span>
            </div>
            <p className="font-['Heebo'] md:text-[18px] text-[14px] text-[#21243d] dark:text-white md:py-3 py-1 w-full">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feauture;
