"use client";
import React, {useState} from "react";
import MainContent from "../components/Main/Main";
import Sidebar from "../components/Aside/Sidebar";
import UserProfile from "../components/Auth/UserProfile";
import RoomsModal from "../components/Auth/RoomsModal";

export default function Home() {
    const [showProfile, setShowProfile] = useState(false);
    const [showCreateRooms, setShowCreateRooms] = useState(false);

    const handleShowProfile = () => {
        setShowProfile(true);
    };

    const handleCreateRooms = () => {
        setShowCreateRooms(true);
        console.log('მოდალი გაიხსნა ')
    };

    return (
        <div className="min-h-screen flex">
            {/* Sidebar - მარცხენა მხარე */}
            <div className="w-full md:w-80 lg:w-72">
                <Sidebar
                    onShowProfile={handleShowProfile}
                    onCreateRooms={handleCreateRooms}
                />
            </div>

            {/* Main Content Area - მარჯვენა მხარე */}
            <div className="hidden md:block flex-1 relative">
                {/* ნორმალური მთავარი კონტენტი */}
                <MainContent/>

                {/* პროფილის modal overlay */}
                {showProfile && (
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="relative bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full   overflow-auto">
                            {/* დახურვის ღილაკი */}
                            <button
                                onClick={() => setShowProfile(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>

                            {/* პროფილის კომპონენტი */}
                            <UserProfile/>
                        </div>
                    </div>
                )}

                {showCreateRooms && (
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="relative bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full   overflow-auto">
                            {/* დახურვის ღილაკი */}
                            <button
                                onClick={() => setShowCreateRooms(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>

                            {/* კომპონენტი */}
                           <RoomsModal/>
                        </div>
                    </div>
                )}



            </div>
        </div>
    );
}