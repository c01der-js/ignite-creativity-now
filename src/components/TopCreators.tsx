
import React from 'react';
import CreatorCard from './CreatorCard';

const creators = [
  {
    id: 1,
    name: 'Анна Креативная',
    username: 'creative_anna',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    platform: 'TikTok',
    followers: '500K',
    rating: 4.9,
    reviewCount: 234,
    minPrice: 5000,
    tags: ['Танцы', 'Лайфстайл', 'Бьюти'],
    isOnline: true,
    topService: 'Создам вирусное видео для вашего продукта с танцевальным трендом'
  },
  {
    id: 2,
    name: 'Максим Голос',
    username: 'voice_max',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    platform: 'YouTube',
    followers: '1.2M',
    rating: 4.8,
    reviewCount: 456,
    minPrice: 3000,
    tags: ['Озвучка', 'Реклама', 'Аудиокниги'],
    isOnline: false,
    topService: 'Профессиональная озвучка рекламных роликов и презентаций'
  },
  {
    id: 3,
    name: 'Лена Дизайн',
    username: 'design_lena',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    platform: 'Instagram',
    followers: '750K',
    rating: 5.0,
    reviewCount: 189,
    minPrice: 7000,
    tags: ['Дизайн', 'Обложки', 'Брендинг'],
    isOnline: true,
    topService: 'Создание стильных обложек для YouTube и превью для соцсетей'
  },
  {
    id: 4,
    name: 'Артем Монтаж',
    username: 'edit_artem',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    platform: 'TikTok',
    followers: '300K',
    rating: 4.7,
    reviewCount: 312,
    minPrice: 4000,
    tags: ['Монтаж', 'Эффекты', 'Reels'],
    isOnline: true,
    topService: 'Монтаж динамичных роликов для TikTok и Instagram Reels'
  }
];

const TopCreators = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Топ креаторы
          </h2>
          <p className="text-xl text-gray-600">
            Работайте с лучшими создателями контента
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Смотреть всех креаторов
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCreators;
