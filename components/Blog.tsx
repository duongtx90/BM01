import React from 'react';
import { Calendar, ArrowRight, Terminal, Hash, AlertCircle, CheckCircle } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "PATCH_NOTE_v2.4: SHADER OPTIMIZATION",
      excerpt: "Rewrote the water reflection shader for mobile VR. Reduced draw calls by 40%.",
      date: "2024-02-14",
      author: "Lead_Tech_Art",
      status: "FIXED",
      statusColor: "text-green-400",
      tag: "GRAPHICS"
    },
    {
      id: 2,
      title: "DEVLOG: VISION PRO GESTURES",
      excerpt: "Experimenting with micro-gestures for UI navigation. The 'pinch-drag' mechanic feels too heavy.",
      date: "2024-02-01",
      author: "UX_Warlock",
      status: "IN_PROGRESS",
      statusColor: "text-amber-400",
      tag: "R&D"
    },
    {
      id: 3,
      title: "BUG REPORT: AI PATHFINDING",
      excerpt: "NPCs getting stuck in geometry when player moves too fast. NavMesh rebake required.",
      date: "2024-01-28",
      author: "Backend_Goon",
      status: "CRITICAL",
      statusColor: "text-red-400",
      tag: "AI"
    }
  ];

  return (
    <section className="py-24 bg-[#faf9f6] relative">
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brew-900 via-amber-500 to-brew-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="flex items-center space-x-4">
             <div className="bg-brew-900 text-amber-400 p-3 shadow-lg transform -rotate-3">
                <Terminal size={28} />
             </div>
             <div>
                 <span className="font-mono text-brew-900 text-sm font-bold">/SYSTEM/LOGS</span>
                 <h2 className="font-display text-4xl font-bold text-brew-900 uppercase">Patch Notes</h2>
             </div>
          </div>
          <a href="#" className="font-mono text-sm font-bold text-brew-900 hover:text-amber-600 border-b-2 border-brew-900 hover:border-amber-600 transition-all hidden md:block">
            VIEW_ARCHIVES
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col h-full bg-white border border-gray-200 hover:border-amber-500 p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group cursor-pointer">
              
              {/* Header Metadata */}
              <div className="mb-4 flex items-center justify-between font-mono text-xs border-b border-gray-100 pb-2">
                <span className="bg-gray-100 px-2 py-1 rounded text-gray-600 font-bold">
                  #{post.tag}
                </span>
                <div className="text-gray-400 flex items-center">
                    <Calendar size={12} className="mr-1" />
                  {post.date}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-brew-900 mb-3 font-display leading-tight group-hover:text-amber-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm font-mono leading-relaxed">
                {">"} {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between pt-4 mt-auto">
                <div className={`flex items-center text-xs font-bold ${post.statusColor}`}>
                  {post.status === 'FIXED' ? <CheckCircle size={14} className="mr-1"/> : <AlertCircle size={14} className="mr-1"/>}
                  {post.status}
                </div>
                <span className="text-brew-900 group-hover:translate-x-2 transition-transform">
                  <ArrowRight size={18} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;