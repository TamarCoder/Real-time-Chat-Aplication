
"use client";

import AuthLayout from "../components/Auth/AuthLayout";
import LoginForm from "../components/Login/LoginForm";

export default function LoginPage() {

  
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your account to continue"
    >
      <LoginForm />
    </AuthLayout>
  );
}
