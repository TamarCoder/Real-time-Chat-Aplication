import React from "react";

interface ProfileFieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
  isEditing: boolean;
  type?: "text" | "email" | "select" | "textarea";
  options?: string[];
  placeholder?: string;
  iconBgColor?: string;
  focusColor?: string;
}

/**
 * მრავალფუნქციური პროფილის ველის კომპონენტი
 * შეიძლება გამოყენებულ იქნას text, email, select ან textarea ველებისთვის
 */
const ProfileField: React.FC<ProfileFieldProps> = ({
  icon,
  label,
  value,
  onChange,
  isEditing,
  type = "text",
  options,
  placeholder,
  iconBgColor = "bg-purple-600/20",
  focusColor = "focus:ring-purple-500"
}) => {
 
  const renderInput = () => {
    const baseInputClasses = `w-full p-2 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-200 ${focusColor} focus:border-transparent text-sm`;
    if (!isEditing) {
      return (
        <p className="text-gray-200 text-sm sm:text-base truncate">
          {value || "Not specified"}
        </p>
      );
    }

    switch (type) {
      case "select":
        return (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseInputClasses} h-[45px]`}
          >
            {options?.map(option => (
              <option key={option} value={option}>
                {option || "Not specified"}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseInputClasses} resize-none`}
            rows={4}
            placeholder={placeholder}
          />
        );

      default:
        return (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseInputClasses} h-[45px]`}
            placeholder={placeholder}
          />
        );
    }
  };

  return (
    <div className="flex items-center gap-3 sm:gap-4 h-[60px]">
      {/* Icon */}
      <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 ${iconBgColor} rounded-full flex-shrink-0`}>
        {icon}
      </div>
      
      {/* Field Content */}
      <div className="flex-1 min-w-0">
        <label className="block text-xs sm:text-sm font-medium text-purple-300 mb-1">
          {label}
        </label>
        {renderInput()}
      </div>
    </div>
  );
};

export default ProfileField;