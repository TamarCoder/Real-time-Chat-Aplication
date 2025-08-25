import useChatStore from "../../../stores/addRoomState";
import {Hash, Users, Lock, Globe, Shield, Calendar, MessageCircle, Settings } from 'lucide-react';

// Room interface
interface Room {
    id: string;
    roomsName: string;
    description: string;
    privacy: 'private' | 'public' | 'invite';
    category: string;
    maxMembers: number;
    selectedEmoji: string;
    selectedColor: string;
    members: string[];
    createdAt: Date;
}

interface RoomProps {
    isActive?: boolean;
    onEditModal: () => void;
}

const Room: React.FC<RoomProps> = ({isActive = false, onEditModal}) => {
    const {rooms} = useChatStore();

    const getPrivacyIcon = (privacy: string) => {
        switch (privacy) {
            case 'private':
                return <Lock className="w-3 h-3"/>;
            case 'invite':
                return <Shield className="w-3 h-3"/>;
            default:
                return <Globe className="w-3 h-3"/>;
        }
    };

    const getPrivacyColor = (privacy: string) => {
        switch (privacy) {
            case 'private':
                return 'text-red-400';
            case 'invite':
                return 'text-yellow-400';
            default:
                return 'text-green-400';
        }
    };

    return (
        <>
            {rooms.map((room) => (
                <div
                    key={room.id}
                    className="group relative w-[250px] h-[100px] flex flex-col justify-between rounded-xl cursor-pointer transition-all duration-300 hover:bg-slate-700/50 hover:shadow-lg"
                    style={{
                        borderLeft: `4px solid ${room.selectedColor}`,
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        paddingTop: '10px',
                    }}
                >
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            {/* Emoji Avatar */}
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-md"
                                style={{
                                    backgroundColor: room.selectedColor + '20',
                                    border: `1px solid ${room.selectedColor}`
                                }}
                            >
                                {room.selectedEmoji}
                            </div>

                            {/* Room Name */}
                            <div className="flex items-center gap-1">
                                <Hash className="w-3 h-3 text-slate-400"/>
                                <span className="text-white font-medium text-sm truncate max-w-[120px]">
                                    {room.roomsName}
                                </span>
                            </div>
                        </div>

                        {/* Privacy Indicator - გასწორებული */}
                        <div className={`flex flex-col items-center gap-[10px] ${getPrivacyColor(room.privacy)}`}>
                            {getPrivacyIcon(room.privacy)}
                            <Settings className='w-4 h-4' onClick={onEditModal} />
                        </div>
                    </div>

                    {/* Description */}
                    {room.description && (
                        <p className="text-xs text-slate-400 mb-2 line-clamp-2 group-hover:text-slate-300 transition-colors">
                            {room.description}
                        </p>
                    )}

                    {/* Bottom Row - Stats */}
                    <div className="flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center gap-3">
                            {/* Members Count */}
                            <div className="flex items-center gap-1">
                                <Users className="w-3 h-3"/>
                                <span>{room.members.length}/{room.maxMembers}</span>
                            </div>

                            {/* Category Badge */}
                            <div className="px-2 py-1 bg-slate-700/50 rounded-md capitalize">
                                {room.category}
                            </div>
                        </div>

                        {/* Created Date */}
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3"/>
                            <span>{room.createdAt.toLocaleDateString('ka-GE')}</span>
                        </div>
                    </div>

                    {/* Active Room Indicator */}
                    {isActive && (
                        <div className="absolute right-2 top-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                    )}

                    {/* Hover Effect - Show Message Icon */}
                    <div
                        className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <MessageCircle className="w-4 h-4 text-slate-400"/>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Room;