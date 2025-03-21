import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center bg-white pt-20 md:pt-0" id="hero">
            <div className="container mx-auto px-4 py-12 md:py-0">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left md:w-1/2">
                        <h1 className="text-4xl font-bold mb-4">Let&apos;s make your business shine</h1>
                        <p className="text-lg text-gray-600">
                            A Virtual Assistant can help you manage your daily tasks efficiently,
                            so you can focus on growing your business.
                        </p>
                        <Link
                            href="/register?type=discovery"
                            className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Book 30 Minutes Discovery Call
                        </Link>
                    </div>

                    <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                        <Image
                            src="https://ucarecdn.com/cf3fad11-5a19-4e42-a62f-0b576696add5/Profil.png"
                            alt="Virtual Assistant"
                            width={400}
                            height={400}
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
