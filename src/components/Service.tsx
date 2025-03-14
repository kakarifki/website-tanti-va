const services = [
    {
        title: 'Administrative Support',
        description: 'Handling emails, scheduling, data entry, and other administrative tasks to keep your business organized.',
    },
    {
        title: 'Social Media Management',
        description: 'Creating, scheduling, and managing social media content to grow your online presence.',
    },
    {
        title: 'Customer Support',
        description: 'Providing exceptional support to your customers via email, chat, or phone.',
    },
    {
        title: 'Content Creation',
        description: 'Writing blog posts, newsletters, and other copywriting needs to engage your audience.',
    },
]

export default function Services() {
    return (
        <section className="py-12 pt-24 bg-gray-100" id="services">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}