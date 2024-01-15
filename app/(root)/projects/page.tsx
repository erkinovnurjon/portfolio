import GoogleDrive from "@/components/shared/projects/google-drive";
import Matras from "@/components/shared/projects/matras";
import Movie from "@/components/shared/projects/movie";
import NajotTalim from "@/components/shared/projects/najot-talim";
import Netflix from "@/components/shared/projects/netflix";
import Boomshop from "@/components/shared/projects/boom-shop";
import Robot from "@/components/shared/projects/robo";
import Shop from "@/components/shared/projects/shop";
import Youtube from "@/components/shared/projects/tube";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  return (
    <div className="container mx-auto pt-16 md:pt-24">
      <h1 className="text-3xl md:text-5xl font-bold">Projects</h1>
      <div>
        <Tabs defaultValue="fullstack" className="w-full my-4 md:my-12">
          <TabsList className=" md:w-[500px] w-full flex gap-0 md:gap-7">
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="next">NextJs</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
            <TabsTrigger value="node">NodeJs</TabsTrigger>
          </TabsList>
          <TabsContent value="fullstack" className=" w-full ">
            <GoogleDrive />
            <Netflix />
          </TabsContent>
          <TabsContent value="react" className=" w-full">
            <div>
              <Matras />
              <NajotTalim />
            </div>
          </TabsContent>
          <TabsContent value="next" className=" w-full">
            <div>
              <Shop />
              <Robot />
            </div>
          </TabsContent>
          <TabsContent value="vue" className=" w-full">
            <div>
              <Youtube />
              <Movie />
            </div>
          </TabsContent>
          <TabsContent value="node" className=" w-full">
            <div>
              <Boomshop />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
