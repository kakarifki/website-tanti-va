import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contacts() {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50" id="contact">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Get in Touch</h2>

                <div className="flex flex-col items-center space-y-8">
                    <p className="text-lg text-gray-600 text-center max-w-2xl">
                        I&apos;d love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out through any of the platforms below.
                    </p>

                    <div className="flex space-x-8">
                        {/* Email */}
                        <a 
                            href="mailto:your.email@example.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <FaEnvelope size={28} className="text-blue-500" />
                            <span className="text-gray-700 font-medium">Email</span>
                        </a>

                        {/* Instagram */}
                        <a 
                            href="https://instagram.com/yourinstagram" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <FaInstagram size={28} className="text-pink-500" />
                            <span className="text-gray-700 font-medium">Instagram</span>
                        </a>

                        {/* LinkedIn */}
                        <a 
                            href="https://linkedin.com/in/yourlinkedin" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <FaLinkedin size={28} className="text-blue-700" />
                            <span className="text-gray-700 font-medium">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}