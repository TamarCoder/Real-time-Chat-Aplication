// ვიმპორტებთ path-ის resolve ფუნქციას ფაილების გზების გადასაჭრელად
import { resolve } from "path";
// ვიმპორტებთ საჭირო ტიპებს - Authentication-ის მოქმედებები, მდგომარეობა, მომხმარებლის მონაცემები
import {
  AuthActions,
  AuthState,
  LoginCredentials,
  RegisterCredentials,
  User,
  UserProfile,
  UserStatus,
} from "../types/types";
// ვიმპორტებთ zustand-ს store-ის შესაქმნელად (state management-ისთვის)
import { create } from "zustand";

// Mock - ქმნის იმიტირებულ  მონაცემებს
// ეს არის ერთი ფალსო მომხმარებლის ტიპი მონაცემთა ბაზის იმიტაციისთვის
type MockUser = {
  id: number; // მომხმარებლის უნიკალური ID
  userName: string; // მომხმარებლის სახელი
  email: string; // ელ-ფოსტა
  password: string; // პაროლი (plain text ფორმატში mock-ისთვის)
  avatar: string; // პროფილის სურათის URL
  status: UserStatus; // მომხმარებლის სტატუსი (online, offline, away)
  profile: UserProfile; // მოხმარებლის ინტერფეისი , ბიო , ენა ,  თემა 
};

// ეს ფუნქცია ინახავს მომხმარებლებს localStorage-ში და JSON.parse-ით აბრუნებს მათ array-ს სახით
const getMockUsers = (): MockUser[] => {
  // localStorage-იდან ავიღოთ "mockUser" key-ით შენახული მონაცემები
  const stored = localStorage.getItem("mockUsers");
  // თუ რაიმეა შენახული, ვაბრუნებთ JSON.parse-ით გარდაქმნილ მონაცემებს
  if (stored) {
    return JSON.parse(stored);
  }
  // თუ არაფერია შენახული, ვქმნით სტანდარტულ ყალბ მომხმარებლებს
  // ვქმნით fake backend-ს მომხმარებელთა ინფორმაციის მისაღებად
  const defaultUSers: MockUser[] = [
    // მომხმარებელი 1: ადმინისტრატორი
    {
      id: 1,
      userName: "admin",
      email: "admin@chatapp.com",
      password: "admin123",
      avatar: "https://api.dicebear.com/9.x/pixel-art/svg", // ავტომატურად გენერირებული ავატარი
      status: "online",
      profile: {
        theme: "dark",
        language: "ka",
        bio: "System Administrator",
      },
    },
    // რეგულარული მომხმარებელი
    {
      id: 2,
      userName: "John",
      email: "john@example.com",
      avatar: "https://api.dicebear.com/9.x/lorelei/svg",
      password: "password",
      status: "online",
      profile: {
        theme: "light",
        language: "en",
        bio: undefined,
      },
    },
    // მომხმარებელი 3: დემო მომხმარებელი
    {
      id: 3,
      userName: "demo",
      email: "demo@test.com",
      password: "demo",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=demo",
      status: "away", // გაშორებული სტატუსი
      profile: {
        theme: "light",
        language: "ka",
        bio: "Demo user for testing",
      },
    },
  ];

  // ვაბრუნებთ სტანდარტულ მომხმარებელთა სიას
  return defaultUSers;
};

// ეს ფუნქცია ინახავს mock მომხმარებლებს localStorage-ში
const saveMonckUsers = (users: MockUser[]): void => {
  // ვინახავთ მომხმარებელთა array-ს JSON string-ად localStorage-ში
  localStorage.setItem("mockUsers", JSON.stringify(users));
};

