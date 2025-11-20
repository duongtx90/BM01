import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Cpu, ArrowUpRight, Wifi, Battery, Crosshair } from 'lucide-react';

const Virtualion: React.FC = () => {
  return (
    <section id="virtualion" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-black border border-gray-800 rounded-sm relative text-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
            backgroundImage: 'linear-gradient(#555 1px, transparent 1px), linear-gradient(90deg, #555 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
        }}></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Image Side / Viewport */}
            <div className="lg:col-span-7 relative min-h-[500px] bg-gray-900/50 border-r border-gray-800 group overflow-hidden">
                {/* Viewport Overlays */}
                <div className="absolute top-6 left-6 z-20 flex items-center space-x-2">
                    <div className="bg-red-500 w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
                    <span className="text-xs font-mono text-red-500 tracking-widest font-bold">REC ●</span>
                </div>
                <div className="absolute top-6 right-6 z-20 text-xs font-mono text-amber-500/70">
                    CAM_01 // ISO 800
                </div>
                
                {/* Corner Markers */}
                <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-white/30"></div>
                <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/30"></div>

                <img 
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
                    alt="Virtualion Hardware" 
                    className="w-full h-full object-cover filter grayscale contrast-125 opacity-60 group-hover:opacity-100 group-hover:grayscale-[50%] transition-all duration-700" 
                />
                
                {/* Scan Overlay */}
                <div className="absolute top-0 left-0 w-full h-1 bg-amber-500/50 blur-sm translate-y-[-10px] group-hover:translate-y-[500px] transition-transform duration-[2s] ease-linear z-10"></div>
            </div>

            {/* Data Side */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center relative z-10 bg-gradient-to-b from-black to-gray-900">
                <div className="flex justify-between items-start mb-8 border-b border-gray-800 pb-4">
                    <div>
                        <div className="text-amber-500 font-mono text-xs mb-2 tracking-widest">HARDWARE_PROTOTYPE</div>
                        <h2 className="font-display text-5xl font-bold text-white mb-1 tracking-tighter">VIRTUALION</h2>
                        <p className="font-mono text-gray-500 text-sm">MK-II HAPTIC INTERFACE</p>
                    </div>
                    <Scan className="text-amber-500 animate-spin-slow" size={40} />
                </div>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed font-sans border-l-2 border-amber-500 pl-4">
                    The missing link for true immersion. Our proprietary haptic controller bridges the gap between Unity physics and your fingertips. 
                </p>

                {/* Stats Grid */}
                <div className="bg-gray-900/50 p-6 rounded-sm border border-gray-800 mb-8 font-mono text-xs space-y-4">
                    <div>
                        <div className="flex justify-between items-center mb-1 text-gray-400">
                            <span>LATENCY_MS</span>
                            <span className="text-green-400 font-bold">4ms</span>
                        </div>
                        <div className="w-full bg-black h-1"><div className="bg-green-400 h-1 w-[98%] shadow-[0_0_5px_rgba(74,222,128,0.5)]"></div></div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1 text-gray-400">
                            <span>BATTERY_LIFE</span>
                            <span className="text-amber-400 font-bold">12h</span>
                        </div>
                        <div className="w-full bg-black h-1"><div className="bg-amber-400 h-1 w-[85%] shadow-[0_0_5px_rgba(251,191,36,0.5)]"></div></div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1 text-gray-400">
                            <span>HAPTIC_FEEDBACK</span>
                            <span className="text-blue-400 font-bold">DUAL_MOTOR</span>
                        </div>
                        <div className="w-full bg-black h-1"><div className="bg-blue-400 h-1 w-[100%] shadow-[0_0_5px_rgba(96,165,250,0.5)]"></div></div>
                    </div>
                </div>

                <button className="w-full bg-white hover:bg-amber-400 text-black font-bold py-4 px-6 uppercase tracking-wider flex justify-between items-center group transition-all clip-tech hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                    <span>Inspect Schematics</span>
                    <Crosshair className="group-hover:rotate-90 transition-transform" size={20} />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Virtualion;