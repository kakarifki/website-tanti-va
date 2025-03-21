'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegistrationSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Check if user has completed registration
    const registrationComplete = document.cookie.includes('registration_complete=true');
    if (!registrationComplete) {
      router.push('/register');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#d8e8e0] to-[#b4d2c3] py-20 md:py-24">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-[#b4d2c3] rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Thank You!
          </h1>
          <p className="text-gray-600 text-lg mb-12">
            Your registration has been successfully completed.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              href="https://calendly.com/tantipujian/30min"
              className="block w-full bg-[#b4d2c3] hover:bg-[#9fc3b1] text-white font-semibold py-4 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Book Discovery Call
            </Link>
            <Link
              href="/"
              className="block w-full bg-white border-2 border-[#b4d2c3] text-[#b4d2c3] hover:bg-[#b4d2c3] hover:text-white font-semibold py-4 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Back to Home
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            We look forward to speaking with you during the discovery call!
          </p>
        </div>
      </div>
    </div>
  );
}