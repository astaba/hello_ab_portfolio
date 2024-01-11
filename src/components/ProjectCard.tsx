import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Link2Icon } from "lucide-react";

import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import type { Project } from "./Work";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  console.log(project);
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] bg-tertiary flex justify-center items-center overflow-hidden dark:bg-secondary/40 xl:bg-project-bg-light xl:dark:bg-project-bg-dark xl:bg-[110%] xl:bg-no-repeat">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={257}
            height={250}
            alt=""
            priority
          />
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="bg-secondary size-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary size-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
