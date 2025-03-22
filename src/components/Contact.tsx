import { FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Contacts() {
    return (
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-purple-50" id="contact">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-800">
                    Get in Touch
                </h2>

                <div className="flex flex-col items-center space-y-6 md:space-y-8">
                    <p className="text-base md:text-lg text-gray-600 text-center max-w-2xl">
                        I&apos;d love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out through any of the platforms below.
                    </p>

                    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 w-full md:w-auto">
                        {/* Email */}
                        <a 
                            href="mailto:tantipujian@gmail.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-3 bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full md:w-auto">
                            <FaEnvelope size={24} className="text-blue-500" />
                            <span className="text-gray-700 font-medium">Email</span>
                        </a>

                        {/* Instagram */}
                        <a 
                            href="https://www.instagram.com/tantipujian" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-3 bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full md:w-auto">
                            <FaInstagram size={24} className="text-pink-500" />
                            <span className="text-gray-700 font-medium">Instagram</span>
                        </a>

                        {/* LinkedIn */}
                        <a 
                            href="https://www.linkedin.com/in/tanti-pujianti" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-3 bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full md:w-auto">
                            <FaLinkedin size={24} className="text-blue-700" />
                            <span className="text-gray-700 font-medium">LinkedIn</span>
                        </a>

                        <a 
                        href="https://wa.me/6281573319882?text=Hi%20Tanti,%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20about%20your%20services."
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-3 bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full md:w-auto">
                        <FaWhatsapp size={24} className="text-green-500" />
                        <span className="text-gray-700 font-medium">WhatsApp</span>
                    </a>
                    </div>
                </div>
            </div>
        </section>
    );
}