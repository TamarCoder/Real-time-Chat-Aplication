"use client";
import React from "react";
import Button from "../Ui/Button";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
 
import { useAuthStore } from "../../stores/authStore";
 
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./RegisteSchema";
import FormInput from "../Auth/FormInput";

interface IFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const { register: authRegister, isLoading, error } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await authRegister(data);
    } catch (error) {
      console.log("Registration error", error);
    }
  };

  return (
    <form className="space-y-6 flex flex-col " onSubmit={handleSubmit(onSubmit)}>
      {/* AuthorStore Errors */}

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg w-[550px] h-[40px] flex items-center  text-center justify-center"
        style={{
                 marginLeft: '13%',
                 marginTop:'2%'
              }}
        >
          <p className="text-red-400 text-sm flex items-center  text-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="..." clipRule="evenodd" />
            </svg>
            {error}  
          </p>
        </div>
      )}

      {/* Username Input */}
      <FormInput
        label="Username"
        type="text"
        required
        placeholder="Choose a username"
        autoComplete="username"
        error={errors.username?.message}
        {...register("username")}
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        }
      />

      {/* Email Input */}
      <FormInput
        label="Email Address"
        type="email"
        required
        placeholder="Enter your email"
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        }
      />

      {/* Password Input */}
      <FormInput
        label="Password"
        type="password"
        required
        error={errors.password?.message}
        placeholder="Create a password"
        autoComplete="new-password"
        {...register("password")}
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        }
      />

      {/* Confirm Password Input */}
      <FormInput
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        autoComplete="new-password"
        error={errors.confirmPassword?.message}
        required
        {...register("confirmPassword")}
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
      />

      <div className="flex flex-col items-center justify-center">
        {/* Terms and Conditions */}
        <div className="flex items-center gap-3 w-[70%] h-[35px]">
          <input
            type="checkbox"
            id="terms"
            required
            className="mt-1 w-4 h-4 text-purple-600 bg-slate-800 border-slate-600 rounded focus:ring-purple-500 focus:ring-2"
          />
          <label htmlFor="terms" className="text-sm text-slate-400">
            I agree to the{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Privacy Policy
            </a>
          </label>
        </div>

        {/* Submit Button */}
        <Button
          isLoading={isLoading}
          disabled={isLoading}
          type="submit"
          variant="primary"
          size="lg"
          className="flex items-center gap-3 w-[70%] h-[56px] bg-amber-400 cursor-pointer"
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </Button>
      </div>

      {/* Login Link */}
      <div className="text-center mt-6">
        <p className="text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
