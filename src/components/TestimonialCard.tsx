import { type Testimonial } from '@prisma/client'

interface TestimonialCardProps {
    testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 min-h-[300px] flex flex-col justify-between">
            <div className="flex-1">
                <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">{testimonial.type}</span>
                <p className="text-gray-700 italic text-lg leading-relaxed mb-6 break-words whitespace-normal">&quot;{testimonial.feedback}&quot;</p>
            </div>
            <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.profession}</p>
            </div>
        </div>
    )
}