// მომხმარებლის  შესვლის პროცესს - ამოწმებს credentials-ებს
const mockLogin = async ( creditians: LoginCredentials): Promise<User | null> => {
  // იმიტირებს ჩატვირთვის დროს (2 წამი)
  // ეს აჩვენებს loading state-ს რეალისტური გამოცდილებისთვის
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // ვიღებთ მომხმარებლებს localStorage-იდან
  const users = getMockUsers();
  // ვეძებთ მომხმარებელს რომელიც ემთხვევა მოწოდებულ credentials-ებს
  const foundUser = users.find(
    (user) =>
      // მომხმარებლის სახელი უნდა ემთხვეოდეს  და პაროლი უნდა ემთხვეოდეს
      user.userName === creditians.userName &&
      user.password === creditians.password
  );
  // ვალიდაციის ლოგიკა
  if (foundUser) {
    // თუ მომხმარებელი ნაპოვნია, ვქმნით User ობიექტს
    const user: User = {
      id: foundUser.id,
      userName: foundUser.userName,
      email: foundUser.email,
      avatar: foundUser.avatar,
      status: foundUser.status,
      profile: foundUser.profile
    };
    return user; // წარმატება - ვაბრუნებთ User ობიექტს
  }
  return null; // მომხმარებელი ვერ მოიძებნა
};

