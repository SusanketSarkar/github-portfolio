import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { useSkillFilter } from "@/context/SkillFilterContext";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
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

  const isSelected = selectedSkill === skill;

  return (
    <div
      onClick={handleClick}
      className={cn(
        badgeVariants({ variant }),
        isSelected 
          ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white scale-110 shadow-lg ring-4 ring-opacity-50 ring-blue-300" 
          : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105",
        "cursor-pointer transition-all duration-300 ease-in-out transform",
        className
      )}
      {...props}
    >
      {skill}
    </div>
  );
}

export { Badge, badgeVariants };
