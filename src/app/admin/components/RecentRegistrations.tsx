'use client';

import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { User } from '../dashboard/types';

const fetchUsers = async () => {
  const cookies = document.cookie.split(';');
  const adminTokenCookie = cookies.find(cookie => cookie.trim().startsWith('adminToken='));
  const token = adminTokenCookie ? adminTokenCookie.split('=')[1].trim() : null;
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

export default function RecentRegistrations() {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    retry: 1,
  });

  if (isLoading) {
    return (
      <div className="text-gray-600">Loading...</div>
    );
  }

  return (
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
  );
}