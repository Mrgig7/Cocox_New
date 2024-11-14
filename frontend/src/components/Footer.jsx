import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowUp, faHome, faBoxOpen, faInfoCircle, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-800 text-white py-10 px-5 relative">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-5 md:space-y-0">
                <div className="flex flex-col items-start space-y-3">
                    <img src="/path/to/logo.png" alt="Company Logo" className="w-20" />
                    <p className="text-gray-400 text-sm">
                        We manufacture 100% natural, superior Coco Coir products, delivering premium value to our customers.
                    </p>
                </div>

                {/* Vertical Navigation Links with Icons */}
                <div className="space-y-3">
                    <a href="/" className="flex items-center space-x-2 text-white hover:text-green-500">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </a>
                    <a href="/products" className="flex items-center space-x-2 text-white hover:text-green-500">
                        <FontAwesomeIcon icon={faBoxOpen} /> <span>Products</span>
                    </a>
                    <a href="/about-us" className="flex items-center space-x-2 text-white hover:text-green-500">
                        <FontAwesomeIcon icon={faInfoCircle} /> <span>About Us</span>
                    </a>
                    <a href="/contact" className="flex items-center space-x-2 text-white hover:text-green-500">
                        <FontAwesomeIcon icon={faPhone} /> <span>Contact</span>
                    </a>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 text-gray-400 text-sm">
                    <p>No.14/2, Nehru Nagar East, Coimbatore, Tamil Nadu, India – 641014</p>
                    <p><FontAwesomeIcon icon={faEnvelope} className="text-green-500 mr-2" /> contact@cococoir.com</p>
                    <div className="flex space-x-4 mt-3">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-xs mt-8 border-t border-gray-600 pt-4">
                © 2024 CocoCoir. All Rights Reserved.
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out"
                    aria-label="Scroll to top"
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
        </footer>
    );
};

export default Footer;
