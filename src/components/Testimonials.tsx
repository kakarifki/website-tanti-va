'use client'

import TestimonialCard from './TestimonialCard'
import { useEffect, useState } from 'react'
import { type Testimonial } from '@prisma/client'

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchTestimonials() {
            try {
                const response = await fetch('/api/testimonials');
                if (!response.ok) {
                    throw new Error('Failed to fetch testimonials');
                }
                const data = await response.json();
                setTestimonials(data);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setIsLoading(false);
            }
        }
        fetchTestimonials();
    }, [])

    return (
        <section className="py-12 pt-24 bg-white" id="testimonials">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                {isLoading && (
                    <div className="text-center py-8">
                        <p>Loading testimonials...</p>
                    </div>
                )}
                {error && (
                    <div className="text-center py-8 text-red-500">
                        <p>{error}</p>
                    </div>
                )}
                {!isLoading && !error && testimonials.length > 0 && (
                    <div className="overflow-hidden relative">
                        <div className="flex animate-scroll whitespace-nowrap">
                            {[...testimonials, ...testimonials].map((testimonial, index) => (
                                <div key={`${testimonial.id}-${index}`} className="w-[350px] flex-shrink-0 px-3">
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}</div>
            
            
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
            )
}
