
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">U</span>
              </div>
              <span className="text-xl font-bold">UGC Market</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Платформа для поиска и заказа качественного UGC-контента от лучших креаторов социальных сетей.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Пресс-центр</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Партнерство</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Справочный центр</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Связаться с нами</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Сообщество</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Правовая информация</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Условия оплаты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 UGC Market. Все права защищены.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Сделано с <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> для креаторов
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
