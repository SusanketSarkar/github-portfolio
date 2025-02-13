"use client";

import Link from "next/link";
import { useSkillFilter } from "@/context/SkillFilterContext"; // Import filter context
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillVariants } from "@/app/constants/colors";
import { projects } from "@/app/constants/projects";

export const Projects = () => {
    const { selectedSkill } = useSkillFilter(); 

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
                            <Link href={p.link} className="font-semibold text-primary hover:underline text-lg">
                                {p.title}
                            </Link>
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
                                <Link href={p.link} className="text-sm px-3 py-1 mt-3 mb-2 border rounded-lg hover:bg-muted">
                                    Take a look
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
};