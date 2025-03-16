import Link from 'next/link';

export default function RegistrationSuccess() {
  return (
    <div className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-md text-center">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
          <div className="w-16 h-16 bg-green-100 mx-auto rounded-full flex items-center justify-center mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-green-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Registration Successful!
          </h1>
          
          <p className="text-gray-600 mb-6">
            You have successfully registered. Thank you for your submission.
          </p>
          
          <Link 
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}