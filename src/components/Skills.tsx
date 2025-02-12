import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// TODO: Update skills
const skills = ["Python", "SQL", "R", "C/C++", "Numpy", "Pandas", "AWS", "EC2", "S3", "Sagemaker", "GIT", "Docker", "Pytorch", "TensorFlow", "Keras", "PowerBI", "Tableau", "GIS"]

export const Skills = () => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge key={i} variant="secondary">{s}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}