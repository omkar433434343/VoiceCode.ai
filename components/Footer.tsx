import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                    <div className="w-10 h-10 rounded-full bg-[#B9FF66]/10 flex items-center justify-center">
                        <i className="fas fa-headset text-brand-green"></i>
                    </div>
                    <span className="text-xl font-bold">VoiceCode AI</span>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0 text-gray-400">
                    <a href="#" className="hover:text-brand-green transition">Privacy</a>
                    <a href="#" className="hover:text-brand-green transition">Terms</a>
                    <a href="#" className="hover:text-brand-green transition">Support</a>
                    <a href="#" className="hover:text-brand-green transition">Blog</a>
                </div>
                <div className="flex space-x-4 text-gray-400">
                    <a href="#" className="hover:text-brand-green transition text-xl"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="hover:text-brand-green transition text-xl"><i className="fab fa-github"></i></a>
                    <a href="#" className="hover:text-brand-green transition text-xl"><i className="fab fa-discord"></i></a>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-8">
                © 2024 VoiceCode AI. Empowering developers through natural conversation.
            </div>
        </div>
    </footer>
  );
};

export default Footer;
