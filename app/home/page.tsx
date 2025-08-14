"use client"
import React from "react";
import { Aside } from "../components/Aside/Aside";
import { MainContent } from "../components/Main/MainContent";
 
 

 
 
export default function Home() {
  return (
    <div className="min-h-screen flex">
      {/* Aside - visible on all screens, but only component on mobile */}
      <div className="w-full md:w-80 lg:w-75">
        <Aside />
      </div>
      
      {/* Main Content - hidden on mobile (md:block means visible from medium screens up) */}
      <div className="hidden md:block flex-1">
        <MainContent />
      </div>
    </div>
  );
}