import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// TODO: Update skills
const skills = ["Python", "SQL", "R", "C/C++", "Numpy", "Pandas", "AWS", "GIT", "Docker", "Pytorch", "TensorFlow", "Keras", "PowerBI", "Tableau", "GIS"]

export const Skills = () => {
    // Define a mapping of skills to color variants
    const skillVariants: { [key: string]: string } = {
        "Python": "bg-blue-500 text-white",
        "SQL": "bg-yellow-900 text-white",
        "AWS": "bg-orange-500 text-white",
        "TensorFlow": "bg-red-500 text-white",
        "Pytorch": "bg-gray-800 text-white",
        "PowerBI": "bg-blue-400 text-white",
        "Tableau": "bg-green-600 text-white",
        "GIS": "bg-green-400 text-white",
        "GIT": "bg-red-400 text-white",
        "Docker": "bg-blue-300 text-white",
        "Numpy": "bg-gray-800 text-white",
        "Pandas": "bg-gray-800 text-white",
        "Keras": "bg-red-300 text-white",
        "R": "bg-green-900 text-white",
        "C/C++": "bg-blue-300 text-white",
        // Default color for other skills
        "default": "bg-gray-300 text-black"
    };

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