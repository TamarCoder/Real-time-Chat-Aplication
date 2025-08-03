// src/components/auth/AuthLayout.tsx
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="  min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Background Pattern */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating Elements (like in your reference) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small floating icons */}
        <div className="absolute top-20 left-20 w-6 h-6 text-purple-400/30">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute top-32 right-32 w-4 h-4 text-blue-400/30">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          </svg>
        </div>
        <div className="absolute bottom-40 left-40 w-5 h-5 text-orange-400/30">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative w-full  h-[800px]  max-w-[2000px]  xl:max-w-[1600px] lg:max-w-[1200px] md:max-w-[900px] sm:max-w-full pt-5  ">

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl w-full h-full flex  flex-col   justify-center">
          {/* Header */}
          <div className="text-center h-[80px] flex items-center flex-col  justify-center ">
            <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
            {subtitle && (
              <p className="text-slate-400 text-sm">{subtitle}</p>
             )}
          </div>
          
          {/* Form Content */}
          {children}
        </div>
      </div>

    </div>
  );
};

export default AuthLayout;