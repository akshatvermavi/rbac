import React from 'react';
import { Layout } from '../components/Layout';

export function Dashboard() {
  return (
    <Layout>
      <div className="bg-dark-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Welcome to Dashboard</h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </Layout>
  );
}