
import React from 'react';
import { Play, Eye, Heart } from 'lucide-react';

interface PortfolioItemProps {
  item: {
    id: number;
    title: string;
    thumbnail: string;
    views: string;
    likes: string;
  };
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
  return (
    <div className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img 
          src={item.thumbnail} 
          alt={item.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Play className="w-6 h-6 text-gray-900" />
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {item.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>{item.views}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart className="w-4 h-4" />
            <span>{item.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
