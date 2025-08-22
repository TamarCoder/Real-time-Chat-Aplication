import React from 'react';

interface DevelopersRoomProps {
    onChatRoomClick?: () => void;
    userInitials?: string;
    userName?: string;
    isOnline?: boolean;
    notificationCount?: number;
    activePage?: string;
    isActive?: boolean;
    hasUnread?: boolean;
    unreadCount?: number;
    memberCount?: number;
    onlineCount?: number;
    lastMessageTime?: string;
}


const DevelopersRoom: React.FC<DevelopersRoomProps> = ({onChatRoomClick = () => {},userName = "Developers", activePage = "", isActive = false, hasUnread = true, unreadCount = 5,}) => {

    const DevelopersIcon = () => (
        <svg
            width="45"
            height="45"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
            style={{paddingLeft:'10px'}}>
            <defs>
                <linearGradient id="developersBubble" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#3b82f6" }} />
                    <stop offset="100%" style={{ stopColor: "#6366f1" }} />
                </linearGradient>
            </defs>
            <path
                d="M4 12 Q4 8 8 8 L20 8 Q24 8 24 12 L24 18 Q24 22 20 22 L10 22 L4 26 Z"
                fill="url(#developersBubble)"
            />
            <text
                x="16"
                y="19"
                textAnchor="middle"
                fill="white"
                fontSize="9"
                fontWeight="bold"
                fontFamily="monospace"
            >
                {"</>"}
            </text>
        </svg>
    );

    return (
        <button  onClick={onChatRoomClick}  className={` flex items-center gap-3 w-full h-[50px] px-6 py-3 rounded-md text-lg transition-all duration-200 relative
          ${activePage === 'Developers' || isActive ? 'bg-blue-500/20 text-blue-300' : hasUnread
            ? 'bg-yellow-500/10 text-yellow-200 hover:bg-yellow-500/20'
            : 'text-gray-300 hover:bg-slate-700/50 hover:text-white'}
       `} aria-label="Developers Room">

            <DevelopersIcon  />
            <span className="truncate">#{userName}</span>

            {/* Active indicator */}
            {(activePage === 'developers' || isActive) && (
                <div className="absolute -left-1 top-0 bottom-0 w-1 bg-blue-400 rounded-r-full"></div>
            )}

            {/* Unread indicator line */}
            {hasUnread && !isActive && (
                <div className="absolute -left-1 top-0 bottom-0 w-1 bg-yellow-400 rounded-r-full"></div>
            )}

            {/* Unread Count Bubble */}
            {hasUnread && unreadCount && unreadCount > 0 && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">

        </span>
            )}
        </button>
    );
};

export default DevelopersRoom;