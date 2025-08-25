import React, { useState } from "react";
import { Settings, LogOut, Plus, MoreVertical, Search } from "lucide-react";
import Link from "next/link";
import { BackgroundPattern, FloatingElements } from "../Ui/background/BackgroundPattern";
import Room from "./Room/Room";


interface SidebarProps {
    onShowProfile: () => void;
    onCreateRooms: () => void;
    onEditModal: () => void;

}

const Sidebar: React.FC<SidebarProps> = ({ onShowProfile, onCreateRooms, onEditModal}) => {
    const [activeSection, setActiveSection] = useState<"rooms" | "dms">("dms");

    return (
        <aside className="bg-gray-900 min-h-screen relative flex flex-col justify-between">
            <BackgroundPattern />
            <FloatingElements />

            <div className="relative z-10 flex flex-col gap-[25px]" style={{ padding: "15px" }}>
                {/* Server Header */}
                <div
                    className="p-4 border-b w-full h-full flex items-center justify-center border-gray-700/50"
                    style={{ height: "70px" }}
                >
                    <div className="flex w-full  items-center justify-between h-full" style={{ padding: "15px" }}>
                        <h1 className="bg-gradient-to-r from-purple-500 via-orange-500 to-blue-500 bg-clip-text text-transparent font-bold text-lg">
                            Chat App
                        </h1>
                        <div className="flex  gap-[10px] space-x-2">
                            <button className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors">
                                <Plus size={16} className="text-gray-400" />
                            </button>
                            <button className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors">
                                <MoreVertical size={16} className="text-gray-400" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section Switch */}
                <div className="p-4 h-[50px] flex items-center justify-center">
                    <div className=" w-full h-[50px] flex justify-between bg-gray-800/50 rounded-lg p-1">
                        <button
                            onClick={() => setActiveSection("rooms")}
                            className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                                activeSection === "rooms"
                                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            Rooms
                        </button>

                        <button
                            onClick={() => setActiveSection("dms")}
                            className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                                activeSection === "dms"
                                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            Messages
                        </button>
                    </div>
                </div>

                {/* Search */}
                <div className="px-4 mb-4">
                    <div className="relative">
                        <Search
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 pointer-events-none"
                            size={16}
                        />
                        <input
                            type="text"
                            placeholder={`Search ${
                                activeSection === "rooms" ? "rooms" : "conversations"
                            }...`}
                            className="w-full h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg text-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                            style={{ paddingLeft: "3rem", paddingRight: "1rem" }}
                        />
                    </div>
                </div>

                {/* Rooms / Messages Section */}
                <div className="flex-1 px-4 overflow-y-auto">
                    {activeSection === "rooms" ? (
                        <div className="space-y-2 flex flex-col gap-[15px]">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
                                    Rooms
                                </h3>
                                <Plus
                                    onClick={onCreateRooms}
                                    size={16}
                                    className="text-gray-400 hover:text-white cursor-pointer"
                                />
                            </div>

                            <Room onEditModal={onEditModal}/>

                        </div>
                    ) : (
                        <div className="space-y-2 flex flex-col">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wide">
                                    Direct Messages
                                </h3>
                                <Plus size={14} className="text-gray-400 hover:text-white cursor-pointer" />
                            </div>
                            <div className="flex  flex-col items-center justify-center py-8">
                                <p className="text-gray-500 text-sm">No conversations yet</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* User Section */}
            <div className="relative z-10 p-4 w-full border-t border-gray-700/50 bg-gray-900" style={{ padding: "14px" }}>
                <div className="flex items-center gap-3 space-x-3 p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg">
                    <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">TC</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900" />
                    </div>

                    <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm">UserName</p>
                        <p className="text-green-400 text-xs">Online</p>
                    </div>

                    <div className="flex items-center gap-2.5 space-x-1">
                        <button
                            onClick={onShowProfile}
                            className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors"
                        >
                            <Settings size={16} className="text-gray-400" />
                        </button>

                        <Link href="/login">
                            <button className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-red-500/20 transition-colors">
                                <LogOut size={16} className="text-gray-400 hover:text-red-400" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;