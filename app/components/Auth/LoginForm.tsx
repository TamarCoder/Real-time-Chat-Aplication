import React from "react";
import Button from "../Ui/Button";
import Link from "next/link";
import FormInput from "./FormInput";

const LoginForm = () => {
  return (
    <form className="space-y-6">
      {/* Username Input */}
      <FormInput
        label="Username"
        name="username"
        type="text"
        placeholder="Enter your username"
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

      {/* Password Input */}
      <FormInput
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
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

      {/* Forgot Password Link */}
      <div
        className="text-right w-[70%] h-[45px] flex flex-col justify-center gap-3"
        style={{
          marginLeft: "15%",
        }}
      >
        <a
          href="#"
          className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          Forgot your password?
        </a>
      </div>

      {/* Submit Button */}
      <div className="flex flex-col items-center justify-center gap-3">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-[70%] h-[56px]"
        >
          Sign In
        </Button>

        <div className="text-center mt-6">
          <p className="text-slate-400">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
