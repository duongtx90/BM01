import React from 'react';
import { motion } from 'framer-motion';
import { Gem, ArrowRight, Shield, Zap, Hexagon } from 'lucide-react';

const JewelryShowcase: React.FC = () => {
  const items = [
    { 
        id: 1, 
        title: "Void Solitaire", 
        category: "Legendary Ring", 
        rarity: "text-amber-400",
        border: "border-amber-500",
        glow: "shadow-[0_0_30px_rgba(245,158,11,0.2)]",
        img: "https://images.unsplash.com/photo-1605100804763-eb2fc6036724?q=80&w=1000&auto=format&fit=crop",
        stats: ["+50 CHA", "Light Bending"]
    },
    { 
        id: 2, 
        title: "Cyber Emerald", 
        category: "Epic Artifact", 
        rarity: "text-purple-400",
        border: "border-purple-500",
        glow: "shadow-[0_0_30px_rgba(192,132,252,0.2)]",
        img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop",
        stats: ["+20 INT", "Wireframe Mode"]
    },
    { 
        id: 3, 
        title: "Cobalt Shard", 
        category: "Rare Material", 
        rarity: "text-blue-400",
        border: "border-blue-500",
        glow: "shadow-[0_0_30px_rgba(96,165,250,0.2)]",
        img: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop",
        stats: ["+15 DUR", "Cryo Effect"]
    },
  ];

  return (
    <section id="jewelry" className="py-24 bg-[#121212] relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <div className="flex items-center space-x-2 text-gray-500 mb-2 font-mono text-xs">
                    <Hexagon size={14} />
                    <span>ASSET_LIBRARY // V.4.0</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                    Rare <span className="text-amber-500">Loot</span> Drops
                </h2>
                <p className="text-gray-400 max-w-md text-lg">
                    Our "Digital Atelier" crafts high-fidelity 3D assets for luxury brands and RPG inventory systems. PBR textures included.
                </p>
            </div>
            <button className="hidden md:flex items-center px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white font-mono text-sm border border-gray-600 transition-all hover:border-amber-500">
                OPEN_INVENTORY <ArrowRight className="ml-2" size={16} />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, idx) => (
                <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`group relative bg-[#1a1a1a] border-2 ${item.border} rounded-lg p-4 cursor-pointer hover:-translate-y-2 transition-transform duration-300 ${item.glow}`}
                >
                    {/* Image Container */}
                    <div className="relative aspect-square bg-black rounded overflow-hidden mb-4 border border-gray-800">
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-[10px] font-mono text-white backdrop-blur-sm border border-white/10">
                            OBJ / FBX
                        </div>
                    </div>

                    {/* Item Details */}
                    <div className="space-y-2">
                        <div className={`text-xs font-bold uppercase tracking-wider flex items-center ${item.rarity}`}>
                            <Gem size={12} className="mr-1" />
                            {item.category}
                        </div>
                        <h3 className="text-xl font-bold text-white font-display">{item.title}</h3>
                        
                        {/* Stats Block */}
                        <div className="grid grid-cols-2 gap-2 pt-2 mt-2 border-t border-gray-800">
                            {item.stats.map((stat, i) => (
                                <div key={i} className="bg-black/40 px-2 py-1 rounded text-[10px] font-mono text-gray-400 flex items-center">
                                    <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
                                    {stat}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hover Action */}
                    <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-full bg-amber-500 text-black font-bold text-center py-2 text-sm uppercase tracking-wide">
                            Equip Item
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className="mt-12 p-px bg-gradient-to-r from-transparent via-gray-700 to-transparent">
            <div className="bg-[#1a1a1a] p-8 text-center">
                <h4 className="font-bold text-white text-xl mb-2">Looking for Custom Forging?</h4>
                <p className="text-gray-500 mb-4">We accept commissions for unique artifact creation.</p>
                <span className="text-amber-500 hover:text-amber-400 font-mono text-sm cursor-pointer border-b border-amber-500 hover:border-amber-400">CONTACT_BLACKSMITH &rarr;</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default JewelryShowcase;