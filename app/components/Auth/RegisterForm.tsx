import React from "react";
import FormInput from "./FormInput";
import Button from "../Ui/Button";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <form className="space-y-6">
      {/* Username Input */}
      <FormInput
        label="Username"
        name="username"
        type="text"
        placeholder="Choose a username"
        required
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
        name="email"
        type="email"
        placeholder="Enter your email"
        required
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
        name="password"
        type="password"
        placeholder="Create a password"
        required
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
        name="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        required
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
          type="submit"
          variant="primary"
          size="lg"
          className="flex items-center gap-3 w-[70%] h-[56px] bg-amber-400"
        >
          Create Account
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