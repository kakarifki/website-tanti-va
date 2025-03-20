'use client'

import TestimonialCard from './TestimonialCard'
import { useEffect, useState, useRef } from 'react'
import { type Testimonial } from '@prisma/client'

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    // const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

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

    const handleScroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollAmount = 350; // Width of one card
            const currentScroll = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            
            const newScroll = direction === 'left' 
                ? Math.max(0, currentScroll - scrollAmount)
                : Math.min(maxScroll, currentScroll + scrollAmount);
            
            container.scrollTo({
                left: newScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-8 pt-16 md:py-12 md:pt-24 bg-white overflow-hidden" id="testimonials">
            <div className="container mx-auto px-4 md:px-6 overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Testimonials</h2>
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
                    <div className="relative">
                        <button
                            onClick={() => handleScroll('left')}
                            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div
                            ref={containerRef}
                            className="grid grid-cols-1 gap-4 md:flex md:overflow-x-auto md:scrollbar-hide md:snap-x md:snap-mandatory md:scroll-smooth md:gap-6 pb-4 md:pb-0 cursor-grab active:cursor-grabbing sm:grid-cols-1 max-h-[500px] md:max-h-none overflow-y-auto md:overflow-y-visible snap-y snap-mandatory touch-pan-y md:touch-pan-x"
                            style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none' }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={`${testimonial.id}-${index}`} className="w-[85vw] sm:w-[280px] md:w-[350px] flex-shrink-0 snap-start">
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => handleScroll('right')}
                            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}</div>
            
            

        </section>
            )
}
