import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus nemo nam doloremque ut molestias quidem.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Develompent",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus nemo nam doloremque ut molestias quidem.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus nemo nam doloremque ut molestias quidem.",
  },
];

const Services = () => {
  return (
    <section className="bordo border-[chartreuse] mb-12 xl:mb-36">
			<div className="outo outline-[fuchsia] container">
				<h2 className="section-title mx-auto mb-12 text-center xl:mb-24">My Services</h2>
				<div className="grid justify-center gap-y-12 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-24">
					{servicesData.map((item, i) => {
						return (
							<Card key={i} className="w-full max-w-[424px] h-[300px] flex flex-col pt-6 pb-10 justify-center items-center relative" >
								<CardHeader className="text-primary absolute -top-[60px]" >
									<div className="w-[140px] h-[80px] rounded-md bg-white flex justify-center items-center dark:bg-background" >
										{item.icon}
									</div>
								</CardHeader>
								<CardContent className="text-center">
									<CardTitle className="mb-4">{item.title}</CardTitle>
									<CardDescription className="text-lg">{item.description}</CardDescription>
								</CardContent>
							</Card>
						)
					})}
				</div>
			</div>
    </section>
  );
};

export default Services;
