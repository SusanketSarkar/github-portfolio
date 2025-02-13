"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useSkillFilter } from "@/context/SkillFilterContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillVariants } from "@/app/constants/colors";
import { projects } from "@/app/constants/projects";

type Project = {
    title: string;
    description: string;
    link: string;
    tech: string[];
};

export const Projects = () => {
    const { selectedSkill } = useSkillFilter(); 
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = selectedSkill
        ? projects.filter((p) => p.tech.includes(selectedSkill))
        : projects;

    return (
        <>
            <br />
            <h2 className="text-xl font-bold mb-6 ml-4 text-black dark:text-white">
                Projects
            </h2>
            <div className="grid grid-cols-1 gap-4 mb-6">
                {filteredProjects.map((p, i) => (
                    <Card key={i} className="border-2 rounded-lg p-1 shadow-md border-dashed">
                        <CardContent className="pt-4 h-full flex flex-col">
                            <h3 className="font-semibold text-primary text-lg">{p.title}</h3>
                            <p className="text-sm text-muted-foreground mt-2 mb-4">
                                {p.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {p.tech.map((tech, index) => (
                                    <Badge
                                        key={index}
                                        skill={tech}
                                        className={`${skillVariants[tech] || skillVariants["default"]}`}
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                            <div className="mt-auto flex justify-end">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button
                                                className="text-black bg-gray-100 hover:bg-blue-600 hover:text-gray-100 px-4 py-2 mt-3 mb-2 rounded-lg font-semibold shadow-md transition-all duration-300"
                                            onClick={() => setSelectedProject(p)}
                                        >
                                            Take a look
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-3xl">
                                        <DialogHeader>
                                            <DialogTitle>{selectedProject?.title}</DialogTitle>
                                        </DialogHeader>
                                        <div className="flex justify-center">
                                            <iframe
                                                src={selectedProject?.link}
                                                className="w-full h-[600px] object-contain"
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
};