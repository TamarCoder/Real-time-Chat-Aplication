import React, { useState } from 'react';
import { X, Globe, Lock } from 'lucide-react';

export default function CreateRoomModal() {
    const [isOpen, setIsOpen] = useState(true);
    const [roomName, setRoomName] = useState('');
    const [description, setDescription] = useState('');
    const [privacy, setPrivacy] = useState('public');
    const [isCreating, setIsCreating] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async () => {
        if (!roomName.trim()) return;

        setIsCreating(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Room created:', {
                name: roomName,
                description,
                privacy,
                createdAt: new Date().toISOString()
            });

            setIsSuccess(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 1500);
        }, 1000);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-700 rounded-2xl w-full max-w-md mx-auto shadow-2xl transform transition-all duration-300 scale-100 opacity-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-t-2xl relative">
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200 hover:scale-110"
                    >
                        <X size={20} />
                    </button>
                    <h2 className="text-2xl font-semibold text-white mb-2">Create New Room</h2>
                    <p className="text-blue-100 text-sm">Create a new chat room and invite friends</p>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                    {/* Room Name */}
                    <div>
                        <label htmlFor="roomName" className="block text-sm font-medium text-gray-200 mb-2">
                            Room Name *
                        </label>
                        <input
                            type="text"
                            id="roomName"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                            placeholder="e.g. Work Team, Friends Chat..."
                            className="w-full px-4 py-3 bg-slate-600 border-2 border-slate-500 rounded-xl text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-300 focus:-translate-y-0.5 focus:shadow-lg"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-200 mb-2">
                            Description (Optional)
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="What will this room be used for..."
                            rows={3}
                            className="w-full px-4 py-3 bg-slate-600 border-2 border-slate-500 rounded-xl text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-300 focus:-translate-y-0.5 focus:shadow-lg resize-none"
                        />
                    </div>

                    {/* Privacy Settings */}
                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-3">Privacy</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setPrivacy('public')}
                                className={`p-4 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                                    privacy === 'public'
                                        ? 'border-blue-500 bg-blue-500/10'
                                        : 'border-slate-500 bg-slate-600 hover:border-blue-500'
                                }`}
                            >
                                <Globe className="mx-auto mb-2 text-gray-300" size={24} />
                                <div className="text-sm font-medium text-gray-200">Public</div>
                                <div className="text-xs text-gray-400 mt-1">Anyone can join</div>
                            </button>

                            <button
                                type="button"
                                onClick={() => setPrivacy('private')}
                                className={`p-4 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                                    privacy === 'private'
                                        ? 'border-blue-500 bg-blue-500/10'
                                        : 'border-slate-500 bg-slate-600 hover:border-blue-500'
                                }`}
                            >
                                <Lock className="mx-auto mb-2 text-gray-300" size={24} />
                                <div className="text-sm font-medium text-gray-200">Private</div>
                                <div className="text-xs text-gray-400 mt-1">Invite only</div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-slate-600 rounded-b-2xl border-t border-slate-500 flex flex-col sm:flex-row gap-3 sm:justify-end">
                    <button
                        type="button"
                        onClick={closeModal}
                        className="px-6 py-2.5 bg-slate-500 text-gray-200 rounded-lg hover:bg-slate-400 transition-all duration-200 hover:-translate-y-0.5 font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={!roomName.trim() || isCreating}
                        className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 min-w-[120px] ${
                            isSuccess
                                ? 'bg-green-500 text-white'
                                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none'
                        }`}
                    >
                        {isSuccess ? (
                            <span className="flex items-center justify-center gap-2">
                <span>✓</span> Created!
              </span>
                        ) : isCreating ? (
                            <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Creating...
              </span>
                        ) : (
                            'Create Room'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}