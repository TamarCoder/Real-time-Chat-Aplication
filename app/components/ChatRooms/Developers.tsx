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

const DevelopersRoom: React.FC<DevelopersRoomProps> = ({
  onChatRoomClick = () => {},
  userInitials = "TC",
  userName = "UserName",
  isOnline = true,
  notificationCount = 3,
  activePage = "",
  isActive = false,
  hasUnread = true,
  unreadCount = 5,
  memberCount = 12,
  onlineCount = 3,
  lastMessageTime = "11:22"
}) => {
  
  // Developers Chat Icon Component
  const DevelopersIcon = () => (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
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
     
      <text x="12" y="18" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">
        &lt;/&gt;
      </text>
    </svg>
  );

  return (
    <div className="backdrop-blur-sm   flex flex-col items-center py-4 relative">
    
      <div className="flex flex-col gap-3 mb-6">
        {/* Developers Room Button */}
        <button
          onClick={onChatRoomClick}
          className={`
            p-3 rounded-xl transition-all duration-200 group relative
            ${activePage === 'developers' || isActive
              ? 'bg-blue-500/30 border border-blue-400/50 shadow-lg shadow-blue-500/20' 
              : hasUnread 
                ? 'bg-yellow-500/20 border border-yellow-400/30 hover:bg-yellow-500/30' 
                : 'bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/50'
            }
          `}
          aria-label="Developers"
        >
          <DevelopersIcon />
          
         <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
            Developers
          </div>
        
          {/* Active indicator */}
          {(activePage === 'developers' || isActive) && (
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-400 rounded-r-full"></div>
          )}
          
          {/* Unread indicator line */}
          {hasUnread && !isActive && (
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-6 bg-yellow-400 rounded-r-full"></div>
          )}
        </button>
 
      </div>

      {/* Mini Room Info Panel - Shows when hovered or active */}
     
    </div>
  );
};

export default DevelopersRoom;