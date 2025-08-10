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
  return (
    <>
      <AuthLayout
        title="Create Account"
        subtitle="Join us today and start chatting"
      >
        <RegisterForm />
      </AuthLayout>

    </>
  );
}
