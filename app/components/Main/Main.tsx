import React, { useState } from "react";
import {
  Hash,
  Users,
  Settings,
  Search,
  Pin,
  Bell,
  MoreHorizontal,
  Smile,
  Paperclip,
  Send,
  Phone,
  Video,
  UserPlus,
  Volume2,
  Crown,
  Shield,
  Star,
  Reply,
  Heart,
  MessageCircle,
} from "lucide-react";
import { Channel, ChannelType, UserRole, UserStatus } from "../../types/types";
import { Actives } from "./Actives";
import UserProfile from "../Auth/UserProfile";

// Background Pattern Component
const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
  </div>
);

// Floating Elements Component
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
  </div>
);

const MainContent = () => {
  const [message, setMessage] = useState<string>("");
  const [activeView, setActiveView] = useState<ChannelType>("room");
  const [currentChannel, setCurrentChannel] = useState<Channel>({
    name: "general",
    type: "room",
  });

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage("");
    }
  };

  return (
    <main
      className="bg-gray-800 flex-1 h-screen relative flex flex-col"
      style={{ padding: "25px" }}
    >
      <BackgroundPattern />
      <FloatingElements />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-700/50 bg-gray-800/50 backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Hash size={20} className="text-gray-400" />
              <h1 className="text-white font-semibold text-lg">
                {currentChannel.name}
              </h1>
              {currentChannel.type === "room" && (
                <div className="hidden md:block w-px h-6 bg-gray-600" />
              )}
              {currentChannel.type === "room" && (
                <p className="hidden md:block text-gray-400 text-sm"></p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2 gap-[20px]">
            <button className="w-9 h-9 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors">
              <Bell size={16} className="text-gray-400" />
            </button>
            <button className="w-9 h-9 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors">
              <Pin size={16} className="text-gray-400" />
            </button>
            <button className="w-9 h-9 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors">
              <Users size={16} className="text-gray-400" />
            </button>

            {/* Search */}
            <div className="px-4 mb-4 w-[450px]">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 pointer-events-none"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                  style={{ paddingLeft: "3rem", paddingRight: "1rem" }}
                />
              </div>
            </div>

            <button className="w-9 h-9 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors">
              <MoreHorizontal size={16} className="text-gray-400" />
            </button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 flex flex-col">
            <div className="flex-1 text-amber-50 overflow-y-auto p-4 space-y-4  flex items-center justify-center">
              messages will here

               
            </div>

            <div className="p-4 border-t border-gray-700/50">
              <div
                className="  gap-3 h-[50px] flex items-center space-x-3 p-3 bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-600/50"
                style={{ padding: "15px" }}
              >
                <button className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Paperclip size={20} />
                </button>

                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder={`Message #${currentChannel.name}`}
                  className="flex-1 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none"
                />

                <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Smile size={20} />
                </button>

                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className={`p-2 rounded-lg transition-all ${
                    message.trim()
                      ? "bg-purple-500 hover:bg-purple-600 text-white"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
             
          </div>

          <Actives/>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
