import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number format (8-12 digits)
    const phoneRegex = /^[0-9]{8,12}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Phone number must be 8-12 digits' },
        { status: 400 }
      );
    }

    // Create new user in database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    // Handle unique constraint violation
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      );
    }

    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}