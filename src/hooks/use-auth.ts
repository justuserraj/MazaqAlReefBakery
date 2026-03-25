"use client";

import { useState, useEffect } from 'react';

export interface User {
  email: string;
  name: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('mazaq_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (email: string) => {
    const newUser = { email, name: email.split('@')[0] };
    setUser(newUser);
    localStorage.setItem('mazaq_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mazaq_user');
  };

  return { user, login, logout, isLoading };
};