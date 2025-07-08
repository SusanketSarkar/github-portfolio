"use client"

import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { JobImages } from "@/components/JobImages";
import { skillVariants } from "@/app/constants/colors";
import { Badge } from "@/components/ui/badge";
import { jobs } from "@/app/constants/jobs";
import { useSkillFilter } from "@/context/SkillFilterContext"; // Import skill filter

export const Experience = () => {
    const { selectedSkill } = useSkillFilter(); // Get the selected skill

    return (
        <>
            <br />
            <h2 className="text-xl font-bold mb-4 ml-6 text-black dark:text-white">
                Work Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-6">
                {jobs.map((j, i) => {
                    const isRelevant = selectedSkill ? j.skills.includes(selectedSkill) : true;
                    
                    return (
                        <Card 
                            key={`${j.company}-${j.role}`}
                            className={`overflow-hidden theme-transition-none ${
                                isRelevant 
                                    ? 'opacity-100 translate-y-0 scale-100' 
                                    : 'opacity-0 -translate-y-4 scale-95 max-h-0 mb-0'
                            }`}
                            style={{
                                transitionProperty: 'transform, opacity, max-height, margin-bottom',
                                transitionDuration: '0.5s, 0.5s, 0.5s, 0.5s',
                                transitionTimingFunction: 'ease-in-out',
                                transitionDelay: `${i * 50}ms`,
                                maxHeight: isRelevant ? '1000px' : '0px',
                                marginBottom: isRelevant ? '16px' : '0px'
                            }}
                        >
                            <CardContent className="pt-6 h-full">
                                <div className="flex flex-col h-full">
                                    {/* Job Details */}
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src={j.logo}
                                            alt={j.company}
                                            width={40}
                                            height={40}
                                            className="rounded-md border shadow-md object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold">{j.role}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {j.company}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Duration */}
                                    <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                        <CalendarDays className="size-3 mr-2" />
                                        {j.duration}
                                    </p>

                                    {/* Job Description */}
                                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                        {j.description.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>

                                    {/* Skills Section */}
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {j.skills.map((skill, index) => (
                                            <Badge
                                                key={index}
                                                skill={skill} // Pass skill to the Badge component
                                                className={`${skillVariants[skill] || skillVariants["default"]}`}
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Job Images */}
                                    <JobImages
                                        role={j.role}
                                        link={j.link}
                                        images={j.images}
                                        duration={j.duration}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </>
    );
};