import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { UserPlus } from 'lucide-react';

interface LocationState {
  email?: string;
}

export function SignUp() {
  const location = useLocation();
  const state = location.state as LocationState;
  const redirectedEmail = state?.email;

  return (
    <div className="min-h-screen bg-dark-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <UserPlus className="h-12 w-12 text-indigo-500" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Create a new account
        </h2>
        {redirectedEmail && (
          <p className="mt-2 text-center text-sm text-gray-400">
            No account found for {redirectedEmail}. Please sign up.
          </p>
        )}
        {!redirectedEmail && (
          <p className="mt-2 text-center text-sm text-gray-400">
            Or{' '}
            <Link to="/signin" className="font-medium text-indigo-500 hover:text-indigo-400">
              sign in to your account
            </Link>
          </p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-dark-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm mode="signup" initialEmail={redirectedEmail} />
        </div>
      </div>
    </div>
  );
}