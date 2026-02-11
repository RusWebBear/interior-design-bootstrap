import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const testimonials = [
    {
      name: 'Анна Соколова',
      text: 'Невероятная работа! Студия воплотила все наши мечты в реальность. Каждая деталь продумана до мелочей.',
      rating: 5,
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/46ff2554-98e9-42d0-bbd7-365fb55ee2c4.jpg'
    },
    {
      name: 'Дмитрий Волков',
      text: 'Профессионализм на высшем уровне. Сроки соблюдены, бюджет не превышен. Рекомендую всем!',
      rating: 5,
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/d41d0960-cbbc-4b9b-ade4-197d9ba54047.jpg'
    },
    {
      name: 'Елена Петрова',
      text: 'Спасибо за уникальный дизайн нашей квартиры! Все гости в восторге. Вы создали настоящее произведение искусства.',
      rating: 5,
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/b831037f-dd2f-4386-8944-e894d1606821.jpg'
    },
    {
      name: 'Михаил Иванов',
      text: 'Отличная команда профессионалов! Проект выполнен качественно и в срок. Остались очень довольны результатом.',
      rating: 5,
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/46ff2554-98e9-42d0-bbd7-365fb55ee2c4.jpg'
    },
    {
      name: 'Ольга Смирнова',
      text: 'Прекрасный дизайн! Все пожелания были учтены. Квартира стала уютной и стильной одновременно.',
      rating: 5,
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/d41d0960-cbbc-4b9b-ade4-197d9ba54047.jpg'
    },
    {
      name: 'Сергей Новиков',
      text: 'Работа на высшем уровне! Дизайнеры смогли воплотить наши идеи и добавили свои креативные решения.',
      rating: 5,
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/b831037f-dd2f-4386-8944-e894d1606821.jpg'
    },
    {
      name: 'Татьяна Морозова',
      text: 'Благодарю за отличную работу! Интерьер получился именно таким, как мы мечтали. Все на высоте!',
      rating: 5,
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/46ff2554-98e9-42d0-bbd7-365fb55ee2c4.jpg'
    },
    {
      name: 'Владимир Козлов',
      text: 'Превосходный результат! Профессиональный подход к каждой детали. Рекомендую эту студию всем друзьям.',
      rating: 5,
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/d41d0960-cbbc-4b9b-ade4-197d9ba54047.jpg'
    },
    {
      name: 'Наталья Федорова',
      text: 'Восхитительный дизайн! Каждый элемент интерьера продуман и гармонично вписан в общую концепцию.',
      rating: 5,
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/b831037f-dd2f-4386-8944-e894d1606821.jpg'
    },
    {
      name: 'Александр Лебедев',
      text: 'Отличная студия! Быстро, качественно, креативно. Результат превзошёл все ожидания.',
      rating: 5,
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/46ff2554-98e9-42d0-bbd7-365fb55ee2c4.jpg'
    },
    {
      name: 'Ирина Павлова',
      text: 'Замечательная работа! Дизайнеры учли все наши пожелания и создали уникальное пространство.',
      rating: 5,
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/d41d0960-cbbc-4b9b-ade4-197d9ba54047.jpg'
    },
    {
      name: 'Андрей Кузнецов',
      text: 'Великолепный результат! Современный дизайн с душой. Спасибо за профессионализм и внимание к деталям.',
      rating: 5,
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/b831037f-dd2f-4386-8944-e894d1606821.jpg'
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % testimonials.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const visibleTestimonials = testimonials.slice(
    currentSlide * itemsPerSlide,
    (currentSlide + 1) * itemsPerSlide
  );

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Что говорят о нас те, кто уже реализовал свои мечты
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card 
                key={`${currentSlide}-${index}`}
                className="p-0 shadow-lg hover:shadow-xl transition-shadow duration-300 scroll-animate overflow-hidden"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="relative h-64 overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImageIndex(currentSlide * itemsPerSlide + index)}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Icon name="ZoomIn" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 rounded-full bg-white shadow-lg hover:bg-secondary hover:text-white"
            onClick={prevSlide}
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 rounded-full bg-white shadow-lg hover:bg-secondary hover:text-white"
            onClick={nextSlide}
          >
            <Icon name="ChevronRight" size={24} />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-secondary' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogContent className="max-w-6xl p-0 border-0">
          {selectedImageIndex !== null && (
            <div className="relative">
              <img 
                src={testimonials[selectedImageIndex].image} 
                alt="Увеличенное фото проекта"
                className="w-full h-auto"
              />
              
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-lg hover:bg-secondary hover:text-white"
                onClick={prevImage}
              >
                <Icon name="ChevronLeft" size={24} />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-lg hover:bg-secondary hover:text-white"
                onClick={nextImage}
              >
                <Icon name="ChevronRight" size={24} />
              </Button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {selectedImageIndex + 1} / {testimonials.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TestimonialsSection;
