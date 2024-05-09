import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-12 mt-12 border-t-2">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Ceramics Arena</h2>
                        <p className="mt-2">Ceramics Arena: Where Craftsmanship Meets Creativity!</p>
                    </div>
                    <div className="md:w-1/3">
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/3">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400">991 SSK Road, Feni</p>
                        <p className="text-gray-400">ceramics@arena.com</p>
                        <p className="text-gray-400">+1 234-567-8901</p>
                    </div>
                </div>
                <hr className="border-gray-800 my-8" />
                <div className="text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Ceramics Arena. All Rights Reserved.</p>
                    <p>Terms of Service | Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;