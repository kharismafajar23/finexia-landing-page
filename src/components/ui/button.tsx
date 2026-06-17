import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size?: "sm" | "md";
  variant?: "primary" | "outline";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  // Size Classes
  const sizeClasses = {
    sm: "p-2 text-sm",
    md: "py-3 px-6 text-sm",
  };

  // Variant Classes
  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground shadow-[0_12px_30px_-12px_oklch(0.62_0.21_25/0.6)] hover:bg-primary/90",
    outline: "border border-border hover:bg-muted",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-sm hover:-translate-y-0.5 transition-all duration-200 ${className} ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};
export default Button;
