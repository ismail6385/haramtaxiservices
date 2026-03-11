import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function SocialSidebar() {
    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col bg-white shadow-lg rounded-r-lg overflow-hidden border border-l-0 border-gray-200">
            <a
                href="https://www.facebook.com/people/Taxi-Service-KSA/61573850597962/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-blue-600 hover:text-white text-blue-600 transition-colors duration-300 flex items-center justify-center group relative"
                title="Facebook"
            >
                <Facebook className="w-6 h-6" />
                <span className="absolute left-full ml-2 bg-white text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Facebook
                </span>
            </a>
            <a
                href="#"
                className="p-3 hover:bg-pink-600 hover:text-white text-pink-600 transition-colors duration-300 flex items-center justify-center group relative"
                title="Instagram"
            >
                <Instagram className="w-6 h-6" />
                <span className="absolute left-full ml-2 bg-white text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Instagram
                </span>
            </a>
            <a
                href="#"
                className="p-3 hover:bg-sky-500 hover:text-white text-sky-500 transition-colors duration-300 flex items-center justify-center group relative"
                title="Twitter"
            >
                <Twitter className="w-6 h-6" />
                <span className="absolute left-full ml-2 bg-white text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Twitter
                </span>
            </a>
            <a
                href="https://www.linkedin.com/company/taxi-service-ksa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-blue-700 hover:text-white text-blue-700 transition-colors duration-300 flex items-center justify-center group relative"
                title="LinkedIn"
            >
                <Linkedin className="w-6 h-6" />
                <span className="absolute left-full ml-2 bg-white text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    LinkedIn
                </span>
            </a>
            <a
                href="https://www.youtube.com/channel/UCeP44oxBUKUG5X-UhYmPMNw"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-red-600 hover:text-white text-red-600 transition-colors duration-300 flex items-center justify-center group relative"
                title="YouTube"
            >
                <Youtube className="w-6 h-6" />
                <span className="absolute left-full ml-2 bg-white text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    YouTube
                </span>
            </a>
            <a
                href="#"
                className="p-3 hover:bg-white hover:text-white text-black transition-colors duration-300 flex items-center justify-center group relative"
                title="TikTok"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 Get QuoteGet QuoteV2h-3.45v13.67a2.89 2.89 0 0 Get Quote 1.74 2.89 2.89 0 0 1 2.Get Quote 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 Get Quote-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.Get Quotev-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 Get Quote-.1z" />
                </svg>
                <span className="absolute left-full ml-2 bg-white text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    TikTok
                </span>
            </a>
            <a
                href="https://www.pinterest.com/taxiserviceksa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-red-700 hover:text-white text-red-700 transition-colors duration-300 flex items-center justify-center group relative"
                title="Pinterest"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.Get QuoteGet Quote-.937 1.Get Quote 1.Get Quotes-.359-.72-.Get QuotecGet QuoteGet Quote 2.Get Quote 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.Get Quote 3.Get Quote Get QuoteGet QuoteGet QuoteGet QuoteGet QuoteGet Quote Get Quote 2.Get Quote 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.Get Quote-.Get QuoteGet QuoteGet QuoteGet Quote Get Quote 2.Get Quote 7.Get Quote 4.173 0 7.41 2.967 7.41 6.923 0 4.Get Quote 7.Get Quote 7.Get Quote Get Quote-.Get QuoteGet Quotel-.749 2.848c-.269 1.Get Quote 2.Get Quote 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.Get Quote 11.Get QuoteC23.97 5.367 18.62 0 12.017 0z" />
                </svg>
                <span className="absolute left-full ml-2 bg-white text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Pinterest
                </span>
            </a>
        </div>
    );
}
