import React from 'react';
import { Mail, MapPin, Phone, Gamepad, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brew-900 relative text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(#fbbf24 1px, transparent 1px)",
          backgroundSize: "20px 20px"
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="inline-block px-3 py-1 border border-amber-500/30 rounded-full text-amber-400 text-xs font-mono mb-4">OPEN FOR COLLAB</div>
            <h2 className="font-display text-5xl font-bold mb-6">Ready to Press Start?</h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              We are currently accepting new quests. Whether it's a high-fidelity Unity prototype, a Vision Pro app, or a custom AI agent, drop us a line. No NPCs here, just real devs.
            </p>

            <div className="space-y-8 font-mono">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-3 bg-black/30 border border-gray-700 rounded-lg text-amber-400 group-hover:border-amber-500 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Electronic Mail</p>
                  <p className="text-lg">hello@brewmonster.studio</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-3 bg-black/30 border border-gray-700 rounded-lg text-amber-400 group-hover:border-amber-500 transition-colors">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Discord / Slack</p>
                  <p className="text-lg">@brewmonster_dev</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-black/30 border border-gray-700 rounded-lg text-amber-400 group-hover:border-amber-500 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Base of Operations</p>
                  <p className="text-lg">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-sm p-8 lg:p-12 text-brew-900 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)] relative">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-[20px] border-r-[20px] border-amber-400"></div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold mb-2 text-gray-500 uppercase tracking-wider">Player 1 Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-none bg-gray-50 border-b-2 border-gray-200 focus:border-amber-500 focus:bg-white outline-none transition-all font-mono" placeholder="Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-2 text-gray-500 uppercase tracking-wider">Guild / Company</label>
                  <input type="text" className="w-full px-4 py-3 rounded-none bg-gray-50 border-b-2 border-gray-200 focus:border-amber-500 focus:bg-white outline-none transition-all font-mono" placeholder="Studio" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold mb-2 text-gray-500 uppercase tracking-wider">Contact Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-none bg-gray-50 border-b-2 border-gray-200 focus:border-amber-500 focus:bg-white outline-none transition-all font-mono" placeholder="name@domain.com" />
              </div>

              <div>
                <label className="block text-xs font-bold mb-2 text-gray-500 uppercase tracking-wider">Mission Type</label>
                <select className="w-full px-4 py-3 rounded-none bg-gray-50 border-b-2 border-gray-200 focus:border-amber-500 focus:bg-white outline-none transition-all font-mono">
                  <option>Select Quest...</option>
                  <option>Full Game Development</option>
                  <option>AR/VR Prototype</option>
                  <option>Unity Asset Creation</option>
                  <option>AI Integration</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold mb-2 text-gray-500 uppercase tracking-wider">Briefing</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-none bg-gray-50 border-b-2 border-gray-200 focus:border-amber-500 focus:bg-white outline-none transition-all font-mono" placeholder="Tell us about your project specs..."></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-amber-400 text-brew-900 font-bold hover:bg-amber-500 hover:shadow-lg transition-all transform hover:-translate-y-1 uppercase tracking-widest flex justify-center items-center">
                <Gamepad className="mr-2" size={20} /> Send It
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;