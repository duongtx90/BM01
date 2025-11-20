import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Shield, Zap, Box, ShoppingCart } from 'lucide-react';
import { products } from './ProductList';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <div className="pt-32 text-center text-white">Item not found in database.</div>;

  return (
    <div className="pt-24 pb-12 bg-[#121212] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/products" className="inline-flex items-center text-sm font-mono text-gray-500 hover:text-amber-500 mb-8">
           <ArrowLeft size={16} className="mr-2" /> BACK_TO_ARMORY
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image / Viewer */}
            <div className="bg-black border border-gray-800 aspect-square relative rounded-lg overflow-hidden">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 flex space-x-2">
                    <div className="w-12 h-12 bg-gray-900 border border-gray-700 flex items-center justify-center hover:border-amber-500 cursor-pointer">
                        <Box size={20} />
                    </div>
                    <div className="w-12 h-12 bg-gray-900 border border-gray-700 flex items-center justify-center hover:border-amber-500 cursor-pointer">
                        <Zap size={20} />
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
                <div className="mb-2 text-amber-500 font-mono text-sm tracking-widest uppercase">{product.category}</div>
                <h1 className="font-display text-5xl font-bold mb-4">{product.title}</h1>
                <div className="text-3xl font-mono text-white mb-8">{product.price}</div>

                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    High-fidelity 3D asset ready for Unity, Unreal Engine, and WebXR. Includes 4K PBR textures, LODs, and rigging where applicable.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8 font-mono text-sm text-gray-400">
                    <div className="bg-gray-900 p-3 rounded border border-gray-800">FORMAT: .FBX, .OBJ</div>
                    <div className="bg-gray-900 p-3 rounded border border-gray-800">POLYS: 12,400</div>
                    <div className="bg-gray-900 p-3 rounded border border-gray-800">TEXTURES: 4K PBR</div>
                    <div className="bg-gray-900 p-3 rounded border border-gray-800">LICENSE: COMMERCIAL</div>
                </div>

                <div className="flex space-x-4">
                    <button className="flex-1 bg-amber-500 hover:bg-amber-400 text-brew-900 font-bold py-4 px-8 flex items-center justify-center uppercase tracking-widest transition-all">
                        <ShoppingCart size={20} className="mr-2" /> Add to Cart
                    </button>
                    <Link to="/try-on" className="flex-1 border border-gray-600 hover:border-white text-white font-bold py-4 px-8 flex items-center justify-center uppercase tracking-widest transition-all">
                        Virtual Try-On
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;