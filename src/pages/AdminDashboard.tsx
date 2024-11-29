import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Shield } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-indigo-600 mr-2" />
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700">
                Logged in as: {user?.email} (Admin)
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Admin Controls</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">User Management</h3>
                <p className="text-gray-600">
                  Manage user roles and permissions
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">System Settings</h3>
                <p className="text-gray-600">
                  Configure system-wide settings
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};