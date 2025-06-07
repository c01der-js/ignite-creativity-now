
import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: {
    id: number;
    clientName: string;
    rating: number;
    date: string;
    text: string;
    service: string;
  };
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-gray-900">{review.clientName}</h4>
          <p className="text-sm text-gray-500">{review.service}</p>
        </div>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      
      <div className="flex items-center space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700">{review.text}</p>
    </div>
  );
};

export default ReviewCard;
