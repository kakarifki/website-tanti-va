'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { useQuery, useQueryClient, QueryClient } from '@tanstack/react-query';
import DeleteModal from '@/components/DeleteModal';

interface Testimonial {
  id: string;
  type: string;
  name: string;
  profession: string;
  feedback: string;
  createdAt: string;
  updatedAt: string;
}



const deleteTestimonial = async (id: string, token: string, queryClient: QueryClient) => {
  const response = await fetch(`/api/testimonials?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  if (!response.ok) throw new Error('Failed to delete testimonial');
  await response.json();
  queryClient.invalidateQueries({ queryKey: ['testimonials'] });
};

const fetchTestimonials = async () => {
  const token = localStorage.getItem('adminToken');
  if (!token) {
    throw new Error('No token found');
  }
  
  const response = await fetch('/api/testimonials', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch testimonials');
  }
  
  return response.json();
};

export default function TestimonialsPage() {
  const router = useRouter();
  const [sortConfig, setSortConfig] = useState<{ key: keyof Testimonial; direction: 'asc' | 'desc' } | null>(null);
  const queryClient = useQueryClient();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [testimonialToDelete, setTestimonialToDelete] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  const { data: testimonials, isLoading, error } = useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
    retry: 1,
  });

  const sortedTestimonials = testimonials ? [...testimonials].sort((a, b) => {
    if (!sortConfig) return 0;
    
    const { key, direction } = sortConfig;
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
    return 0;
  }) : [];

  const requestSort = (key: keyof Testimonial) => {
    setSortConfig(current => {
      if (!current || current.key !== key) {
        return { key, direction: 'asc' };
      }
      return {
        key,
        direction: current.direction === 'asc' ? 'desc' : 'asc'
      };
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 pt-24 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-2xl font-bold text-gray-800">All Testimonials</h1>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => router.push('/admin/testimonials/add')}
                className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Add Testimonial
              </button>
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Back to Dashboard
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            {error ? (
              <p className="text-red-600">{error instanceof Error ? error.message : 'An error occurred'}</p>
            ) : sortedTestimonials.length > 0 ? (
              <div>
                <div className="hidden md:block">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        {['type', 'name', 'profession', 'feedback', 'createdAt'].map((column) => (
                          <th
                            key={column}
                            onClick={() => requestSort(column as keyof Testimonial)}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                          >
                            {column === 'createdAt' ? 'Date Created' : column.charAt(0).toUpperCase() + column.slice(1)}
                            {sortConfig?.key === column && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                          </th>
                        ))}
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {sortedTestimonials.map((testimonial: Testimonial) => (
                        <tr key={testimonial.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-900">{testimonial.type}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{testimonial.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{testimonial.profession}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{testimonial.feedback}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {format(new Date(testimonial.createdAt), 'MMM d, yyyy HH:mm')}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            <button
                              onClick={() => {
                                setTestimonialToDelete(testimonial.id);
                                setDeleteModalOpen(true);
                              }}
                              className="text-red-600 hover:text-red-800 transition-colors"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="md:hidden space-y-4">
                  {sortedTestimonials.map((testimonial: Testimonial) => (
                    <div key={testimonial.id} className="bg-white rounded-lg shadow p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-medium text-gray-900">{testimonial.name}</div>
                        <button
                          onClick={() => {
                            setTestimonialToDelete(testimonial.id);
                            setDeleteModalOpen(true);
                          }}
                          className="text-red-600 hover:text-red-800 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                      <div className="text-sm text-gray-600 mb-1">{testimonial.profession}</div>
                      <div className="text-sm text-gray-500 mb-2">{testimonial.type}</div>
                      <div className="text-sm text-gray-900 mb-2">{testimonial.feedback}</div>
                      <div className="text-xs text-gray-500">
                        {format(new Date(testimonial.createdAt), 'MMM d, yyyy HH:mm')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-600">No testimonials found.</p>
            )}
          </div>
        </div>
      </div>
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setTestimonialToDelete(null);
        }}
        onConfirm={async () => {
          if (!testimonialToDelete) return;
          const token = localStorage.getItem('adminToken');
          if (!token) {
            alert('No token found. Please login again.');
            return;
          }
          try {
            await deleteTestimonial(testimonialToDelete, token, queryClient);
            setDeleteModalOpen(false);
            setTestimonialToDelete(null);
          } catch (error) {
            console.error('Error deleting testimonial:', error);
            alert('Failed to delete testimonial');
          }
        }}
        title="Delete Testimonial"
        message="Are you sure you want to delete this testimonial? This action cannot be undone."
      />
    </div>
  );
}