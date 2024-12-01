import React, { useState } from 'react';
import { auth } from '../lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Mail, Lock, Loader2, User } from 'lucide-react';
import { isUserNotFoundError, getAuthErrorMessage } from '../lib/auth-utils';
import { createUserProfile } from '../lib/user-service';

interface AuthFormProps {
  mode: 'signin' | 'signup';
  initialEmail?: string;
}

export function AuthForm({ mode, initialEmail = '' }: AuthFormProps) {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'signup') {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        
        await updateProfile(user, {
          displayName: username
        });

        await createUserProfile(user.uid, {
          email: user.email!,
          username,
          createdAt: new Date()
        });

        toast.success('Account created successfully!');
        navigate('/dashboard');
      } else {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          toast.success('Signed in successfully!');
          navigate('/dashboard');
        } catch (error) {
          if (isUserNotFoundError(error)) {
            toast.error('No account found. Redirecting to signup...');
            navigate('/signup', { state: { email } });
          } else {
            throw error;
          }
        }
      }
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-sm">
      {mode === 'signup' && (
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-300">
            Username
          </label>
          <div className="mt-1 relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="username"
              type="text"
              required
              className="appearance-none block w-full pl-10 pr-3 py-2 bg-dark-900 border border-dark-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email address
        </label>
        <div className="mt-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            id="email"
            type="email"
            required
            className="appearance-none block w-full pl-10 pr-3 py-2 bg-dark-900 border border-dark-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <div className="mt-1 relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            id="password"
            type="password"
            required
            className="appearance-none block w-full pl-10 pr-3 py-2 bg-dark-900 border border-dark-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-offset-dark-800"
      >
        {loading ? (
          <Loader2 className="animate-spin h-5 w-5" />
        ) : mode === 'signin' ? (
          'Sign In'
        ) : (
          'Sign Up'
        )}
      </button>
    </form>
  );
}