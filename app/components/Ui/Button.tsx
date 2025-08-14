import React, { ReactNode, MouseEventHandler } from 'react';
import LoadingSpinner from './LoadingSpinner';
 

type ButtonVariant = "primary" | "secondary" | "outline" | "tertiary";
type ButtonSize = "sm" | "md" | "lg";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  children?: ReactNode;
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button = ({ 
  children,
  type = "button", 
  variant = "primary", 
  size = "md", 
  isLoading = false, 
  disabled = false, 
  onClick,
  className = ""
}: ButtonProps) => {
  const baseClasses = "font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm";
  
  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white disabled:bg-purple-400 shadow-lg hover:shadow-purple-500/25",
    secondary: "bg-slate-700 hover:bg-slate-600 text-white disabled:bg-slate-500 border border-slate-600",
    outline: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 disabled:border-purple-300",
    tertiary:" border-2 border-gray-500 text-gray-400  bg-gray-900 border border-gray-700   hover:bg-gray-500/10 disabled:border-gray-300"
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {isLoading && <LoadingSpinner size="sm" />}
      {children}
    </button>
  );
};

export default Button;