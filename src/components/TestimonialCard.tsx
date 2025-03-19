import { type Testimonial } from '@prisma/client'

interface TestimonialCardProps {
    testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-200">
            <p className="text-gray-700 italic text-lg leading-relaxed mb-6">&quot;{testimonial.feedback}&quot;</p>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <span className="text-sm text-gray-500">
                    {new Date(testimonial.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    })}
                </span>
            </div>
        </div>
    )
}