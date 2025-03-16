'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <button
              onClick={() => {
                localStorage.removeItem('adminToken');
                router.push('/admin/login');
              }}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Recent Registrations</h2>
              <p className="text-gray-600">Coming soon...</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded transition-colors">
                  View All Users
                </button>
                <button className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded transition-colors">
                  Export Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}