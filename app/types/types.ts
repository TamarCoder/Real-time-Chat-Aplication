// users information
export interface User {
  id: number;
  userName: string;
  email: string;
  avatar: string;
  status: UserStatus;
  profile?: UserProfile; // იუზერებისთის საჭირო ხელსაწყოები
}
// users status
export type UserStatus = 'online' | 'offline' | 'away' | 'busy' |'dnd';
export type UserRole = "admin" | "moderator" | "member";
export type ChannelType = 'room' | 'dm';

// Authentification  interface
export interface AuthState {
    user: User | null;       
    isAuthenticated: boolean; 
    isLoading: boolean;     
    error: string | null;    
}; 

//ogin/register  froms
export interface LoginCredentials {
     userName: string;   
    password: string;  
}
export interface RegisterCredentials {
    username: string;
    email: string;
    password: string;      
    confirmPassword: string;  
}

//AuthActions interface 
export interface AuthActions {
    login: (credentials: LoginCredentials) => Promise<void>;
    register: (credentials: RegisterCredentials) => Promise<void>; 
    logout: () => void;  
    setLoading: (loading: boolean) => void;  
    setUser: (user: User | null) => void;   
    checkAuth: () => void;
    updateProfile: (updates: Partial<User>) => void;  
    updateAvatar: (style: string, seed?: string) => void; 
}



export interface UserProfile {
    bio?: string;
    theme : 'light' | 'dark';
    language: string;
}


export interface Room {
  id: string;
  name: string;
  type: "text" | "voice";
  icon: any;
  color: string;
  members: number;
  unread: number;
  private?: boolean;
  activeUsers?: string[];
}

export interface DirectMessage {
  id: string;
  name: string;
  avatar: string;
  status: UserStatus;
  lastSeen: string;
  unread: number;
  role: UserRole;
}

export interface Reaction {
  emoji: string;
  count: number;
}

export interface Message {
  id: number;
  user: string;
  avatar: string;
  role: UserRole;
  time: string;
  content: string;
  reactions: Reaction[];
  replies: number;
}

export interface OnlineMember {
  name: string;
  avatar: string;
  role: UserRole;
  status: UserStatus;
}

export interface Channel {
  name: string;
  type: ChannelType;
}