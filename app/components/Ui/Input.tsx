"use client";
import { ChangeEvent, useState } from "react";

//ChangeEvent -  TypeScript-ს ეუბნება, თუ რა სახის ივენთი უნდა მოვიდეს onChange ფუნქციაში.

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
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
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};


export default Input