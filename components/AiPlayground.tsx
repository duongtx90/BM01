import React, { useState } from 'react';
import { Brain, Sparkles, Loader2, Send, Bot, Terminal, Cpu, Network, ShieldCheck, Code } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { motion } from 'framer-motion';

const AiPlayground: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTerminal, setActiveTerminal] = useState(false);

  const generateIdea = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const apiKey = process.env.API_KEY;

      if (!apiKey) {
         setTimeout(() => {
             setResponse("Access Denied: API Key missing. \n\n[SIMULATION_MODE_ACTIVE]: \nGenerating enterprise use-case...\n\n> Concept: 'Spatial Recall' \n> Description: An AR overlay that uses computer vision to tag real-world machinery with maintenance history logs and repair schematics for industrial field workers.");
             setLoading(false);
         }, 2000);
         return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Act as an Enterprise AI Consultant for a Game Studio. Generate a high-level technical solution summary (max 4 sentences) for this request: "${input}". Use technical jargon like 'LLM', 'NavMesh', 'Latency', 'Spatial Computing'.`,
      });

      setResponse(result.text || "Signal lost. Retrying uplink...");
    } catch (err: any) {
      setResponse("Connection interrupted. Neural link unstable.");
    } finally {
      setLoading(false);
    }
  };

  const products = [
    {
        id: "01",
        name: "Cortex_NPC",
        icon: Bot,
        desc: "Runtime LLM integration for non-player characters. Enables unscripted, context-aware dialogue trees in Unity 6.",
        color: "text-cyan-400",
        border: "hover:border-cyan-400"
    },
    {
        id: "02",
        name: "Asset_Forge",
        icon: Box,
        desc: "Procedural generation pipeline. Converts text prompts into textured low-poly assets optimized for mobile AR.",
        color: "text-purple-400",
        border: "hover:border-purple-400"
    },
    {
        id: "03",
        name: "Vision_Sense",
        icon: Network,
        desc: "Spatial understanding module for Apple Vision Pro. Maps real-world occlusion data to virtual physics layers.",
        color: "text-amber-400",
        border: "hover:border-amber-400"
    }
  ];

  // Helper for icon rendering since Lucide icons are components
  function Box(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>}

  return (
    <section id="ai-lab" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-gray-900">
      
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]"></div>
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono mb-6"
            >
                <Sparkles size={12} />
                <span>ENTERPRISE INTELLIGENCE</span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight"
            >
                Brew <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Cortex</span>
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
            >
                Beyond simple chatbots. We engineer enterprise-grade neural networks that power dynamic game worlds, automate asset pipelines, and enhance spatial computing.
            </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {products.map((product, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    className={`group relative bg-[#111] p-8 rounded-xl border border-gray-800 transition-all duration-500 ${product.border} hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
                >
                    <div className="absolute top-0 right-0 p-4 font-mono text-xs text-gray-600 font-bold opacity-50">
                        / {product.id}
                    </div>
                    <div className={`w-14 h-14 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${product.color}`}>
                        <product.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-display">{product.name}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{product.desc}</p>
                    <div className={`h-1 w-12 mt-6 rounded-full bg-gray-800 group-hover:w-full transition-all duration-500 ${product.color.replace('text', 'bg')}`}></div>
                </motion.div>
            ))}
        </div>

        {/* Interactive Terminal Demo */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
        >
            <div className="bg-[#0f0f0f] rounded-lg border border-gray-800 overflow-hidden shadow-2xl relative">
                {/* Terminal Header */}
                <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-gray-800">
                    <div className="flex items-center space-x-2">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                        </div>
                        <div className="ml-4 text-xs font-mono text-gray-500 flex items-center">
                            <Terminal size={10} className="mr-2" />
                            brewcortex_cli — v2.5.0
                        </div>
                    </div>
                    <div className="text-xs font-mono text-green-500 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        ONLINE
                    </div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm md:text-base min-h-[300px] flex flex-col">
                    <div className="text-gray-500 mb-4">
                        <p>Welcome to Brew Cortex [Enterprise Edition].</p>
                        <p>Initializing Gemini 2.5 Interface...</p>
                          <p className="text-green-500">&gt;&gt; Connection Established.</p>
                        <br />
                        <p className="text-gray-300">Enter a query to prototype a solution:</p>
                    </div>

                    {/* Interaction Area */}
                    <div className="flex-grow space-y-4">
                        {response && (
                            <div className="bg-cyan-950/20 border-l-2 border-cyan-500 p-4 text-cyan-100 animate-in fade-in slide-in-from-bottom-2">
                                <span className="text-cyan-500 font-bold block mb-2 text-xs tracking-wider">RESPONSE:</span>
                                {response}
                            </div>
                        )}
                        
                        {loading && (
                            <div className="flex items-center text-amber-500">
                                <Loader2 size={16} className="animate-spin mr-2" />
                                <span className="animate-pulse">Processing neural request...</span>
                            </div>
                        )}
                    </div>

                    {/* Input Line */}
                    <div className="mt-6 flex items-center border-t border-gray-800 pt-4">
                        <span className="text-green-500 mr-2 font-bold">{">"}</span>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onFocus={() => setActiveTerminal(true)}
                            onBlur={() => setActiveTerminal(false)}
                            placeholder="e.g., 'Design an AI system for dynamic weather in Unity'"
                            className="flex-grow bg-transparent border-none outline-none text-white placeholder-gray-700 focus:ring-0"
                            onKeyDown={(e) => e.key === 'Enter' && generateIdea()}
                        />
                        <button
                            onClick={generateIdea}
                            disabled={loading || !input.trim()}
                            className="text-gray-500 hover:text-white transition-colors disabled:opacity-50"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>

                {/* Scanline Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AiPlayground;
