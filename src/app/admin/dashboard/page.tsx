'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { User } from './types';

const fetchUsers = async () => {
  const token = localStorage.getItem('adminToken');
  if (!token) {
    throw new Error('No token found');
  }
  
  const response = await fetch('/api/admin/users', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  
  return response.json();
};

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    retry: 1,
  });



  if (isLoading) {
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
            <div className="p-4 border rounded-lg overflow-x-auto">
              <h2 className="text-lg font-semibold mb-4">Recent Registrations</h2>
              {error ? (
                <p className="text-red-600">{error ? (error instanceof Error ? error.message : 'An error occurred') : null}</p>
              ) : users.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user: User) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {format(new Date(user.createdAt), 'MMM d, yyyy HH:mm')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-600">No recent registrations found.</p>
              )}
            </div>
            
            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
              <div className="space-y-2">
                <button
                onClick={() => router.push('/admin/users')}
                className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded transition-colors"
              >
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