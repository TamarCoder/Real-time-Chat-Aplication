import React, { ChangeEvent, forwardRef } from "react";

interface FormInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  icon?: React.ReactNode;
  name?: string;
  autoComplete?: string;

  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    error,
    autoComplete,
    required = false,
    icon,
    name,
    onBlur,
    ...props
  }, ref) => {
    return (
      <div className="mb-6 flex flex-col justify-center items-center">
        <div className="w-[70%] flex flex-col justify-center">
          <label
            htmlFor={name}
            className="flex text-sm h-[50px] items-center font-medium text-slate-300 mb-2"
          >
            {label}
            {required && <span className="text-purple-400 ml-1">*</span>}
          </label>
          <div className="relative flex items-center">
            {icon && (
              <div className="absolute left-4 z-20 flex items-center justify-center text-slate-400 pointer-events-none">
                <div className="w-5 h-5">
                  {icon}
                </div>
              </div>
            )}
            <input
              ref={ref}
              id={name}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              required={required}
              autoComplete={autoComplete}
              style={{
                paddingLeft: icon ? '48px' : '16px',
                paddingRight: '16px'
              }}
              className={`
                w-full h-[56px] py-3.5
                bg-slate-800/60 
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
                text-base
                ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
              `}
              {...props}
            />
          </div>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-400 flex items-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
  }
);

FormInput.displayName = "FormInput";
export default FormInput;