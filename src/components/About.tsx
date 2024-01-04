import Image from "next/image";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DevImg from "./DevImg";
type QlfyEducData = {
  university: string;
  qualification: string;
  years: string;
};
type QlfyExpeData = {
  company: string;
  role: string;
  years: string;
};
type QlfyData = QlfyEducData | QlfyExpeData;
type QualificationData = {
  title: string;
  data: QlfyData[];
}[];
type SkillData = {
  title: string;
  data: {
    name?: string;
    imgStaticPath?: string;
  }[];
}[];
type GetDataArr = QualificationData | SkillData;
type GetDataString = "education" | "experience" | "skills" | "tools";

const infoData = [
  { icon: <User2 size={20} />, text: "Astar Bahouidi" },
  { icon: <PhoneCall size={20} />, text: "+012 345 6789" },
  { icon: <MailIcon size={20} />, text: "youremail@email" },
  { icon: <Calendar size={20} />, text: "Born on Nov 31, 1979" },
  { icon: <GraduationCap size={20} />, text: "Bachelor on Computer Science" },
  { icon: <HomeIcon size={20} />, text: "34 Brief Avenue" },
];
const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Example University",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        university: "Another University",
        qualification: "Master of Arts",
        years: "2019 - 2021",
      },
      {
        university: "Honoris University",
        qualification: "Ph.D in Computer Science",
        years: "2023 - 2028",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "ABC Design",
        role: "Software Engineer",
        years: "2021 - 2023",
      },
      {
        company: "XYZ inc.",
        role: "Senior Developer",
        years: "2023 - 2027",
      },
      {
        company: "Alpha-Arts corporation",
        role: "Lead Developer",
        years: "2028 - Present",
      },
    ],
  },
];
const skillData = [
  {
    title: "skills",
    data: [
      { name: "HTML, CSS" },
      { name: "Front-end Development" },
      { name: "Javascript, PHP" },
      { name: "Back-end Development" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgStaticPath: "/about/vscode.svg" },
      { imgStaticPath: "/about/figma.svg" },
      { imgStaticPath: "/about/notion.svg" },
      { imgStaticPath: "/about/wordpress.svg" },
    ],
  },
];

const About = () => {
  const getData = (arr: GetDataArr, title: GetDataString) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="bordo border-[chartreuse] pb-12 xl:h-[860px] xl:py-24">
      <div className="outo outline-[fuchsia] container">
        <h2 className="outo outline-yellow-500 about-title mb-8 mx-auto xl:mb-16">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="relative flex-1 hidden xl:flex">
            <DevImg
              devImgStyles={{
                wrapper:
                  "relative size-[505px] bg-about-shape-light bg-no-repeat dark:bg-about-shape-dark",
                imgSrc: "/about/developer.png",
              }}
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal" className="bordo border-lime-600">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Presonal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched service quality for over ten years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I spacialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experience.
                    </p>
                    <div className="grid gap-4 mb-12 xl:grid-cols-2">
                      {infoData.map((item, i) => (
                        <div
                          key={i}
                          className="flex gap-x-4 items-center mx-auto xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <hr />
                      <div>English, French, Spanish, 日本語(Japanese)</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 text-center mb-8 xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid gap-y-8 md:grid-cols-2">
                      <div> {/** instead of flex flex-col gap-y-6 put mb-6 on first child */}
                        <div className="mb-6 flex items-center gap-x-4 text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience")?.data.map(
                            (item, i) => {
                              const { company, role, years } = item as QlfyExpeData;
                              return (
                                <div className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] ml-2 bg-border relative">
                                    <div className="size-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                                  </div>
                                  <div>
                                    <div className="font-semibold leading-none text-xl mb-2">{company}</div>
                                    <div className="leading-none text-lg mb-4 text-muted-foreground">{role}</div>
                                    <div className="text-base font-medium">{years}</div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div> {/** instead of flex flex-col gap-y-6 put mb-6 on first child */}
                        <div className="mb-6 flex items-center gap-x-4 text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education")?.data.map(
                            (item, i) => {
                              const { university, qualification, years } = item as QlfyEducData;
                              return (
                                <div className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] ml-2 bg-border relative">
                                    <div className="size-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                                  </div>
                                  <div>
                                    <div className="font-semibold leading-none text-xl mb-2">{university}</div>
                                    <div className="leading-none text-lg mb-4 text-muted-foreground">{qualification}</div>
                                    <div className="text-base font-medium">{years}</div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8 capitalize">What I use everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <hr className="mb-4" />
                      <div>
                        {getData(skillData, "skills")?.data.map((item, i) => {
                          const { name } = item as { name: string };
                          return (
                            <div key={i} className="mx-auto w-1/2 text-center xl:text-left xl:mx-0">
                              <div className="font-medium">{name}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Tools</h4>
                      <hr className="mb-4" />
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools")?.data.map((item, i) => {
                          const { imgStaticPath } = item as { imgStaticPath: string };
                          return (
                            <div key={i}>
                              <Image src={imgStaticPath} width={48} height={48} alt="" priority />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
