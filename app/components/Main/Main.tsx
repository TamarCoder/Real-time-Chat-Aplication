import React, { useState } from 'react';
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
  MessageCircle
} from 'lucide-react';

// Type definitions
type UserStatus = 'online' | 'away' | 'dnd' | 'offline';
type UserRole = 'admin' | 'moderator' | 'member';
type ChannelType = 'room' | 'dm';

interface Reaction {
  emoji: string;
  count: number;
}

interface Message {
  id: number;
  user: string;
  avatar: string;
  role: UserRole;
  time: string;
  content: string;
  reactions: Reaction[];
  replies: number;
}

interface OnlineMember {
  name: string;
  avatar: string;
  role: UserRole;
  status: UserStatus;
}

interface Channel {
  name: string;
  type: ChannelType;
}

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
  const [message, setMessage] = useState<string>('');
  const [activeView, setActiveView] = useState<ChannelType>('room');
  const [currentChannel, setCurrentChannel] = useState<Channel>({ name: 'general', type: 'room' });

 

  const getRoleIcon = (role: UserRole) => {
    switch (role) {
      case 'admin': return <Crown size={12} className="text-yellow-400" />;
      case 'moderator': return <Shield size={12} className="text-blue-400" />;
      default: return null;
    }
  };

  const getStatusColor = (status: UserStatus): string => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'dnd': return 'bg-red-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage('');
    }
  };

  return (
    <main className="bg-gray-800 flex-1 h-screen relative flex flex-col">
      <BackgroundPattern />
      <FloatingElements />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700/50 bg-gray-800/50 backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Hash size={20} className="text-gray-400" />
              <h1 className="text-white font-semibold text-lg">{currentChannel.name}</h1>
              {currentChannel.type === 'room' && (
                <div className="hidden md:block w-px h-6 bg-gray-600" />
              )}
              {currentChannel.type === 'room' && (
                <p className="hidden md:block text-gray-400 text-sm">
                  Welcome to #{currentChannel.name}! This is the beginning of this channel.
                </p>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {currentChannel.type === 'dm' && (
              <>
                <button className="w-9 h-9 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors">
                  <Phone size={16} className="text-gray-400" />
                </button>
                <button className="w-9 h-9 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors">
                  <Video size={16} className="text-gray-400" />
                </button>
              </>
            )}
            
            <button className="w-9 h-9 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors">
              <Bell size={16} className="text-gray-400" />
            </button>
            <button className="w-9 h-9 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors">
              <Pin size={16} className="text-gray-400" />
            </button>
            <button className="w-9 h-9 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors">
              <Users size={16} className="text-gray-400" />
            </button>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
              <input
                type="text"
                placeholder="Search"
                className="w-40 h-9 pl-9 pr-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-purple-500/50 transition-all duration-300"
              />
            </div>
            
            <button className="w-9 h-9 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition-colors">
              <MoreHorizontal size={16} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Messages Area */}
          <div className="flex-1 flex flex-col">
            {/* Messages List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="group hover:bg-gray-700/20 p-2 rounded-lg transition-colors duration-200">
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm"></span>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-white"></span>
                         
                        <span className="text-gray-400 text-xs"></span>
                      </div>
                      
                      <p className="text-gray-200 leading-relaxed"></p>
                      
                  
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex space-x-2">
                            <button
                              
                              className="flex items-center space-x-1 bg-gray-700/50 hover:bg-gray-600/50 px-2 py-1 rounded-full transition-colors text-sm"
                            >
                              <span></span>
                              <span className="text-gray-300"></span>
                            </button>
                          ))
                          <button className="opacity-0 group-hover:opacity-100 bg-gray-700/50 hover:bg-gray-600/50 p-1 rounded-full transition-all">
                            <Smile size={14} className="text-gray-400" />
                          </button>
                        </div>
                        
                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
                            <Reply size={14} />
                           <span className="text-xs"></span>
                          </button>
                          <button className="text-gray-400 hover:text-red-400 transition-colors">
                            <Heart size={14} />
                          </button>
                          <button className="text-gray-400 hover:text-white transition-colors">
                            <MoreHorizontal size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-700/50">
              <div className="flex items-center space-x-3 p-3 bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-600/50">
                <button className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Paperclip size={20} />
                </button>
                
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={`Message #${currentChannel.name}`}
                  className="flex-1 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none"
                />
                
                <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Smile size={20} />
                </button>
                
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className={`p-2 rounded-lg transition-all ${
                    message.trim()
                      ? 'bg-purple-500 hover:bg-purple-600 text-white'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Members Sidebar */}
          <div className="w-60 bg-gray-900/50 backdrop-blur-sm border-l border-gray-700/50 p-4">
            <div className="mb-4">
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-3">
                
              </h3>
              
              <div className="space-y-2">
                 
                  <div  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors cursor-pointer group">
                    <div className="relative flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-xs"></span>
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3  rounded-full border-2 border-gray-900`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-1">
                        <p className="text-sm truncate transition-colors"></p>
                        
                      </div>
                    </div>
                  </div>
                ))
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border-t border-gray-700/50 pt-4">
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-3">
                Quick Actions
              </h3>
              
              <div className="space-y-2">
                <button className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors text-left">
                  <UserPlus size={16} className="text-blue-400" />
                  <span className="text-gray-300 text-sm">Invite People</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors text-left">
                  <Settings size={16} className="text-gray-400" />
                  <span className="text-gray-300 text-sm">Channel Settings</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors text-left">
                  <Pin size={16} className="text-yellow-400" />
                  <span className="text-gray-300 text-sm">Pinned Messages</span>
                </button>
              </div>
            </div>

            {/* Channel Info */}
            <div className="border-t border-gray-700/50 pt-4 mt-4">
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-3">
                Channel Info
              </h3>
              
              <div className="space-y-3">
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Hash size={14} className="text-purple-400" />
                    <span className="text-white text-sm font-medium">general</span>
                  </div>
                  <p className="text-gray-400 text-xs">
                    Main discussion channel for general topics and community chat.
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Created</span>
                  <span className="text-gray-400">Jan 15, 2024</span>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Messages</span>
                  <span className="text-gray-400">1,247</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;