// src/app/register/page.tsx
"use client";
import AuthLayout from "../components/Auth/AuthLayout";
import RegisterForm from "../components/Registration/RegisterForm";



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
