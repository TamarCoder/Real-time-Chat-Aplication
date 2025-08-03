



export default function LoadingSpinner({ size = "md" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8",
  };

  return (
    <div
      className={`animate-spin rounded-full border-2 border-slate-600 border-t-purple-500 ${sizeClasses[size as keyof typeof sizeClasses]}`}
    ></div>
  );
}