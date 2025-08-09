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
export type UserStatus = 'online' | 'offline' | 'away' | 'busy';
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
}



export interface UserProfile {
    bio?: string;
    theme : 'light' | 'dark';
    language: string;
}