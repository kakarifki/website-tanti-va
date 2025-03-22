import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is for an admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip authentication check for the login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Get the admin token from cookies
    const adminToken = request.cookies.get('adminToken');

    // If no admin token is present, redirect to login
    if (!adminToken) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Check if the user is trying to access the success page
  if (request.nextUrl.pathname === '/register/success') {
    // Get the registration status from the cookie
    const registrationComplete = request.cookies.get('registration_complete');

    // If registration is not complete, redirect to the registration page
    if (!registrationComplete) {
      return NextResponse.redirect(new URL('/register', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/register/success'
  ]
};