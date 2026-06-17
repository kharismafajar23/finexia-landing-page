import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "text-3xl font-extrabold leading-tight md:text-4xl text-slate-700 mt-3 mb-11",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
