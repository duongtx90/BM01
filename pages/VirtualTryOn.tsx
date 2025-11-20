import React, { useState, useEffect } from 'react';
import { Camera, RefreshCw, Maximize, Aperture } from 'lucide-react';

const VirtualTryOn: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-24 pb-12 bg-black min-h-screen text-white flex flex-col items-center">
      <div className="w-full max-w-4xl px-4">
         <div className="text-center mb-8">
             <h1 className="font-display text-3xl font-bold mb-2">Mirror Protocol <span className="text-amber-500 text-xs font-mono align-top">BETA</span></h1>
             <p className="text-gray-400 text-sm">Allow camera access to initialize AR overlay.</p>
         </div>

         <div className="relative aspect-[4/3] bg-gray-900 border-2 border-gray-800 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(251,191,36,0.1)]">
            
            {/* Loading State */}
            {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black">
                    <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <div className="font-mono text-amber-500 animate-pulse">INITIALIZING_SENSORS...</div>
                </div>
            )}

            {/* Simulated Camera Feed */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop" 
                    alt="Camera Feed" 
                    className="w-full h-full object-cover opacity-60 filter sepia-[0.3]" 
                />
                {/* Scanlines */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            {/* AR Overlay UI */}
            <div className="absolute inset-0 z-10 pointer-events-none p-8 flex flex-col justify-between">
                {/* Top HUD */}
                <div className="flex justify-between items-start">
                    <div className="text-xs font-mono text-green-400">
                        FACE_TRACKING: <span className="animate-pulse">ACTIVE</span><br/>
                        LIGHT_LEVEL: 84%
                    </div>
                    <div className="w-32 h-1 bg-gray-800"><div className="w-2/3 h-full bg-green-500"></div></div>
                </div>

                {/* Face Target Box */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 border border-amber-500/30 rounded-3xl">
                     <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500"></div>
                     <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500"></div>
                     <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500"></div>
                     <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500"></div>
                     
                     {/* Floating Product */}
                     {!loading && (
                        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
                             <img src="https://images.unsplash.com/photo-1605100804763-eb2fc6036724?q=80&w=200&auto=format&fit=crop" className="w-24 h-24 rounded-full border-2 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.6)]" alt="Jewelry" />
                        </div>
                     )}
                </div>

                {/* Bottom Controls */}
                <div className="flex justify-center space-x-8 pointer-events-auto">
                    <button className="w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center hover:bg-white/20 text-white"><RefreshCw size={20}/></button>
                    <button className="w-16 h-16 rounded-full bg-amber-500 border-4 border-amber-300 flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:scale-105 transition-transform"><Camera size={24} className="text-black"/></button>
                    <button className="w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center hover:bg-white/20 text-white"><Maximize size={20}/></button>
                </div>
            </div>
         </div>

         <div className="mt-8 flex justify-center space-x-4 overflow-x-auto pb-4">
             {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="w-20 h-20 bg-gray-800 rounded-lg border-2 border-gray-700 hover:border-amber-500 cursor-pointer shrink-0 overflow-hidden relative group">
                     <img src={`https://images.unsplash.com/photo-1605100804763-eb2fc6036724?q=80&w=100&auto=format&fit=crop`} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"/>
                 </div>
             ))}
         </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;