import React from 'react';
import { Layout } from '../components/Layout';
import { 
  ShieldCheck, 
  Rocket, 
  Globe2, 
  Fingerprint, 
  CloudLightning, 
  Users
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Advanced Security",
      description: "Enterprise-grade security with end-to-end encryption and multi-factor authentication to keep your data safe."
    },
    {
      icon: Rocket,
      title: "Lightning Fast",
      description: "Optimized performance with blazing-fast load times and real-time updates for seamless user experience."
    },
    {
      icon: Globe2,
      title: "Global CDN",
      description: "Distributed content delivery network ensures fast access from anywhere in the world."
    },
    {
      icon: Fingerprint,
      title: "Biometric Auth",
      description: "Support for modern authentication methods including fingerprint and face recognition."
    },
    {
      icon: CloudLightning,
      title: "Smart Sync",
      description: "Intelligent synchronization keeps your data up-to-date across all devices automatically."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in tools for seamless team collaboration and real-time communication."
    }
  ];

  return (
    <Layout>
      <div className="bg-dark-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="p-6 bg-dark-700 rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 mb-4">
                  <Icon className="h-6 w-6 text-indigo-500" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-3">{feature.title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}