import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
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
  matcher: '/register/success',
};