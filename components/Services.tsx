import React from 'react';
import { Glasses, Layers, Brain, Box, Smartphone, Database, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    { 
      icon: Glasses, 
      title: "Vision Pro", 
      subtitle: "SPATIAL COMPUTING",
      desc: "Building immersive OS environments. Gaze & pinch interaction models perfected.", 
      level: "LVL 99",
      color: "text-orange-500",
      borderColor: "group-hover:border-orange-500/50",
      bgHover: "group-hover:bg-orange-500/10",
      barColor: "bg-orange-500"
    },
    { 
      icon: Box, 
      title: "VR Immersion", 
      subtitle: "VIRTUAL REALITY",
      desc: "Full sensory displacement. Optimization for Quest 3 and PCVR high-fidelity rendering.", 
      level: "LVL 85",
      color: "text-green-400",
      borderColor: "group-hover:border-green-400/50",
      bgHover: "group-hover:bg-green-400/10",
      barColor: "bg-green-400"
    },
    { 
      icon: Layers, 
      title: "Unity 6", 
      subtitle: "GAME ENGINE",
      desc: "Mastery of HDRP & URP pipelines. Custom shader graphs and physics simulations.", 
      level: "LVL 100",
      color: "text-purple-500",
      borderColor: "group-hover:border-purple-500/50",
      bgHover: "group-hover:bg-purple-500/10",
      barColor: "bg-purple-500"
    },
    { 
      icon: Brain, 
      title: "Neural AI", 
      subtitle: "GENERATIVE LOGIC",
      desc: "Integrating LLMs for dynamic NPC dialogue and procedural level generation.", 
      level: "LVL 70",
      color: "text-cyan-400",
      borderColor: "group-hover:border-cyan-400/50",
      bgHover: "group-hover:bg-cyan-400/10",
      barColor: "bg-cyan-400"
    },
    { 
      icon: Database, 
      title: "3D Assets", 
      subtitle: "DIGITAL FORGE",
      desc: "Photogrammetry and PBR modeling for ultra-realistic props and environments.", 
      level: "LVL 90",
      color: "text-pink-500",
      borderColor: "group-hover:border-pink-500/50",
      bgHover: "group-hover:bg-pink-500/10",
      barColor: "bg-pink-500"
    },
    { 
      icon: Smartphone, 
      title: "Mobile AR", 
      subtitle: "AUGMENTED REALITY",
      desc: "Niantic Lightship & ARKit. Lidar depth sensing for real-world occlusion.", 
      level: "LVL 80",
      color: "text-yellow-400",
      borderColor: "group-hover:border-yellow-400/50",
      bgHover: "group-hover:bg-yellow-400/10",
      barColor: "bg-yellow-400"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative border-t border-brew-800">
       {/* Background Accents */}
       <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #333 1px, transparent 1px)",
          backgroundSize: "30px 30px"
       }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <div className="flex items-center space-x-2 text-amber-500 mb-2">
                    <Zap size={20} />
                    <span className="font-mono text-sm tracking-widest">SYSTEM_UPGRADES</span>
                </div>
                <h2 className="font-display text-5xl font-bold text-white">
                  Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Skill Tree</span>
                </h2>
            </div>
            <div className="hidden md:block font-mono text-xs text-gray-500 text-right border-r-2 border-amber-500 pr-4">
                SELECT CLASS TO EXPAND<br />
                <span className="text-amber-500">AVAILABLE POINTS: 0</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
                <div className={`bg-[#222] border border-gray-800 p-6 h-full relative overflow-hidden transition-all duration-300 ${service.borderColor} ${service.bgHover}`}>
                    
                    {/* Glowing Corner Accent */}
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div className={`p-3 rounded-lg bg-black/50 border border-gray-700 ${service.color} group-hover:scale-110 transition-transform`}>
                            <service.icon size={28} />
                        </div>
                        <div className="text-right">
                           <div className={`font-mono text-[10px] font-bold opacity-60 mb-1 ${service.color}`}>{service.subtitle}</div>
                           <div className="bg-black/60 px-2 py-1 rounded text-[10px] font-mono text-gray-400 border border-gray-800">{service.level}</div>
                        </div>
                    </div>
                    
                    <h3 className="font-display font-bold text-2xl mb-2 text-white group-hover:text-white transition-colors">{service.title}</h3>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6">{service.desc}</p>

                    {/* Progress Bar Decoration */}
                    <div className="w-full h-1 bg-gray-800 mt-auto rounded-full overflow-hidden">
                        <div className={`h-full w-0 group-hover:w-full transition-all duration-700 ease-out ${service.barColor}`}></div>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-amber-500/30 text-amber-500 font-mono text-sm hover:bg-amber-500 hover:text-brew-950 transition-all uppercase tracking-widest hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                <Cpu className="mr-2" size={16} /> Initiate Collab Protocol
            </a>
        </div>

      </div>
    </section>
  );
};

export default Services;