import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../firebase";

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, username: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email: string, password: string, username: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(`User created: ${username}`, userCredential.user);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};