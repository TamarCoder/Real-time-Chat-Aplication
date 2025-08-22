import React from "react";
import ChatAppLogo from "../Ui/ChatAppLogo";
import { BackgroundPattern, FloatingElements, InnerFloatingElements } from "../Ui/background/BackgroundPattern";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  isRegistrationPage?: boolean;
}

const AuthHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center flex items-center flex-col justify-center">
    <ChatAppLogo
      centered={true}
      width={400}
      height={120}
      className="mb-4 transform translate-x-4 "
    />
    <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
    {subtitle && <p className="text-slate-400 text-sm">{subtitle}</p>}
  </div>
);

const getContainerClasses = (isRegistrationPage = false) => `
  relative w-full  
  ${isRegistrationPage 
    ? 'min-h-auto h-auto' 
    : 'min-h-auto'
  }
  max-w-[450px]
  xs:max-w-[550px]
  sm:max-w-[650px]
  md:max-w-[750px]
  lg:max-w-[950px]
  xl:max-w-[1150px]
  2xl:max-w-[1350px]
  3xl:max-w-[1550px]
  4xl:max-w-[1750px]
  5xl:max-w-[2000px]
  mx-auto
`;

const getCardClasses = (isRegistrationPage = false) => `
  bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 
  rounded-2xl shadow-2xl w-full 
  ${isRegistrationPage ? 'h-auto' : 'h-full'}
  flex flex-col justify-center
  mx-4 my-3
  xs:mx-6 xs:my-4
  sm:mx-8 sm:my-5
  md:mx-10 md:my-6
  lg:mx-12 lg:my-7
  xl:mx-16 xl:my-8
  2xl:mx-20 2xl:my-10
  3xl:mx-24 3xl:my-12
  4xl:mx-28 4xl:my-14
  5xl:mx-32 5xl:my-16
`;

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle, isRegistrationPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-8">
      <BackgroundPattern />
      <FloatingElements />
      
      <div className={getContainerClasses(isRegistrationPage)}>
        <div className={getCardClasses(isRegistrationPage)}>
          <div className="p-8">
            <InnerFloatingElements />
            <AuthHeader title={title} subtitle={subtitle} />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;