import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Code, Flag } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    { year: "2019", title: "Server Init", desc: "Brew Monster founded in a garage by two ex-Ubisoft devs." },
    { year: "2021", title: "Series A", desc: "Secured funding to expand the AR division. Launched 'CyberWalker'." },
    { year: "2023", title: "Vision Pro", desc: "First studio in the region to ship a native Vision Pro title." },
    { year: "2024", title: "Global Scale", desc: "Opened offices in Tokyo and Berlin. 50+ active projects." }
  ];

  const team = [
    { name: "Alex Chen", role: "Game Director", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=300" },
    { name: "Sarah Jenkins", role: "Lead Tech Artist", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300" },
    { name: "David Kim", role: "AI Architect", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" },
    { name: "Elena Vo", role: "XR Specialist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" }
  ];

  return (
    <div className="pt-24 pb-12">
      {/* Header */}
      <section className="bg-brew-950 text-white py-20 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #78350f 1px, transparent 1px), linear-gradient(to bottom, #78350f 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <span className="text-amber-500 font-mono tracking-widest text-sm mb-2 block">GUILD_HISTORY</span>
            <h1 className="font-display text-6xl font-bold mb-6">Origin Story</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We are a collective of dreamers, coders, and artists brewing the future of interactive entertainment.
            </p>
         </div>
      </section>

      {/* Stats / Values */}
      <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                  { icon: Target, title: "Precision", desc: "Pixel-perfect rendering for high-fidelity assets." },
                  { icon: Code, title: "Innovation", desc: "Pushing Unity and Unreal to their absolute limits." },
                  { icon: Users, title: "Community", desc: "Building worlds players want to live in." }
              ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-8 border-l-4 border-amber-500 shadow-sm">
                      <item.icon className="text-brew-900 mb-4" size={32} />
                      <h3 className="font-display text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 font-mono text-sm">{item.desc}</p>
                  </div>
              ))}
          </div>
      </section>

      {/* Timeline */}
      <section className="py-16 max-w-4xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-brew-900 mb-12 text-center">Timeline</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {timeline.map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-amber-500 text-slate-500 group-[.is-active]:text-brew-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <Flag size={16} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">{item.title}</div>
                            <time className="font-mono text-xs font-medium text-amber-500">{item.year}</time>
                        </div>
                        <div className="text-slate-500 text-sm">{item.desc}</div>
                    </div>
                </div>
            ))}
          </div>
      </section>

      {/* Team Roster */}
      <section className="py-16 bg-brew-50">
          <div className="max-w-7xl mx-auto px-4">
             <h2 className="font-display text-4xl font-bold text-brew-900 mb-12 text-center">Party Roster</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, i) => (
                    <div key={i} className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-all border-b-4 border-transparent hover:border-amber-500">
                        <img src={member.img} alt={member.name} className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="p-4 text-center">
                            <h3 className="font-bold text-lg text-brew-900">{member.name}</h3>
                            <p className="text-amber-600 font-mono text-xs uppercase tracking-widest">{member.role}</p>
                        </div>
                    </div>
                ))}
             </div>
          </div>
      </section>
    </div>
  );
};

export default About;