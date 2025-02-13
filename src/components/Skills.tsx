"use client"

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { skillVariants } from "@/app/constants/colors";
import { Badge } from "@/components/ui/badge";

const skills = ["Python", "SQL", "R", "C/C++", "Numpy", "Pandas", "AWS", "GIT", "Docker", "Pytorch", "TensorFlow", "Keras", "PowerBI", "Tableau", "GIS"]

export const Skills = () => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge 
                            key={i} 
                            skill = {s}
                            className={`${skillVariants[s] || skillVariants["default"]}`}
                        >
                            {s}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};