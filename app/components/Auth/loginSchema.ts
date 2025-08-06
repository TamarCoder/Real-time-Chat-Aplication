import { object, string } from "yup";

export const loginSchema = object({
  userName: string().required("Username is required"),  // ← username (lowercase)
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
});