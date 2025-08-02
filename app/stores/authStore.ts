import { UserStatus } from "../types/types";

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



