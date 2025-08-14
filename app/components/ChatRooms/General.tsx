import React from 'react';

interface SidebarProps {
 onChatRoomClick: () => void;
//   onFriendsClick?: () => void;
//   onNotificationsClick?: () => void;
//   onSettingsClick?: () => void;
//   onLogoutClick?: () => void;
  userInitials?: string;
  userName?: string;
  isOnline?: boolean;
  notificationCount?: number;
  activePage?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  onChatRoomClick,
//   onFriendsClick = () => {},
//   onNotificationsClick = () => {},
//   onSettingsClick = () => {},
//   onLogoutClick = () => {},
  userInitials = "TC",
  userName = "UserName",
  isOnline = true,
  notificationCount = 3,
  activePage = ""
}) => {
  
  // Chat Icon Component
  const ChatIcon = () => (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient id="sidebarBubble" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#8b5cf6" }} />
          <stop offset="100%" style={{ stopColor: "#a855f7" }} />
        </linearGradient>
      </defs>
      <path 
        d="M4 12 Q4 8 8 8 L20 8 Q24 8 24 12 L24 18 Q24 22 20 22 L10 22 L4 26 Z" 
        fill="url(#sidebarBubble)"
      />
      <circle cx="12" cy="15" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="16" cy="15" r="1.5" fill="white" opacity="0.7"/>
      <circle cx="20" cy="15" r="1.5" fill="white" opacity="0.5"/>
    </svg>
  );

  return (
    <div className=" backdrop-blur-sm flex flex-col items-center py-4 relative"
     style={{
        paddingTop:'50px'
     }}
    >
    
      <div className="flex flex-col gap-3 mb-6">
        <button
          onClick={onChatRoomClick}
          className={`
            p-3 rounded-xl transition-all duration-200 group relative
            ${activePage === 'chat'
              ? 'bg-purple-500/30 border border-purple-400/50 shadow-lg shadow-purple-500/20' 
              : 'bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/50'
            }
          `}
          aria-label="General Chat"
        >
          <ChatIcon />
          
          {/* Tooltip */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
            General
          </div>
          {/* Active indicator */}
          {activePage === 'chat' && (
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-400 rounded-r-full"></div>
          )}
        </button>
 
      </div>
    </div>
  );
};

export default Sidebar;