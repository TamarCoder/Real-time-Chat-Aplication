// src/app/login/page.tsx
"use client";

import React, { useState } from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import LoginForm from "../components/Auth/LoginForm";
import UserProfile from "../components/Auth/UserProfile";

export default function LoginPage() {
  const [showProfile, setShowProfile] = useState(false);
  
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your account to continue"
    >
      <LoginForm />
    </AuthLayout>
  );
}
