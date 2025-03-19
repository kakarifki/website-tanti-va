import { prisma } from '@/lib/prisma'

async function getAllTestimonials() {
    return await prisma.testimonial.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
}

export default async function TestimonialsPage() {
    const testimonials = await getAllTestimonials()

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 pt-24">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">All Testimonials</h1>
                <a 
                    href="/admin/dashboard"
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                >
                    Back to Dashboard
                </a>
            </div>

            <div className="space-y-4">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 italic mb-3">&ldquo;{testimonial.feedback}&rdquo;</p>
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                            <div className="text-sm text-gray-500">
                                {new Date(testimonial.createdAt).toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}