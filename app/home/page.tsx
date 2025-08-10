import React from "react";
import ChatAppLogo from "..//components//Ui/ChatAppLogo";
import { Aside } from "../components/Auth/aside/Aside";
import { ChatMenu } from "../components/Auth/aside/ChatMenu";
import { Navigation } from "../components/Auth/navigation/Navigation";
import { HomeContant } from "../components/Auth/homeContent/HomeContent";
import { UserPopup } from "../components/Auth/aside/UserPopap";
 
 
 

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
  </div>
);

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-20 w-6 h-6 text-purple-400/30">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>

    <div className="absolute top-32 right-32 w-4 h-4 text-blue-400/30">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    </div>

    <div className="absolute bottom-40 left-40 w-5 h-5 text-orange-400/30">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>

    <div className="absolute top-1/3 left-10 w-3 h-3 text-pink-400/25">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    </div>

    <div className="absolute top-1/4 right-20 w-4 h-4 text-cyan-400/25">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>

    <div className="absolute bottom-32 right-16 w-3 h-3 text-emerald-400/30">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    </div>

    <div className="absolute top-2/3 left-16 w-5 h-5 text-yellow-400/25">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>

    <div className="absolute bottom-20 left-1/3 w-2 h-2 text-indigo-400/30">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    </div>

    <div className="absolute top-16 right-1/4 w-3 h-3 text-rose-400/25">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>

    <div className="absolute bottom-1/4 right-2/3 w-4 h-4 text-violet-400/30">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    </div>
  </div>
);

const InnerFloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-8 w-2 h-2 text-purple-300/20">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>
    
    <div className="absolute top-20 right-12 w-3 h-3 text-blue-300/25">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    </div>
    
    <div className="absolute bottom-16 left-6 w-2 h-2 text-emerald-300/20">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    </div>

    <div className="absolute top-1/3 right-8 w-2 h-2 text-pink-300/25">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>

    <div className="absolute bottom-1/4 right-20 w-3 h-3 text-orange-300/20">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>

    <div className="absolute top-2/3 left-12 w-2 h-2 text-cyan-300/25">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    </div>

    <div className="absolute bottom-8 left-1/3 w-2 h-2 text-yellow-300/20">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    </div>

    <div className="absolute top-16 left-1/4 w-2 h-2 text-indigo-300/25">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>
  </div>
);

const getCardClasses = () => `
   bg-slate-800/50   border border-slate-700/50  h-[850px] 
  rounded-2xl shadow-2xl w-full 
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

export default function home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-8">
      <BackgroundPattern />
      <FloatingElements />

         
      <div className={getCardClasses()}>
        <div className={getCardClasses()}>
          <div className="p-8 flex relative">
            {/* ესაიდი -  ოთხაების გადასართავი */}

            <UserPopup/>


            <Aside/>
            <ChatMenu/>
          
            <div className="flex-1 flex-col ">
              <Navigation/>
              <HomeContant/>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
