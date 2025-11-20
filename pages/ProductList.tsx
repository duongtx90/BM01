import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, Box, Layers } from 'lucide-react';

export const products = [
  { id: 1, title: "Void Solitaire", category: "Legendary Ring", price: "$49.00", img: "https://images.unsplash.com/photo-1605100804763-eb2fc6036724?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Cyber Emerald", category: "Epic Artifact", price: "$35.00", img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Cobalt Shard", category: "Rare Material", price: "$15.00", img: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "Virtualion MK-II", category: "Hardware", price: "$299.00", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, title: "Neon Katana Asset", category: "Weapon Pack", price: "$25.00", img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, title: "Cyber City Env", category: "Environment", price: "$89.00", img: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1000&auto=format&fit=crop" }
];

const ProductList: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-[#1a1a1a] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-800 pb-6">
             <div>
                 <span className="text-amber-500 font-mono tracking-widest text-sm mb-2 block">DIGITAL_ARMORY</span>
                 <h1 className="font-display text-5xl font-bold">Asset Store</h1>
             </div>
             <div className="flex space-x-4 mt-4 md:mt-0">
                 <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm font-mono border border-gray-700">FILTER: ALL</button>
                 <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm font-mono border border-gray-700">SORT: RARITY</button>
             </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <Link key={item.id} to={`/products/${item.id}`} className="group">
               <div className="bg-[#222] border border-gray-800 rounded overflow-hidden hover:border-amber-500 transition-colors">
                  <div className="aspect-square bg-black relative overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                      <div className="absolute top-2 right-2 bg-black/80 text-amber-500 text-xs font-mono px-2 py-1 rounded border border-amber-500/30">
                          {item.price}
                      </div>
                  </div>
                  <div className="p-6">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{item.category}</div>
                      <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-400 transition-colors">{item.title}</h3>
                      <div className="mt-4 flex items-center text-sm text-gray-400 group-hover:text-white">
                          <span>INSPECT_ITEM</span>
                          <div className="w-4 h-4 ml-2 border-t border-r border-current transform rotate-45"></div>
                      </div>
                  </div>
               </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;