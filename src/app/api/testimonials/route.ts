import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    const testimonials = await prisma.testimonial.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return NextResponse.json(testimonials)
}