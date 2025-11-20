import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    { id: 1, title: "Neon Runner", category: "VR Experience", img: "https://images.unsplash.com/photo-1616499615673-924110a02126?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, title: "Artifact Hunt", category: "AR Mobile Game", img: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, title: "Jewel Heist", category: "Unity PC", img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, title: "Space Station Delta", category: "Vision Pro", img: "https://images.unsplash.com/photo-1581822261290-991b732853fe?q=80&w=1000&auto=format&fit=crop" },
    { id: 5, title: "Dragon's Eye", category: "3D Asset Pack", img: "https://images.unsplash.com/photo-1601158935942-52255782d322?q=80&w=1000&auto=format&fit=crop" },
    { id: 6, title: "Metropolis AI", category: "Tech Demo", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop" },
  ];

  return (
    <div className="pt-24 pb-12 bg-[#121212] min-h-screen text-white">
      <section className="max-w-7xl mx-auto px-4 mb-16">
         <span className="text-amber-500 font-mono tracking-widest text-sm mb-2 block">COMPLETED_RAIDS</span>
         <h1 className="font-display text-6xl font-bold mb-6">Quest Log</h1>
         <div className="h-px w-full bg-gray-800"></div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative aspect-[4/5] overflow-hidden border border-gray-800 bg-gray-900 cursor-pointer"
                >
                    <img 
                        src={project.img} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6">
                        <div className="text-amber-500 font-mono text-xs mb-1">{project.category}</div>
                        <h3 className="font-display text-3xl font-bold text-white mb-4">{project.title}</h3>
                        <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                            <button className="flex items-center text-sm font-bold hover:text-amber-400">
                                <PlayCircle size={16} className="mr-2" /> TRAILER
                            </button>
                            <button className="flex items-center text-sm font-bold hover:text-amber-400">
                                <ExternalLink size={16} className="mr-2" /> CASE STUDY
                            </button>
                        </div>
                    </div>

                    {/* Tech Overlay */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[10px] font-mono">
                        RELEASED
                    </div>
                </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;