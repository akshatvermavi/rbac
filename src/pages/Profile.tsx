import React from 'react';
import { Layout } from '../components/Layout';
import { User, Mail, Calendar } from 'lucide-react';
import { auth } from '../lib/firebase';

export function Profile() {
  const user = auth.currentUser;

  return (
    <Layout>
      <div className="bg-dark-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Profile</h1>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <User className="h-5 w-5 text-indigo-500" />
            <div>
              <p className="text-sm text-gray-400">Username</p>
              <p className="text-white">{user?.displayName || 'N/A'}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-5 w-5 text-indigo-500" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white">{user?.email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Calendar className="h-5 w-5 text-indigo-500" />
            <div>
              <p className="text-sm text-gray-400">Member Since</p>
              <p className="text-white">{user?.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}