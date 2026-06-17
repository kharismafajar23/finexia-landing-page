import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionDescriptionProps {
  children: ReactNode;
  className?: string;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={cn("text-muted-foreground text-sm sm:text-base/6", className)}
    >
      {children}
    </p>
  );
};

export default SectionDescription;
