import { object, string, ref } from "yup";

export const RegisterSchema = object({
  username: string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .matches(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),

  email: string()
    .email("Please enter a valid email")
    .required("Email is required"),

  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: string()
    .required("Please confirm your password")
    .oneOf([ref('password')], 'Passwords must match'),

});