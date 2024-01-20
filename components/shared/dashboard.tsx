import Image from "next/image";
import Github from "@/public/dashboards/github.png";
import Dashboardd from "@/public/dashboards/dashboard.png";
import Netlify from "@/public/dashboards/netlify.png";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className=" container mx-auto my-6">
      <div>
        <h1 className="text-xl font-['Heebo'] leading-[60px] text-[#21243d] dark:text-slate-500">
          Featured works
        </h1>
        <div className=" flex flex-col md:flex-row md:my-8 my-2 justify-center md:justify-start md:gap-12">
          <Image
            src={Github}
            alt="Rectangle"
            className=" w-full md:w-[400px]"
            width={400}
            height={300}
          />

          <div>
            <h1 className="text-3xl font-['Heebo'] text-center md:text-start font-bold text-[#21243d] dark:text-white/70 py-5 ">
              <Link href={"https://github.com/erkinovnurjon"}>
                Github Profile
              </Link>
            </h1>
            <div className=" flex gap-5 justify-center md:justify-start py-2">
              <div className="bg-[#142850] flex items-center justify-center w-16 h-8  rounded-lg">
                <span className="text-lg font-['Heebo'] font-black leading-[60px] text-white ">
                  2023
                </span>
              </div>
              <span className="text-xl font-['Heebo'] text-[#8695a4] dark:text-white/70 ">
                <Link href={"https://github.com/erkinovnurjon"}>Profile</Link>
              </span>
            </div>
            <p className="font-['Heebo'] text-[#21243d] dark:text-white/70 w-full text-center md:text-start md:w-2/3 py-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        
        <div className=" flex flex-col md:flex-row md:my-8 my-2 justify-center md:justify-start md:gap-12">
          <Image
            src={Netlify}
            alt="Rectangle"
            className=" w-full md:w-[400px] rounded"
            width={400}
            height={200}
          />

          {/* <div>
            <h1 className="text-3xl font-['Heebo'] text-center md:text-start font-bold text-[#21243d] dark:text-white/70 py-5 ">
              <Link
                href={"https://app.netlify.com/teams/nurjonerkinov7/overview"}
              >
                Netlify
              </Link>
            </h1>
            <div className=" flex gap-5 justify-center md:justify-start py-2">
              <div className="bg-[#142850] flex items-center justify-center w-16 h-8  rounded-lg">
                <span className="text-lg font-['Heebo'] font-black leading-[60px] text-white ">
                  2023
                </span>
              </div>
              <span className="text-xl font-['Heebo'] text-[#8695a4] dark:text-white/70 ">
                Sites
              </span>
            </div>
            <p className="font-['Heebo'] text-[#21243d] dark:text-white/70 w-full text-center md:text-start md:w-2/3 py-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
