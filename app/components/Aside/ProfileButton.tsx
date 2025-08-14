"use client";
import React, { useState } from "react";
import { LogOut, Settings } from "lucide-react";
import Button from "../Ui/Button";

const ProfileButton = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleContainerClick = () => {
    console.log("Container clicked!");
  };

  return (
    <div className="bg-gray-800 p-4">
      <div
        className="bg-gray-700 w-[100%] h-[60px] rounded-lg px-3 flex items-center gap-3 max-w-xs hover:bg-gray-600 transition-colors duration-150"
        style={{ padding: "15px" }}
      >
        {/* პროფილის ფოტო ონლაინის ინდიკატორით */}
        <div className="relative">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            TC
          </div>
          {/* ონლაინის მწვანე წერტილი */}
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-700  "></div>
        </div>

        {/* მომხმარებლის ინფო */}
        <div className="flex-1 min-w-0">
          <div className="text-white text-sm font-semibold truncate">
            UserName
          </div>
          <div className="text-gray-300 text-xs">Online</div>
        </div>

        {/* პარამეტრების აიქონი */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleContainerClick();
          }}
          className="p-2 flex items-center gap-[20px] cursor-pointer rounded hover:bg-gray-600"
          style={{ zIndex: 999 }}
        >
          <Settings size={25} className="text-gray-400" />
          <LogOut size={25} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default ProfileButton;
