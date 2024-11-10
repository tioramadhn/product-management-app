"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = async (): Promise<boolean> => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // In a real application, you would verify the token with your backend here
      setIsAuthenticated(true);
      return true;
    }
    setIsAuthenticated(false);
    return false;
  };

  useEffect(() => {
    checkAuth().then(() => setIsLoading(false));
  }, []);

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    // This is a mock authentication. In a real application, you would make an API call here.
    if (username === "admin" && password === "password") {
      localStorage.setItem("authToken", "mock-jwt-token");
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return <div>Loading...</div>; // Or any loading component
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, login, logout, checkAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
