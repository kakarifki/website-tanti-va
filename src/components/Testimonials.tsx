// src/components/Testimonials.tsx

export default function Testimonials() {
    const testimonials = [
        {
            name: 'John Doe',
            feedback: 'Working with this Virtual Assistant has been a game-changer for my business. Highly recommended!',
            company: 'Acme Corp'
        },
        {
            name: 'Jane Smith',
            feedback: 'Amazing service! Professional, reliable, and extremely helpful.',
            company: 'Beta Solutions'
        },
        {
            name: 'Michael Johnson',
            feedback: 'I can now focus on growing my business while the administrative work is handled seamlessly.',
            company: 'Gamma Enterprises'
        }
    ]

    return (
        <section className="py-12 bg-white" id="testimonials">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-gray-100 shadow-md rounded-xl hover:shadow-lg transition">
                            <p className="text-gray-600 italic">&quot;{testimonial.feedback}&quot;</p>
                            <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
                            <p className="text-gray-500">{testimonial.company}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
