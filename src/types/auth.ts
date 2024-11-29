export type Role = 'admin' | 'moderator' | 'user';

export interface User {
  uid: string;
  email: string | null;
  role: Role;
  displayName: string | null;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, role?: Role) => Promise<void>;
  signOut: () => Promise<void>;
}