// src/app/login/page.tsx
'use client'

import React from 'react';
import AuthLayout from '../components/Auth/AuthLayout';
import LoginForm from '../components/Auth/LoginForm';
 

interface LoginData {
  username: string;
  password: string;
}

export default function LoginPage() {
  const handleLogin = async (data: LoginData) => {
    try {
      console.log('Login data:', data);
      alert('Login successful!');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Sign in to your account to continue"
    >
      <LoginForm 
        onSubmit={handleLogin}
        isLoading={false}
      />
    </AuthLayout>
  );
}