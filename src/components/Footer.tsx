'use client';

// import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-50 to-purple-50 pt-12 pb-6">
            <div className="container mx-auto px-4">
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    About Section
                    <div>
                        <h3 className="text-xl font-bold mb-4">Tanti Pujian</h3>
                        <p className="text-gray-600 mb-4">
                            Your dedicated Virtual Assistant helping businesses grow and succeed through efficient management and support.
                        </p>
                    </div>

                    {/* Quick Links */}
                    {/* <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#hero" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
                            <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a></li>
                            <li><a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a></li>
                            <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
                        </ul>
                    </div> */}

                    {/* Contact Info
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                        <div className="space-y-4">
                            <a 
                                href="mailto:your.email@example.com"
                                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <FaEnvelope className="text-blue-500" />
                                <span>your.email@example.com</span>
                            </a>
                            <a 
                                href="https://instagram.com/yourinstagram"
                                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="text-pink-500" />
                                <span>@yourinstagram</span>
                            </a>
                            <a 
                                href="https://linkedin.com/in/yourlinkedin"
                                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="text-blue-700" />
                                <span>LinkedIn Profile</span>
                            </a>
                        </div>
                    </div>
                </div> */}

                {/* Copyright */}
                <div className="border-t border-gray-200 pt-6">
                    <p className="text-center text-gray-600 text-sm">
                        © {new Date().getFullYear()} Tanti Pujian. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}