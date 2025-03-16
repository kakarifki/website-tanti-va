'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function Register() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // TODO: Save form data to database
      // This will be implemented when the backend is created
      // Example implementation:
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      // 
      // if (!response.ok) throw new Error('Failed to register');
      
      // For now, just redirect to success page
      router.push('/register/success');
    } catch (error) {
      console.error('Registration error:', error);
      // Handle error state here
    }
  };

  return (
    <div className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Registration Form
        </h1>
        
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-lg shadow-lg p-6 md:p-8"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { 
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' }
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Email is invalid'
                }
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <div className="flex">
              <div className="bg-gray-100 flex items-center justify-center px-3 border border-r-0 border-gray-300 rounded-l-lg">
                <span className="text-gray-500">+62</span>
              </div>
              <input
                type="text"
                id="phone"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{8,12}$/,
                    message: 'Phone number must be 8-12 digits'
                  }
                })}
                className={`flex-1 px-4 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="8123456789"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
            <p className="text-gray-500 text-xs mt-1">Enter numbers only without the leading zero</p>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}