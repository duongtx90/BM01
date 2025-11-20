import React from 'react';
import { Gamepad2, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brew-950 text-white py-12 border-t border-brew-800 bg-[#2d1b18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-6">
              <div className="bg-white/10 p-2 rounded-lg text-amber-400">
                <Gamepad2 size={24} />
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                Brew <span className="text-amber-500">Monster</span>
              </span>
            </a>
            <p className="text-gray-400 max-w-sm">
              Pushing the boundaries of what's possible in digital entertainment. 
              We blend art, code, and AI to create unforgettable realities.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-400">Products</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#virtualion" className="hover:text-white transition-colors">Virtualion AR</a></li>
              <li><a href="#jewelry" className="hover:text-white transition-colors">3D Jewelry Assets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Unity Tools</a></li>
              <li><a href="#ai-lab" className="hover:text-white transition-colors">Brew AI Agents</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-400">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brew-800 flex items-center justify-center hover:bg-amber-500 hover:text-brew-900 transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brew-800 flex items-center justify-center hover:bg-amber-500 hover:text-brew-900 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brew-800 flex items-center justify-center hover:bg-amber-500 hover:text-brew-900 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brew-800 flex items-center justify-center hover:bg-amber-500 hover:text-brew-900 transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-brew-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Brew Monster Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-400">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;