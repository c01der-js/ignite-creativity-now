
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Star, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Найдите идеального{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  UGC-креатора
                </span>
                {' '}для вашего бренда
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Тысячи талантливых создателей контента готовы помочь вашему бренду 
                выделиться в TikTok, Instagram, YouTube и других платформах.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-6 text-lg">
                Найти креатора
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Смотреть демо
              </Button>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-gray-700">4.9/5 средний рейтинг</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">10,000+ креаторов</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold">@creative_anna</h3>
                    <p className="text-gray-500">TikTok • 500K подписчиков</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center">
                  <Play className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">
                  "Создам вирусное видео для вашего продукта в TikTok"
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">от 5,000₽</span>
                  <Button size="sm" className="rounded-full">Заказать</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
