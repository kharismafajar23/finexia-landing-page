import React, { ReactNode } from "react";

interface PillProps {
  text: string;
  startIcon?: ReactNode;
}

const Pill: React.FC<PillProps> = ({ text, startIcon }) => {
  return (
    <span className="inline-flex items-center gap-2 rounded-sm bg-primary-soft px-4 py-2 text-xs font-semibold text-primary">
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      <span className="text-primary">{text}</span>
    </span>
  );
};

export default Pill;
