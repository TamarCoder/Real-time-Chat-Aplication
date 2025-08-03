// src/app/register/page.tsx
'use client'

import React from 'react';
import AuthLayout from '../components/Auth/AuthLayout';
import RegisterForm from '../components/Auth/RegisterForm';
 

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const handleRegister = async (data: RegisterData) => {
    try {
      console.log('Register data:', data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  return (
    <AuthLayout 
      title="Create Account" 
      subtitle="Join us today and start chatting"
    >
      <RegisterForm 
        onSubmit={handleRegister}
        isLoading={false}
      />
    </AuthLayout>
  );
}