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
    const [message, setMessage] = useState("");
    const [activeView, setActiveView] = useState("room");
    const [currentChannel, setCurrentChannel] = useState({
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
        <main className="bg-gray-800 flex-1 h-screen relative flex flex-col hidden md:flex
                       p-2 xs:p-3 sm:p-4 md:p-3 lg:p-4 xl:p-5 2xl:p-6 3xl:p-7 4xl:p-8 5xl:p-9
                       overflow-hidden">
            <BackgroundPattern />
            <FloatingElements />

            <div className="relative z-10 flex flex-col h-full min-w-0">
                {/* Header */}
                <div className="h-[60px] xs:h-[65px] sm:h-[70px] md:h-[75px] lg:h-[80px] xl:h-[85px] 2xl:h-[90px] 3xl:h-[95px] 4xl:h-[100px] 5xl:h-[105px]
                          flex items-center justify-between
                          p-2 xs:p-2.5 sm:p-3 md:p-3.5 lg:p-4 xl:p-5 2xl:p-6 3xl:p-7 4xl:p-8 5xl:p-9
                          border-b border-gray-700/50 bg-gray-800/50 backdrop-blur-sm min-w-0"
                     style={{paddingLeft:'15px', paddingRight:'15px'}}>

                    <div className="flex items-center min-w-0 flex-shrink
                            space-x-2 xs:space-x-2.5 sm:space-x-3 md:space-x-3.5 lg:space-x-4 xl:space-x-5 2xl:space-x-6 3xl:space-x-7 4xl:space-x-8 5xl:space-x-9">
                        <div className="flex items-center min-w-0
                              space-x-1.5 xs:space-x-2 sm:space-x-2 md:space-x-2 lg:space-x-2 xl:space-x-2.5 2xl:space-x-3 3xl:space-x-3.5 4xl:space-x-4 5xl:space-x-4.5">
                            <Hash size={16} className="text-gray-400 flex-shrink-0
                                          xs:w-[17px] xs:h-[17px] sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px]
                                          lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 4xl:w-9 4xl:h-9 5xl:w-10 5xl:h-10" />
                            <h1 className="text-white font-semibold truncate
                               text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl">
                                {currentChannel.name}
                            </h1>
                            {currentChannel.type === "room" && (
                                <div className="hidden lg:block w-px flex-shrink-0
                                    h-4 xs:h-5 sm:h-5 md:h-6 lg:h-6 xl:h-7 2xl:h-8 3xl:h-9 4xl:h-10 5xl:h-11 bg-gray-600" />
                            )}
                            {currentChannel.type === "room" && (
                                <p className="hidden lg:block text-gray-400 truncate
                                  text-xs xs:text-sm sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl"></p>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center flex-shrink-0
                            space-x-1.5 xs:space-x-2 sm:space-x-2.5 md:space-x-3 lg:space-x-4 xl:space-x-5 2xl:space-x-6 3xl:space-x-7 4xl:space-x-8 5xl:space-x-9
                            gap-2 xs:gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 3xl:gap-7 4xl:gap-8 5xl:gap-9">

                        <button className="w-7 h-7 xs:w-8 xs:h-8 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 3xl:w-12 3xl:h-12 4xl:w-13 4xl:h-13 5xl:w-14 5xl:h-14
                             bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors flex-shrink-0">
                            <Bell size={14} className="text-gray-400 xs:w-[15px] xs:h-[15px] sm:w-4 sm:h-4 md:w-[16px] md:h-[16px] lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9" />
                        </button>

                        <button className="w-7 h-7 xs:w-8 xs:h-8 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 3xl:w-12 3xl:h-12 4xl:w-13 4xl:h-13 5xl:w-14 5xl:h-14
                             bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors flex-shrink-0">
                            <Pin size={14} className="text-gray-400 xs:w-[15px] xs:h-[15px] sm:w-4 sm:h-4 md:w-[16px] md:h-[16px] lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9" />
                        </button>

                        <button className="w-7 h-7 xs:w-8 xs:h-8 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 3xl:w-12 3xl:h-12 4xl:w-13 4xl:h-13 5xl:w-14 5xl:h-14
                             bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors flex-shrink-0">
                            <Users size={14} className="text-gray-400 xs:w-[15px] xs:h-[15px] sm:w-4 sm:h-4 md:w-[16px] md:h-[16px] lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9" />
                        </button>

                        {/* Search - ფიქსირებული სიგანე ნაცვლად responsive */}
                        <div className="px-2 xs:px-3 sm:px-4 md:px-3 lg:px-4 xl:px-4 2xl:px-5 3xl:px-6 4xl:px-7 5xl:px-8
                              mb-2 xs:mb-3 sm:mb-4 md:mb-3 lg:mb-4 xl:mb-4 2xl:mb-5 3xl:mb-6 4xl:mb-7 5xl:mb-8
                              w-full max-w-[200px] xs:max-w-[220px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[350px] 2xl:max-w-[400px] 3xl:max-w-[450px] 4xl:max-w-[500px] 5xl:max-w-[550px]
                              min-w-[150px]">
                            <div className="relative">
                                <Search
                                    className="absolute left-3 xs:left-3.5 sm:left-4 md:left-3.5 lg:left-4 xl:left-4.5 2xl:left-5 3xl:left-5.5 4xl:left-6 5xl:left-6.5
                                 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 pointer-events-none"
                                    size={16}
                                />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full h-8 xs:h-9 sm:h-10 md:h-9 lg:h-10 xl:h-11 2xl:h-12 3xl:h-13 4xl:h-14 5xl:h-15
                                 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg
                                 text-gray-200 placeholder-gray-400
                                 text-xs xs:text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl
                                 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "1rem" }}
                                />
                            </div>
                        </div>

                        <button className="w-7 h-7 xs:w-8 xs:h-8 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 3xl:w-12 3xl:h-12 4xl:w-13 4xl:h-13 5xl:w-14 5xl:h-14
                             bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors flex-shrink-0">
                            <MoreHorizontal size={14} className="text-gray-400 xs:w-[15px] xs:h-[15px] sm:w-4 sm:h-4 md:w-[16px] md:h-[16px] lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-1 overflow-hidden min-w-0">
                    <div className="flex-1 flex flex-col min-w-0">
                        {/* Messages Area */}
                        <div className="flex-1 text-amber-50 overflow-y-auto
                              p-2 xs:p-3 sm:p-4 md:p-4 lg:p-4 xl:p-5 2xl:p-6 3xl:p-7 4xl:p-8 5xl:p-9
                              space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-4 xl:space-y-5 2xl:space-y-6 3xl:space-y-7 4xl:space-y-8 5xl:space-y-9
                              flex items-center justify-center">
                <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl">
                  messages will here
                </span>
                        </div>

                        {/* Message Input */}
                        <div className="p-2 xs:p-3 sm:p-4 md:p-4 lg:p-4 xl:p-5 2xl:p-6 3xl:p-7 4xl:p-8 5xl:p-9
                              border-t border-gray-700/50">
                            <div className="gap-2 xs:gap-2.5 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3.5 2xl:gap-4 3xl:gap-5 4xl:gap-6 5xl:gap-7
                               h-[40px] xs:h-[45px] sm:h-[50px] md:h-[50px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px] 3xl:h-[65px] 4xl:h-[70px] 5xl:h-[75px]
                               flex items-center
                               space-x-2 xs:space-x-2.5 sm:space-x-3 md:space-x-3 lg:space-x-3 xl:space-x-3.5 2xl:space-x-4 3xl:space-x-5 4xl:space-x-6 5xl:space-x-7
                               bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-600/50 min-w-0"
                                 style={{ padding: "15px" }}>

                                <button className="text-gray-400 hover:text-purple-400 transition-colors flex-shrink-0">
                                    <Paperclip size={16} className="xs:w-[17px] xs:h-[17px] sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px] lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 4xl:w-9 4xl:h-9 5xl:w-10 5xl:h-10" />
                                </button>

                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                    placeholder={`Message #${currentChannel.name}`}
                                    className="flex-1 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none min-w-0
                                 text-xs xs:text-sm sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl"
                                />

                                <button className="text-gray-400 hover:text-yellow-400 transition-colors flex-shrink-0">
                                    <Smile size={16} className="xs:w-[17px] xs:h-[17px] sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px] lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 4xl:w-9 4xl:h-9 5xl:w-10 5xl:h-10" />
                                </button>

                                <button
                                    onClick={handleSendMessage}
                                    disabled={!message.trim()}
                                    className={`p-1.5 xs:p-2 sm:p-2 md:p-2 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-3.5 4xl:p-4 5xl:p-4.5 
                                  rounded-lg transition-all flex-shrink-0 ${
                                        message.trim()
                                            ? "bg-purple-500 hover:bg-purple-600 text-white"
                                            : "bg-gray-600 text-gray-400 cursor-not-allowed"
                                    }`}
                                >
                                    <Send size={14} className="xs:w-[15px] xs:h-[15px] sm:w-4 sm:h-4 md:w-[16px] md:h-[16px] lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9" />
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