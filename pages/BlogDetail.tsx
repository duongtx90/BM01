import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Terminal } from 'lucide-react';
import { posts } from './BlogList';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h2 className="text-2xl font-bold">Log not found</h2>
        <Link to="/blog" className="text-amber-600 underline mt-4 block">Return to Archive</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 bg-[#faf9f6] min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/blog" className="inline-flex items-center text-sm font-mono font-bold text-gray-500 hover:text-brew-900 mb-8">
          <ArrowLeft size={16} className="mr-2" /> RETURN_TO_ROOT
        </Link>

        <article className="bg-white p-8 md:p-12 border border-gray-200 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-brew-900"></div>
          
          <header className="mb-8 border-b-2 border-gray-100 pb-8">
             <div className="flex items-center space-x-2 text-amber-500 font-mono text-xs font-bold mb-4">
                <Terminal size={14} />
                <span>{post.status}</span>
             </div>
             <h1 className="font-display text-4xl md:text-5xl font-bold text-brew-900 mb-6 leading-tight">
                {post.title}
             </h1>
             <div className="flex items-center space-x-6 text-sm text-gray-500 font-mono">
                <span className="flex items-center"><User size={14} className="mr-2" /> {post.author}</span>
                <span className="flex items-center"><Calendar size={14} className="mr-2" /> {post.date}</span>
             </div>
          </header>

          <div className="prose prose-lg text-gray-700 font-sans">
             <p className="lead font-bold text-xl mb-6">{post.excerpt}</p>
             <p>
               [System Log Start] <br/><br/>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
             <h3 className="text-2xl font-bold text-brew-900 mt-8 mb-4">Technical Analysis</h3>
             <p>
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </p>
             <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-6">
                <code>
                  // Shader Logic Update <br/>
                  void main() {'{'}<br/>
                  &nbsp;&nbsp;vec3 viewDir = normalize(cameraPos - fragPos);<br/>
                  &nbsp;&nbsp;float fresnel = pow(1.0 - dot(viewDir, normal), 3.0);<br/>
                  &nbsp;&nbsp;gl_FragColor = mix(baseColor, reflection, fresnel);<br/>
                  {'}'}
                </code>
             </div>
             <p>
               [End of Log]
             </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;