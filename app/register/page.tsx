// src/app/register/page.tsx
"use client";
import React, { useState } from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import UserProfile from "../components/Auth/UserProfile";
import RegisterForm from "../components/Registration/RegisterForm";

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
