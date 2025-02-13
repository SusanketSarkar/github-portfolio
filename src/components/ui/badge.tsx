import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { useSkillFilter } from "@/context/SkillFilterContext";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)


export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  skill: string; // Add skill prop
}

function Badge({ className, variant, skill, ...props }: BadgeProps) {
  const { selectedSkill, setSelectedSkill } = useSkillFilter();

  const handleClick = () => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        badgeVariants({ variant }),
        selectedSkill === skill ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700",
        "cursor-pointer transition duration-200",
        className
      )}
      {...props}
    >
      {skill}
    </div>
  );
}

export { Badge, badgeVariants };
