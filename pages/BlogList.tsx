import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Terminal } from 'lucide-react';

export const posts = [
  {
    id: 1,
    title: "PATCH_NOTE_v2.4: SHADER OPTIMIZATION",
    excerpt: "Rewrote the water reflection shader for mobile VR. Reduced draw calls by 40%.",
    date: "2024-02-14",
    author: "Lead_Tech_Art",
    status: "FIXED",
    statusColor: "text-green-400",
    tag: "GRAPHICS",
    content: "Full technical breakdown of the shader graph optimization..."
  },
  {
    id: 2,
    title: "DEVLOG: VISION PRO GESTURES",
    excerpt: "Experimenting with micro-gestures for UI navigation. The 'pinch-drag' mechanic feels too heavy.",
    date: "2024-02-01",
    author: "UX_Warlock",
    status: "IN_PROGRESS",
    statusColor: "text-amber-400",
    tag: "R&D",
    content: "Deep dive into Apple Vision Pro spatial input system..."
  },
  {
    id: 3,
    title: "BUG REPORT: AI PATHFINDING",
    excerpt: "NPCs getting stuck in geometry when player moves too fast. NavMesh rebake required.",
    date: "2024-01-28",
    author: "Backend_Goon",
    status: "CRITICAL",
    statusColor: "text-red-400",
    tag: "AI",
    content: "Analysis of A* algorithm failure cases..."
  },
  {
    id: 4,
    title: "POST-MORTEM: SERVER CRASH",
    excerpt: "What happened during the launch weekend? Analyzing the Node.js cluster failure.",
    date: "2024-01-15",
    author: "SysAdmin",
    status: "RESOLVED",
    statusColor: "text-blue-400",
    tag: "OPS",
    content: "Logs analysis and future mitigation strategies..."
  }
];

const BlogList: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-[#faf9f6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-4 mb-12">
             <div className="bg-brew-900 text-amber-400 p-3 shadow-lg transform -rotate-3">
                <Terminal size={28} />
             </div>
             <div>
                 <span className="font-mono text-brew-900 text-sm font-bold">/SYSTEM/LOGS</span>
                 <h1 className="font-display text-4xl font-bold text-brew-900 uppercase">DevLogs Archive</h1>
             </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group block">
              <article className="flex flex-col h-full bg-white border border-gray-200 hover:border-amber-500 p-8 hover:shadow-[8px_8px_0px_0px_rgba(62,39,35,1)] transition-all duration-300">
                <div className="mb-4 flex items-center justify-between font-mono text-xs border-b border-gray-100 pb-2">
                  <span className="bg-brew-900 text-amber-400 px-2 py-1 rounded font-bold">
                    #{post.tag}
                  </span>
                  <div className="text-gray-400 flex items-center">
                      <Calendar size={12} className="mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-brew-900 mb-4 font-display leading-tight group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow text-sm font-mono leading-relaxed">
                  {">"} {post.excerpt}
                </p>
                
                <div className="flex items-center justify-end pt-4 mt-auto">
                  <span className="text-brew-900 font-bold flex items-center group-hover:translate-x-2 transition-transform">
                    READ_LOG <ArrowRight size={18} className="ml-2"/>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;