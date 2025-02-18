const testimonials = [
    {
        name: 'John Doe',
        feedback: 'This Virtual Assistant service has transformed my business. Highly recommended!',
    },
    {
        name: 'Jane Smith',
        feedback: 'Professional, efficient, and reliable. A fantastic experience working together!',
    },
    {
        name: 'Michael Johnson',
        feedback: 'I can now focus on what I do best, knowing that the administrative side is handled perfectly.',
    },
]

export default function Testimonials() {
    return (
        <section className="py-12 bg-white" id="testimonials">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-gray-100 shadow-md rounded-xl">
                            <p className="text-gray-700 italic">&quot;{testimonial.feedback}&quot;</p>
                            <h3 className="text-lg font-semibold mt-4">{testimonial.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
