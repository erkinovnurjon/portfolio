import GoogleDrive from "@/components/shared/projects/google-drive"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"




const Projects = () => {
  return (
    <div className='container mx-auto my-4 md:my-12'>
         <h1 className='text-3xl md:text-5xl font-bold'>Projects</h1>
         <div>
        <Tabs defaultValue="fullstack" className="w-full my-4 md:my-12">
          <TabsList className=" md:w-[500px] w-full flex gap-0 md:gap-7">
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="next">NextJs</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
            <TabsTrigger value="Node">NodeJs</TabsTrigger>
          </TabsList>
          <TabsContent value="fullstack" className=" w-full ">
            <GoogleDrive />
          </TabsContent>
          <TabsContent value="react">
            <div>

            </div>
          </TabsContent>
        </Tabs>
         </div>
    </div>
  )
}

export default Projects

