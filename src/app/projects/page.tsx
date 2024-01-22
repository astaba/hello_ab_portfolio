"use client";
import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/components/Work";
import { TableIcon } from "lucide-react";

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  // console.log({ categories });
  const [category, setCategory] = useState("all projects");
  // console.log(category);

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? true
      : project.category === category;
  });
	// console.log(filteredProjects);

  return (
    <section className="min-h-screen pt-12">
      <div className="container">
        <h2 className="section-title mx-auto text-center mb-8 xl:mb-16">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="pb-24 xl:pb-48">
          <TabsList className="size-full mb-12 mx-auto grid dark:border-none md:border md:grid-cols-4 lg:max-w-[640px]">
            {categories.map((category, i) => (
              <TabsTrigger
                key={i}
                value={category}
                className="capitalize w-[162px]"
                onClick={() => setCategory(category)}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
					<div className="text-lg grid grid-cols-1 gap-4 lg:grid-cols-3 xl:mt-8">
						{filteredProjects.map((project, i) => (
							<TabsContent value={category} key={i}>
								<ProjectCard project={project}/>
							</TabsContent>
						))}
					</div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
