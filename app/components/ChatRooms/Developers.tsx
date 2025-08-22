import React from 'react';

// Room Data Interface
interface RoomData {
    id: string;
    name: string;
    description: string;
    appearance: {
        emoji: string;
        color: string;
    };
    privacy: 'public' | 'private' | 'invite';
    category: string;
    settings: {
        maxMembers: number;
        isActive: boolean;
        allowInvites: boolean;
    };
    members: Array<{
        userId: string;
        role: 'owner' | 'admin' | 'member';
        joinedAt: string;
    }>;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
    messageCount: number;
    lastActivity: string;
}

// Component Props
interface DynamicRoomProps {
    roomData: RoomData;
    onClick?: () => void;
    isActive?: boolean;
}

const DynamicRoom: React.FC<DynamicRoomProps> = ({
                                                     roomData,
                                                     onClick,
                                                     isActive = false
                                                 }) => {

    // Error handling - return null if roomData is invalid
    if (!roomData || !roomData.appearance) {
        console.error('DynamicRoom: roomData or roomData.appearance is undefined');
        return null;
    }

    // Default values for safety
    const {
        name = 'Unknown Room',
        appearance = { emoji: '💬', color: '#6366f1' },
        privacy = 'public',
        members = [],
        settings = { maxMembers: 50, isActive: false, allowInvites: true },
        id = 'default'
    } = roomData;

    // Dynamic Icon Component based on emoji and color
    const RoomIcon = () => (
        <div className="flex-shrink-0 relative">
            {/* Background bubble with room color */}
            <svg
                width="45"
                height="45"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                style={{ paddingLeft: '10px' }}
            >
                <defs>
                    <linearGradient id={`roomBubble_${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: appearance.color }} />
                        <stop offset="100%" style={{ stopColor: appearance.color + '80' }} />
                    </linearGradient>
                </defs>
                <path
                    d="M4 12 Q4 8 8 8 L20 8 Q24 8 24 12 L24 18 Q24 22 20 22 L10 22 L4 26 Z"
                    fill={`url(#roomBubble_${id})`}
                />
            </svg>

            {/* Emoji overlay */}
            <div
                className="absolute inset-0 flex items-center justify-center text-lg"
                style={{ paddingLeft: '10px' }}
            >
                {appearance.emoji}
            </div>
        </div>
    );

    // Privacy icon based on room privacy setting
    const PrivacyIcon = () => {
        switch (privacy) {
            case 'private':
                return <span className="text-xs">🔒</span>;
            case 'invite':
                return <span className="text-xs">📩</span>;
            default:
                return <span className="text-xs">🌐</span>;
        }
    };

    return (
        <button
            className={`flex items-center gap-3 w-full h-[50px] px-6 py-3 rounded-md text-lg transition-all duration-200 relative ${
                isActive
                    ? 'bg-opacity-100 shadow-lg'
                    : 'bg-opacity-80 hover:bg-opacity-90 hover:shadow-md'
            }`}
            style={{
                backgroundColor: appearance.color + (isActive ? '' : 'CC'),
                color: 'white'
            }}
            onClick={onClick}
        >
            <RoomIcon />

            <div className="flex-1 flex items-center justify-between min-w-0">
                <div className="flex items-center gap-2 min-w-0">
          <span className="truncate font-medium">
            # {name}
          </span>
                    <PrivacyIcon />
                </div>

                {/* Member count and activity indicator */}
                <div className="flex items-center gap-2 text-xs opacity-80">
                    <span>{members.length}/{settings.maxMembers}</span>
                    {settings.isActive && (
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    )}
                </div>
            </div>
        </button>
    );
};

export default DynamicRoom;