// მომხმარტებლის  რეგისტრაციის პროცესს
const mockRegister = async (
  creditians: RegisterCredentials
): Promise<User | string> => {
  // იმიტირებს ჩატვირთვის დროს (1.5 წამი)
  await new Promise((resolve) => setTimeout(resolve, 1500));
  // ვიღებთ არსებულ მომხმარებლებს
  const users = getMockUsers();
  // ვამოწმებთ მომხმარებლის სახელის უნიკალურობას
  const existingUser = users.find(
    (user) => user.userName === creditians.username
  );
  // თუ მომხმარებლის სახელი უკვე არსებობს
  if (existingUser) {
    return " UserName already exists"; // ვაბრუნებთ შეცდომის მესიჯს
  }
  // ვამოწმებთ პაროლის დადასტურების ვალიდაციას
  if (creditians.password !== creditians.confirmPassword) {
    return "Password don't match"; // პაროლები არ ემთხვევა
  }
  // ვქმნით ახალ მომხმარებელს
  const newMonkUser: MockUser = {
    id: users.length + 1, // ახალი ID (არსებული მომხმარებლების რაოდენობა + 1)
    userName: creditians.username,
    email: creditians.email,
    password: creditians.password,
    avatar: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${creditians.username}`,
    status: "offline", // ახალი მომხმარებლები offline სტატუსით იწყებენ

    profile: {
      theme: "light",
      language: "en",
      bio: "new commers",
    },
  };
  // ვინახავთ localStorage-ში
  users.push(newMonkUser); // ვამატებთ ახალ მომხმარებელს სიაში
  saveMonckUsers(users); // ვინახავთ განახლებულ სიას

  // ვაბრუნებთ ახალ მომხმარებელს User ფორმატში
  const user: User = {
    id: newMonkUser.id,
    userName: newMonkUser.userName,
    email: newMonkUser.email,
    avatar: newMonkUser.avatar,
    status: newMonkUser.status,
    profile: newMonkUser.profile,
  };
  return user;
};

// Zustand Store - აქ იწყება მთავარი state management

// ამოწმებს არის თუ არა მომხმარებელი უკვე შესული (authentication check)
const checkAuth = (): User | null => {
  // ვიღებთ მიმდინარე მომხმარებელს localStorage-იდან
  const stored = localStorage.getItem("currentUser");
  if (!stored) {
    return null; // არაფერია შენახული
  }
  // JSON Parse და ვალიდაცია
  try {
    const user = JSON.parse(stored) as User; // ვცდილობთ JSON-ის parse-ს
    // ძირითადი ვალიდაცია - ვამოწმებთ არის თუ არა საჭირო ველები
    if (user && user.id && user.userName && user.email) {
      return user; // ვალიდური მომხმარებლის ობიექტი
    }
    return null; // არავალიდური მომხმარებლის სტრუქტურა
  } catch (error) {
    // JSON parse-ის შეცდომა
    return null;
  }
};

// ვექმნით zustand store-ს AuthState და AuthActions-ის combination-ით
export const useAuthStore = create<AuthState & AuthActions>((set, get) => ({
  // საწყისი მდგომარეობა
  user: null, // არცერთი მომხმარებელი არ არის შესული
  isAuthenticated: false, // არ არის ავტორიზებული
  isLoading: false, // არ იტვირთება
  error: null, // შეცდომა არ არის

  // შესვლის მოქმედება
  login: async (credentials: LoginCredentials) => {
    // ვაყენებთ ჩატვირთვის მდგომარეობას
    try {
      set({ isLoading: true, error: null }); // იწყება ჩატვირთვა, შეცდომები იშლება
      // ვუწოდებთ mock login ფუნქციას
      const user = await mockLogin(credentials);
      if (user) {
        //ვინახავთ localStorage-ში და ვანახლებთ state-ს
        localStorage.setItem("currentUser", JSON.stringify(user));
        set({
          user, // მომხმარებლის ობიექტი
          isAuthenticated: true, // ავტორიზება წარმატებულია
          isLoading: false, // ჩატვირთვა დასრულდა
          error: null, // შეცდომა არ არის
        });
        return;
      } else {
        set({
          isLoading: false,
          error: "Invalid username or password", // შეცდომის მესიჯი
        });
      }
    } catch (error) {
      set({
        isLoading: false,
        error: "Login failed. Please try again.", // ზოგადი შეცდომის მესიჯი
      });
    }
  },

  // რეგისტრაცია
  register: async (credentials: RegisterCredentials) => {
    try {
      set({ isLoading: true, error: null }); // იწყება ჩატვირთვა
      const result = await mockRegister(credentials); // ვუწოდებთ mock register-ს

      if (typeof result === "string") {
        // შეცდომის შემთხვევა: result არის შეცდომის მესიჯი
        set({
          isLoading: false,
          error: result, // "Username already exists" ან "Passwords don't match"
        });
        // throw new Error(result) ← ეს წაშლილია!
        return; // უბრალოდ ვასრულებთ ფუნქციას
      } else {
        // წარმატების შემთხვევა: result არის user ობიექტი
        localStorage.setItem("currentUser", JSON.stringify(result));

        set({
          user: result, // ახალი მომხმარებელი
          isAuthenticated: true, // ავტორიზება წარმატებულია
          isLoading: false, // ჩატვირთვა დასრულდა
          error: null, // შეცდომა არ არის
        });
      }
    } catch (error) {
      // ეს catch ბლოკი მხოლოდ რეალური unexpected შეცდომებისთვისაა
      // (მაგ. network errors, JSON parsing errors, etc.)
      set({
        isLoading: false,
        error: "Registration failed. Please try again",
      });
    }
  },
  // გამოსვლის მოქმედება
  logout: () => {
    // ვასუფთავებთ localStorage-ს
    localStorage.removeItem("currentUser");
    // ვანულებთ state-ს
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  },

  // ავტორიზაციის შემოწმების მოქმედება
  checkAuth: () => {
    const user = checkAuth(); // ვუწოდებთ checkAuth ფუნქციას

    if (user) {
      // ვალიდური სესია ნაპოვნია
      set({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } else {
      // სესია არ მოიძებნა ან არავალიდურია
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    }
  },

  // ჩატვირთვის მდგომარეობის დაყენების მოქმედება
  setLoading: (loading: boolean) => {
    set({ isLoading: loading }); // მარტივად ანახლებს loading state-ს
  },

  // მომხმარებლის დაყენების მოქმედება
  setUser: (user: User | null) => {
    set({
      user,
      isAuthenticated: user !== null, // თუ user არის null, isAuthenticated ყოფილა false
    });
  },

  // პროფილის განახლების მოქმედება
  updateProfile: (updates: Partial<User>) => {
    const currentUser = get().user; // ვიღებთ მიმდინარე მომხმარებელს
    if (currentUser) {
      const updateUser = { ...currentUser, ...updates }; // ვაერთიანებთ არსებულ მონაცემებს ახალ განახლებებთან
      // ვანახლებთ localStorage-ს
      localStorage.setItem("currentUser", JSON.stringify(updateUser)); // შეცდომა: უნდა იყოს setItem
      // ვანახლებთ state-ს
      set({ user: updateUser });
    }
  },

  // dicebera მეთოდი რომელიც ლინკის მეშვეობით ქმნის უნიკალურ ავატარებს 

  updateAvatar : (style: string, seed?: string) => {
    const currentUser = get().user;
    if(currentUser) {
      const actualSeed = seed || currentUser.userName || Math.random().toString();
      const newAvatar = `https://api.dicebear.com/9.x/${style}/svg?seed=${actualSeed}`;

      get().updateProfile({avatar: newAvatar}); 
    }

  }
}));
