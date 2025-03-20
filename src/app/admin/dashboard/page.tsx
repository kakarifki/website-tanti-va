'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RecentRegistrations from '../components/RecentRegistrations';
import RecentTestimonials from '../components/RecentTestimonials';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);



  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => router.push('/admin/users')}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                All Users
              </button>
              <button
                onClick={() => router.push('/admin/testimonials')}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                All Testimonials
              </button>
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
          </div>
          
          <div className="space-y-4">
            <RecentRegistrations />
            <RecentTestimonials />
            

          </div>
        </div>
      </div>
    </div>
  );
}