import { object, string } from "yup";

export const  userSchema = object({
  userName: string().required(),
  password: string()
    .min(6, "Password must be at least 6 characters").required("Password is required"),
});
