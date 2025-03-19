'use client';

import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { type Testimonial } from '@prisma/client';

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

export default function RecentTestimonials() {
  const { data: testimonials, isLoading, error } = useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
    retry: 1,
  });

  if (isLoading) {
    return (
      <div className="text-gray-600">Loading...</div>
    );
  }

  const recentTestimonials = testimonials?.slice(0, 5) || [];

  return (
    <div className="p-4 border rounded-lg overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Recent Testimonials</h2>
      {error ? (
        <p className="text-red-600">{error instanceof Error ? error.message : 'An error occurred'}</p>
      ) : recentTestimonials.length > 0 ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profession</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feedback</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentTestimonials.map((testimonial: Testimonial) => (
              <tr key={testimonial.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{testimonial.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{testimonial.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{testimonial.profession}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {testimonial.feedback.length > 100
                    ? `${testimonial.feedback.substring(0, 100)}...`
                    : testimonial.feedback}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {format(new Date(testimonial.createdAt), 'MMM d, yyyy')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No recent testimonials found.</p>
      )}
    </div>
  );
}