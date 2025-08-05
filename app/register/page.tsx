// src/app/register/page.tsx
"use client";
import React from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import RegisterForm from "../components/Auth/RegisterForm";
import { useAuthStore } from "../stores/authStore";

interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const { register, isLoading, error } = useAuthStore();

  const handleRegister = async (data: RegisterCredentials) => {
    try {
      await register(data);
      alert("Registration completed successfully!");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join us today and start chatting"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
