import { type Testimonial } from '@prisma/client'

interface TestimonialCardProps {
    testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div className="p-4 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 min-h-[250px] md:min-h-[300px] flex flex-col justify-between">
            <div className="flex-1">
                <span className="inline-block px-2 md:px-3 py-1 text-xs md:text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-3 md:mb-4">{testimonial.type.toUpperCase()}</span>
                <p className="text-gray-700 italic text-base md:text-lg leading-relaxed mb-4 md:mb-6 break-words whitespace-normal">&quot;{testimonial.feedback}&quot;</p>
            </div>
            <div className="space-y-1 md:space-y-2">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm md:text-base text-gray-600">{testimonial.profession}</p>
            </div>
        </div>
    )
}