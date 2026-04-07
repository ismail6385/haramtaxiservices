import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function SocialSidebar() {
    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col bg-white shadow-lg rounded-r-lg overflow-hidden border border-l-0 border-gray-200">
            <a
                href="https://www.facebook.com/people/Taxi-Service-KSA/61573850597962/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-blue-600 hover:text-white text-blue-600 transition-colors duration-300 flex items-center justify-center group relative"
                aria-label="Facebook"
            >
                <Facebook className="w-6 h-6" />
                <span className="absolute left-full ml-2 bg-white text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md border border-gray-100">
                    Facebook
                </span>
            </a>
            <a
                href="#"
                className="p-3 hover:bg-pink-600 hover:text-white text-pink-600 transition-colors duration-300 flex items-center justify-center group relative"
                aria-label="Instagram"
            >
                <Instagram className="w-6 h-6" />
                <span className="absolute left-full ml-2 bg-white text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md border border-gray-100">
                    Instagram
                </span>
            </a>
            <a
                href="#"
                className="p-3 hover:bg-sky-500 hover:text-white text-sky-500 transition-colors duration-300 flex items-center justify-center group relative"
                aria-label="Twitter"
            >
                <Twitter className="w-6 h-6" />
                <span className="absolute left-full ml-2 bg-white text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md border border-gray-100">
                    Twitter
                </span>
            </a>
            <a
                href="https://www.linkedin.com/company/taxi-service-ksa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-blue-700 hover:text-white text-blue-700 transition-colors duration-300 flex items-center justify-center group relative"
                aria-label="LinkedIn"
            >
                <Linkedin className="w-6 h-6" />
                <span className="absolute left-full ml-2 bg-white text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md border border-gray-100">
                    LinkedIn
                </span>
            </a>
            <a
                href="https://www.youtube.com/channel/UCeP44oxBUKUG5X-UhYmPMNw"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-red-600 hover:text-white text-red-600 transition-colors duration-300 flex items-center justify-center group relative"
                aria-label="YouTube"
            >
                <Youtube className="w-6 h-6" />
                <span className="absolute left-full ml-2 bg-white text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md border border-gray-100">
                    YouTube
                </span>
            </a>
            <a
                href="#"
                className="p-3 hover:bg-black hover:text-white text-black transition-colors duration-300 flex items-center justify-center group relative"
                aria-label="TikTok"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 0 3.96 2.54 2.89 2.89 0 0 0 1.74-2.89 2.1 2.1 0 0 0-.58-1.5 2.1 2.1 0 0 0-1.54-.6 2.1 2.1 0 0 0-.13 0 2.93 2.93 0 0 0-.88.13V9.4a6.84 6.84 0 0 1 5.01-1.91 6.84 6.84 0 0 1 .05 0A6.33 6.33 0 0 1 21 20.1a6.34 6.34 0 0 1-10.87 0 6.33 6.33 0 0 1 0-7v-7a8.16 8.16 0 0 1 4.77 1.52v-3.4a4.85 4.85 0 0 1 4.69 2.57 4.85 4.85 0 0 1-.01.1z" />
                </svg>
                <span className="absolute left-full ml-2 bg-white text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md border border-gray-100">
                    TikTok
                </span>
            </a>
            <a
                href="https://www.pinterest.com/taxiserviceksa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-red-700 hover:text-white text-red-700 transition-colors duration-300 flex items-center justify-center group relative"
                aria-label="Pinterest"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.72-.359-1.781c0-1.667.967-2.913 2.171-2.913 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.21-.015-.002-1.23-.574-1.23-2.705 0-2.259 1.641-4.334 4.735-4.334 2.486 0 4.413 1.771 4.413 4.173 0 7.41 2.967 7.41 6.923 0 4.168-1.336 7.505-1.336 7.505 0 2.46-.827 4.176-1.554 5.056-.583-.269-1.139-.712-1.139-1.733 0-1.233.817-2.467 1.234-3.537l.749-2.848c-.269 1.123-.345 2.306-.535 3.55.535 6.607 0 11.987-5.366 11.987-11.987C23.97 5.367 18.62 0 12.017 0z" />
                </svg>
                <span className="absolute left-full ml-2 bg-white text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md border border-gray-100">
                    Pinterest
                </span>
            </a>
        </div>
    );
}
