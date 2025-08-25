"use client";
import React, {useState} from "react";
import MainContent from "../components/Main/Main";
import Sidebar from "../components/Aside/Sidebar";
import UserProfile from "../components/Auth/ProfileModal/UserProfile";
import RoomsModal from "../components/Auth/RoomsModal/RoomsModal";
import EditModal from "../components/Auth/EditModal/EditModal";

const getContainerClasses = () => `
  relative w-full  
  min-h-auto h-auto
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

const getModalClasses = () => `
  bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 
  rounded-2xl shadow-2xl w-full h-auto
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
  5xl:max-w-[2000px] 5xl:mx-32 5xl:my-16
`;

export default function Home() {
    const [showProfile, setShowProfile] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModal, setIsEditModal] = useState(false)

    const handleShowProfile = () => {
        setShowProfile(true);
    };

    const handleCreateRooms = () => {
        setIsModalOpen(true);
    };
    const handleEditRoom = () => {
        setIsEditModal(true)
    }


    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditModal(false)

    };

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <div className="w-full
                            flex-shrink-0
                            xs:w-full sm:w-full md:w-80 lg:w-72 xl:w-72 2xl:w-80 3xl:w-80 4xl:w-80 5xl:w-80">
                <Sidebar
                    onShowProfile={handleShowProfile}
                    onCreateRooms={handleCreateRooms}
                    onEditModal={handleEditRoom}
                />
            </div>

            {/* Main Content Area */}
            <div className="hidden md:flex flex-1 relative min-w-0
                            md:flex-1 lg:flex-1 xl:flex-1 2xl:flex-1 3xl:flex-1 4xl:flex-1 5xl:flex-1">
                <MainContent/>
            </div>

            {/* პროფილის modal */}
            {showProfile && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className={getContainerClasses()}>
                        <div className={getModalClasses()}>
                            <div className="relative">
                                <button
                                    onClick={() => setShowProfile(false)}
                                    className="absolute top-4 right-4 z-10 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors shadow-lg"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                                <UserProfile/>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Room modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className={getContainerClasses()}>
                        <div className={getModalClasses()}>
                            <div className="relative">
                                <button
                                    onClick={closeModal}
                                    className="absolute flex items-center justify-center top-4 right-4 z-10 w-[40px] h-[40px] bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors shadow-lg"
                                    style={{marginTop: '7px', marginRight: '15px'}}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>

                                <RoomsModal onClose={closeModal} />
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {isEditModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className={getContainerClasses()}>
                        <div className={getModalClasses()}>
                            <div className="relative">
                                <button
                                    onClick={closeModal}
                                    className="absolute flex items-center justify-center top-4 right-4 z-10 w-[40px] h-[40px] bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors shadow-lg"
                                    style={{marginTop: '7px', marginRight: '15px'}}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>

                                <EditModal onClose={closeModal} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}