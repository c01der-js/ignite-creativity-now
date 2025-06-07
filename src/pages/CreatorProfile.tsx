
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, MessageSquare, Calendar, Clock, Users, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioItem from '@/components/PortfolioItem';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';

const creatorData = {
  1: {
    id: 1,
    name: 'Анна Креативная',
    username: 'creative_anna',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=300&fit=crop',
    platform: 'TikTok',
    followers: '500K',
    rating: 4.9,
    reviewCount: 234,
    isOnline: true,
    location: 'Москва, Россия',
    description: 'Создаю вирусный контент для TikTok и Instagram. Специализируюсь на танцевальных трендах, лайфстайл контенте и beauty-тематике. Работаю с брендами более 3 лет.',
    tags: ['Танцы', 'Лайфстайл', 'Бьюти', 'Тренды', 'Реклама'],
    portfolio: [
      {
        id: 1,
        title: 'Танцевальный челлендж для Nike',
        thumbnail: 'https://images.unsplash.com/photo-1574631149069-8bd0e57b9c1b?w=300&h=300&fit=crop',
        views: '2.1M',
        likes: '150K'
      },
      {
        id: 2,
        title: 'Beauty routine с продуктами L\'Oreal',
        thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop',
        views: '890K',
        likes: '67K'
      },
      {
        id: 3,
        title: 'Lifestyle контент для Zara',
        thumbnail: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300&h=300&fit=crop',
        views: '1.5M',
        likes: '98K'
      }
    ],
    services: [
      {
        id: 1,
        title: 'Танцевальное видео с продуктом',
        description: 'Создам вирусное танцевальное видео с интеграцией вашего продукта',
        price: 5000,
        duration: '2-3 дня',
        revisions: 2
      },
      {
        id: 2,
        title: 'Beauty routine с продуктом',
        description: 'Покажу использование вашего beauty-продукта в утренней рутине',
        price: 7000,
        duration: '3-5 дней',
        revisions: 3
      },
      {
        id: 3,
        title: 'Lifestyle интеграция',
        description: 'Естественная интеграция продукта в повседневную жизнь',
        price: 8000,
        duration: '5-7 дней',
        revisions: 2
      }
    ],
    reviews: [
      {
        id: 1,
        clientName: 'Мария К.',
        rating: 5,
        date: '2 недели назад',
        text: 'Анна создала потрясающее видео для нашего бренда! Видео набрало более миллиона просмотров и принесло отличные результаты.',
        service: 'Танцевальное видео с продуктом'
      },
      {
        id: 2,
        clientName: 'Алексей П.',
        rating: 5,
        date: '1 месяц назад',
        text: 'Профессиональный подход, быстрое выполнение и отличное качество. Рекомендую!',
        service: 'Beauty routine с продуктом'
      }
    ]
  }
};

const CreatorProfile = () => {
  const { id } = useParams();
  const creator = creatorData[Number(id) as keyof typeof creatorData];

  if (!creator) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Креатор не найден</h1>
          <Link to="/" className="text-purple-600 hover:text-purple-700">
            Вернуться на главную
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Cover Image */}
      <div className="relative h-64 md:h-80">
        <img 
          src={creator.coverImage} 
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Back Button */}
        <Link 
          to="/"
          className="absolute top-4 left-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </Link>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="bg-white/90 hover:bg-white rounded-full p-2 transition-colors">
            <Heart className="w-5 h-5 text-gray-900" />
          </button>
          <button className="bg-white/90 hover:bg-white rounded-full p-2 transition-colors">
            <Share2 className="w-5 h-5 text-gray-900" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <img 
                src={creator.avatar} 
                alt={creator.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
              {creator.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white"></div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{creator.name}</h1>
                <Badge className="bg-purple-100 text-purple-700">@{creator.username}</Badge>
              </div>

              <div className="flex items-center space-x-6 text-gray-600 mb-3">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-semibold">{creator.rating}</span>
                  <span>({creator.reviewCount} отзывов)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{creator.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{creator.followers} подписчиков</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{creator.description}</p>

              <div className="flex flex-wrap gap-2">
                {creator.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <Button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <MessageSquare className="w-4 h-4 mr-2" />
                Написать
              </Button>
              <Button variant="outline" className="rounded-full">
                Заказать услугу
              </Button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Portfolio */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Портфолио</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {creator.portfolio.map((item) => (
                  <PortfolioItem key={item.id} item={item} />
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Отзывы ({creator.reviewCount})
              </h2>
              <div className="space-y-4">
                {creator.reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Услуги</h2>
              <div className="space-y-4">
                {creator.services.map((service) => (
                  <ServiceCard key={service.id} service={service} creatorId={creator.id} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreatorProfile;

