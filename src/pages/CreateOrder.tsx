
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const CreateOrder = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    contentType: '',
    platform: '',
    deadline: '',
    budget: '',
    privacy: 'open',
    references: [] as string[]
  });

  const [referenceInput, setReferenceInput] = useState('');

  const contentTypes = [
    'Видео',
    'Монтаж',
    'Музыка/Звук',
    'Дизайн',
    'Анимация',
    'Фотография',
    'Копирайтинг',
    'Voice-over'
  ];

  const platforms = [
    'YouTube',
    'TikTok',
    'Instagram',
    'Telegram',
    'VK',
    'Twitch',
    'Facebook',
    'Другое'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addReference = () => {
    if (referenceInput.trim()) {
      setFormData(prev => ({
        ...prev,
        references: [...prev.references, referenceInput.trim()]
      }));
      setReferenceInput('');
    }
  };

  const removeReference = (index: number) => {
    setFormData(prev => ({
      ...prev,
      references: prev.references.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.contentType || !formData.platform) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    // Здесь будет отправка данных на сервер
    console.log('Order data:', formData);
    
    toast({
      title: "Заказ создан!",
      description: "Ваш заказ успешно опубликован и отправлен креаторам"
    });
    
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Назад</span>
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">Создание заказа</h1>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Основная информация */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Основная информация</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Заголовок задачи *</Label>
                  <Input
                    id="title"
                    placeholder="Например: Монтаж видео для YouTube канала"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Описание задачи *</Label>
                  <Textarea
                    id="description"
                    placeholder="Детально опишите что нужно сделать, какой результат вы ожидаете..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="mt-1 min-h-[120px]"
                  />
                </div>
              </div>
            </div>

            {/* Тип контента и платформа */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Детали проекта</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Тип контента *</Label>
                  <Select value={formData.contentType} onValueChange={(value) => handleInputChange('contentType', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Выберите тип контента" />
                    </SelectTrigger>
                    <SelectContent>
                      {contentTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Платформа *</Label>
                  <Select value={formData.platform} onValueChange={(value) => handleInputChange('platform', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Выберите платформу" />
                    </SelectTrigger>
                    <SelectContent>
                      {platforms.map((platform) => (
                        <SelectItem key={platform} value={platform}>{platform}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Примеры и референсы */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Примеры и референсы</h2>
              
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ссылка на пример или референс"
                    value={referenceInput}
                    onChange={(e) => setReferenceInput(e.target.value)}
                  />
                  <Button type="button" onClick={addReference} className="btn-gradient">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {formData.references.length > 0 && (
                  <div className="space-y-2">
                    {formData.references.map((ref, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <span className="text-sm text-gray-700 truncate flex-1">{ref}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeReference(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">Загрузите файлы примеров</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, MP4, MP3 до 10MB</p>
                </div>
              </div>
            </div>

            {/* Срок и бюджет */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Условия</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="deadline">Желаемый срок</Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => handleInputChange('deadline', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="budget">Бюджет (₽)</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="Например: 5000"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Приватность */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Настройки публикации</h2>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="open"
                    checked={formData.privacy === 'open'}
                    onCheckedChange={(checked) => handleInputChange('privacy', checked ? 'open' : 'private')}
                  />
                  <Label htmlFor="open" className="text-sm">
                    Открытый заказ - все креаторы могут откликнуться
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="private"
                    checked={formData.privacy === 'private'}
                    onCheckedChange={(checked) => handleInputChange('privacy', checked ? 'private' : 'open')}
                  />
                  <Label htmlFor="private" className="text-sm">
                    По приглашению - только выбранные креаторы
                  </Label>
                </div>
              </div>
            </div>

            {/* Кнопки */}
            <div className="flex space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(-1)}
                className="flex-1"
              >
                Отмена
              </Button>
              <Button
                type="submit"
                className="flex-1 btn-gradient"
              >
                Опубликовать заказ
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
