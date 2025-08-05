import { resolve } from "path";
import {
  AuthActions,
  AuthState,
  LoginCredentials,
  RegisterCredentials,
  User,
  UserStatus,
} from "../types/types";
import { create } from "zustand";
import { error } from "console";
import { set } from "date-fns";

// Mock
// this is to what containe one user.
type MockUser = {
  id: number;
  username: string;
  email: string;
  password: string; // plain text (mock-ისთვის)
  avatar: string; // default avatar URL
  status: UserStatus; // default status
};

// thinb funqtion save one user in loval storajen , \
//  and with json pars tostirng returen me array

const getMockUsers = (): MockUser[] => {
  const stored = localStorage.getItem("mockUser");

  if (stored) {
    return JSON.parse(stored);
  }
  // we  create   fake backand to  get users info
  const defaultUSers: MockUser[] = [
    // user 1 : Admin;
    {
      id: 1,
      username: "admin",
      email: "admin@chatapp.com",
      password: "admin123",
      avatar: "https://api.dicebear.com/9.x/pixel-art/svg",
      status: "online",
    },
    //regular user
    {
      id: 2,
      username: "John",
      email: "john@example.com",
      avatar: "https://api.dicebear.com/9.x/lorelei/svg",
      password: "password",
      status: "online",
    },
    // User 3: Demo user
    {
      id: 3,
      username: "demo",
      email: "demo@test.com",
      password: "demo",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=demo",
      status: "away",
    },
  ];

  return defaultUSers;
};

const saveMonckUsers = (users: MockUser[]): void => {
  localStorage.setItem("mockUsers", JSON.stringify(users));
};

const mockLogin = async (
  creditians: LoginCredentials
): Promise<User | null> => {

  //Loading simulation 
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //Get users from localStorage
  const users = getMockUsers();
  //Find matching user
  const foundUser = users.find(
    (user) =>
      user.username === creditians.username &&
      user.password === creditians.password
  );
   //Validation logic
  if (foundUser) {
    const user: User = {
      id: foundUser.id,
      userName: foundUser.username,
      email: foundUser.email,
      avatar: foundUser.avatar,
      status: foundUser.status,
    };
    return user;   //Success - User object
  }
  return null;
};

const mockRegister = async (
  creditians: RegisterCredentials
): Promise<User | string> => {
  //Loading simulation 
  await new Promise((resolve) => setTimeout(resolve, 1500));
   //Get existing users 
  const users = getMockUsers();
    //Check username uniqueness 
  const existingUser = users.find(
    (user) => user.username === creditians.username
  );

  if (existingUser) {
    return " UserName already exists";
  }
  //Password confirmation validation
  if (creditians.password !== creditians.confirmPassword) {
    return "Password don't match";
  }

  //Create new user 
  const newMonkUser: MockUser = {
    id: users.length + 1,
    username: creditians.username,
    email: creditians.email,
    password: creditians.password,
    avatar: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${creditians.username}`,
    status: "offline",
  };

  //Save to localStorage
  users.push(newMonkUser);
  saveMonckUsers(users);
  //Return new user 
  const user: User = {
    id: newMonkUser.id,
    userName: newMonkUser.username,
    email: newMonkUser.email,
    avatar: newMonkUser.avatar,
    status: newMonkUser.status,
  };

  return user;
};

// Zustand Store.

const checkAuth = (): User | null => {

  // Get current user from localStorage
  const stored = localStorage.getItem("currentUser");
  if (!stored) {
    return null;
  }
  //JSON Parse & Validation
  try {
    const user = JSON.parse(stored) as User;
     // Basic validation
    if (user && user.id && user.userName && user.email) {
      return user; // Valid user object

    }
    return null; //Invalid user structure
  } catch (error) {
    // JSON parse error

    return null;
  }
};

export const useAuthStore = create<AuthState & AuthActions>((set, get) => ({
  //Initial State
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  // Login Action
  login: async (credentials: LoginCredentials) => {
    // Set loading state
    try {
      set({ isLoading: true, error: null });

      // Call mock login
      const user = await mockLogin(credentials);

      if (user) {
        // Success: Save to localStorage and update state
        localStorage.setItem("currentUser", JSON.stringify(user));
        set({
          user, 
          isAuthenticated: true,
          isLoading: false,  
          error: null,
        });
      } else {
         // Failure: Invalid credentials
        set({
          isLoading: false,
          error: "Invalid username or password",
        });
      }
    } catch (error) {
      // Error handling
      set({
        isLoading: false,
        error: "Login failed. Please try again.",
      });
    }
  },


  // Register Action
  register: async (credentials: RegisterCredentials) => {
    try{
      set({isLoading: true, error : null});
      const result =  await mockRegister(credentials);

      if(typeof result === 'string'){
        // Error case: result is error message
       set({
          isLoading: false,
          error: result // "Username already exists" or "Passwords don't match"
        });
        throw new Error(result)
      }else{
        //succes case: result is user object
        localStorage.setItem("currentUser", JSON.stringify(result));

        set({
          user: result,
          isAuthenticated: true,
          isLoading: false,
          error:null
        });
      }
    }catch(error){
       set({
        isLoading: false,
        error:"Registration failed. Please try again"
       })
    }
  },


  logout: () => {
    //clear localStorage

    localStorage.removeItem("currentUser");

    //reset state
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error:null
    })
  },

  //checkAuth Action
  checkAuth: () => {
    const user =  checkAuth() // call checkAuth  function. 

    if(user) {
      //valid session found
      set({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null
      })
    }else{
      set({
        user:null,
        isAuthenticated:false,
        isLoading:false,
        error: null
      })
    }

  },
  // setloading Action
  setLoading: (loading : boolean) => {
    set({isLoading : loading})
  },
  setUser : (user: User | null) => {
    set({
      user,
      isAuthenticated: user !== null
    })
  },
  updateProfile : (updates :  Partial <User>) => {
      const currentUser = get().user;

      if(currentUser){
        const updateUser = {...currentUser, ...updates}

        //update LocalStorage 

        localStorage.set("currentUser", JSON.stringify(updateUser));

        //update state

        set({user: updateUser})
      }
  }


}));
