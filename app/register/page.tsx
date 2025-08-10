// src/app/register/page.tsx
"use client";
import React, { useState } from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import RegisterForm from "../components/Auth/RegisterForm";
import UserProfile from "../components/Auth/UserProfile";

interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <AuthLayout
        title="Create Account"
        subtitle="Join us today and start chatting"
      >
        <RegisterForm />
      </AuthLayout>
      <button
        onClick={() => setShowProfile(true)}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg"
      >
        პროფილის ნახვა
      </button>

      {showProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full max-h-screen overflow-auto">
            {/* დახურვის ღილაკი */}
            <button
              onClick={() => setShowProfile(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white rounded-full"
            >
              ✕
            </button>

            <UserProfile />
          </div>
        </div>
      )}


      
    </>
  );
}
