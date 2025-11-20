import React from 'react';
import { Sword, Scroll, Coins, ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
  const jobs = [
    { id: 1, title: "Senior Unity Developer", type: "Remote", xp: "5000 XP", loot: "$120k - $160k" },
    { id: 2, title: "3D Character Artist", type: "On-site (SF)", xp: "4000 XP", loot: "$100k - $140k" },
    { id: 3, title: "AI Prompt Engineer", type: "Hybrid", xp: "3500 XP", loot: "$90k - $130k" },
    { id: 4, title: "Backend Wizard (Node.js)", type: "Remote", xp: "4500 XP", loot: "$110k - $150k" }
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen bg-brew-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#451a03 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
         <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-amber-500/20 border border-amber-500 text-amber-500 rounded-full text-xs font-mono font-bold mb-4 animate-pulse">Recruitment Active</span>
            <h1 className="font-display text-6xl font-bold mb-4">Join the Party</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                We are looking for high-level adventurers to join our guild. Equip your best gear and prepare for the raid.
            </p>
         </div>

         <div className="space-y-4">
            {jobs.map((job) => (
                <div key={job.id} className="group bg-black/40 border border-amber-900/50 p-6 rounded-lg hover:border-amber-500 transition-all hover:bg-black/60 flex flex-col md:flex-row items-center justify-between cursor-pointer">
                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                        <div className="p-3 bg-brew-900 rounded-lg text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform">
                            <Sword size={24} />
                        </div>
                        <div>
                            <h3 className="font-display text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">{job.title}</h3>
                            <div className="flex items-center space-x-4 text-sm font-mono text-gray-500 mt-1">
                                <span className="flex items-center"><Scroll size={12} className="mr-1"/> {job.type}</span>
                                <span className="flex items-center text-amber-600"><Coins size={12} className="mr-1"/> {job.loot}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
                        <div className="text-right hidden md:block">
                            <div className="text-xs text-gray-500 uppercase tracking-wider">Reward</div>
                            <div className="text-amber-400 font-mono font-bold">{job.xp}</div>
                        </div>
                        <button className="px-6 py-2 bg-amber-500 text-brew-950 font-bold uppercase tracking-wider text-sm hover:bg-amber-400 transition-colors clip-tech flex items-center">
                            Accept Quest <ArrowRight size={16} className="ml-2" />
                        </button>
                    </div>
                </div>
            ))}
         </div>

         <div className="mt-16 text-center border-t border-gray-800 pt-8">
             <p className="text-gray-500">Don't see your class listed?</p>
             <a href="mailto:jobs@brewmonster.studio" className="text-amber-500 hover:text-amber-300 font-bold border-b border-amber-500 hover:border-amber-300 transition-all">Send us your character sheet (Resume)</a>
         </div>
      </div>
    </div>
  );
};

export default Careers;