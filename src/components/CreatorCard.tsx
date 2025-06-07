
import React from 'react';
import { Star, Heart, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Creator {
  id: number;
  name: string;
  username: string;
  avatar: string;
  platform: string;
  followers: string;
  rating: number;
  reviewCount: number;
  minPrice: number;
  tags: string[];
  isOnline: boolean;
  topService: string;
}

interface CreatorCardProps {
  creator: Creator;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ creator }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 group">
      {/* Header with avatar and online status */}
      <div className="relative p-6 pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src={creator.avatar} 
                alt={creator.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
              />
              {creator.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {creator.name}
              </h3>
              <p className="text-gray-500 text-sm">@{creator.username}</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Platform and followers */}
        <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
          <span>{creator.platform}</span>
          <span>•</span>
          <span>{creator.followers} подписчиков</span>
        </div>
      </div>

      {/* Tags */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {creator.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Top service */}
      <div className="px-6 pb-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          {creator.topService}
        </p>
      </div>

      {/* Rating and price */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-semibold text-gray-900">{creator.rating}</span>
              <span className="text-gray-500 text-sm">({creator.reviewCount})</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">от</p>
            <p className="text-lg font-bold text-purple-600">
              {creator.minPrice.toLocaleString()}₽
            </p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-6 pb-6 flex space-x-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 rounded-full"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Написать
        </Button>
        <Button 
          size="sm" 
          className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          Заказать
        </Button>
      </div>
    </div>
  );
};

export default CreatorCard;
