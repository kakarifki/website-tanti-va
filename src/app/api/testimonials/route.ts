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

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')

        if (!id) {
            return NextResponse.json(
                { error: 'Testimonial ID is required' },
                { status: 400 }
            )
        }

        await prisma.testimonial.delete({
            where: { id }
        })

        return NextResponse.json({ message: 'Testimonial deleted successfully' })
    } catch (error) {
        console.error('Error deleting testimonial:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { type, name, profession, feedback } = body

        // Validate required fields
        if (!type || !name || !profession || !feedback) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Create new testimonial
        const testimonial = await prisma.testimonial.create({
            data: {
                type,
                name,
                profession,
                feedback
            }
        })

        return NextResponse.json(testimonial, { status: 201 })
    } catch (error) {
        console.error('Error creating testimonial:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}