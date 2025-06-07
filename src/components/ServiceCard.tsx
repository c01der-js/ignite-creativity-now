
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    price: number;
    duration: string;
    revisions: number;
  };
  creatorId?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, creatorId }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{service.duration}</span>
        </div>
        <div className="flex items-center space-x-1">
          <RotateCcw className="w-4 h-4" />
          <span>{service.revisions} ревизии</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-500">от</span>
          <div className="text-lg font-bold text-purple-600">
            {service.price.toLocaleString()}₽
          </div>
        </div>
        {creatorId ? (
          <Link to={`/creator/${creatorId}/service/${service.id}`}>
            <Button size="sm" className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Подробнее
            </Button>
          </Link>
        ) : (
          <Button size="sm" className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Заказать
          </Button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;

