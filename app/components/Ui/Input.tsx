"use client";
import { ChangeEvent, useState } from "react";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  icon?: React.ReactNode;
  autoComplete?: string;
   terms?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
  disabled = false,
  required = false,
  terms = false,
  className = "",
  icon,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-slate-300 mb-2">
          {label} {required && <span className="text-purple-400">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3 h-[40px]
            ${icon ? "pl-10" : "pl-4"}
            bg-slate-800/50 
            border border-slate-600 
            rounded-lg 
            text-white 
            placeholder-slate-400
            backdrop-blur-sm
            transition-all duration-200
            focus:outline-none 
            focus:ring-2 
            focus:ring-purple-500 
            focus:border-purple-500
            hover:border-slate-500
            disabled:bg-slate-800/30 
            disabled:cursor-not-allowed
            ${error ? "border-red-500 focus:ring-red-500" : ""}
            ${isFocused ? "shadow-lg shadow-purple-500/10" : ""}
          `}
        />

        {error && (
          <div className="absolute -top-1 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded shadow-lg z-10">
            {error}
            <div className="absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 border-4 border-transparent border-t-red-500"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
