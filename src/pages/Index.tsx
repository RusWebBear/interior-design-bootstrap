import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import PortfolioSection, { Project } from '@/components/sections/PortfolioSection';
import ContactSection from '@/components/sections/ContactSection';
import Preloader from '@/components/Preloader';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('animate-in');
        }
      });
      
      const parallaxImages = document.querySelectorAll('.parallax-image');
      parallaxImages.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const translateY = (scrollPercent - 0.5) * 50;
        (img as HTMLElement).style.transform = `translateY(${translateY}px) scale(1.1)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Современная квартира',
      category: 'Современный',
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/files/b294a8b9-6f80-4f06-91c1-717cd8e8f640.jpg',
      description: '120 м² элегантности',
      fullDescription: 'Современная трехкомнатная квартира в центре города. Проект реализован в стиле минимализм с акцентом на функциональность. Использованы натуральные материалы: дерево, камень, текстиль премиум-класса.',
      area: '120 м²',
      year: '2023',
      location: 'Москва'
    },
    {
      id: 2,
      title: 'Скандинавская спальня',
      category: 'Скандинавский',
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/files/584081d5-6b4c-443b-8108-95caac4174a4.jpg',
      description: 'Минимализм и уют',
      fullDescription: 'Спальня в скандинавском стиле с акцентом на естественный свет и природные материалы. Светлая цветовая гамма создаёт атмосферу спокойствия и уюта.',
      area: '25 м²',
      year: '2023',
      location: 'Санкт-Петербург'
    },
    {
      id: 3,
      title: 'Индустриальный лофт',
      category: 'Лофт',
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/files/9db60ed4-71eb-4aa0-96a3-1a19192c920b.jpg',
      description: 'Сырой шик большого города',
      fullDescription: 'Лофт-пространство с открытой планировкой. Кирпичная кладка, металлические конструкции и винтажная мебель создают уникальную индустриальную атмосферу.',
      area: '180 м²',
      year: '2024',
      location: 'Москва'
    },
    {
      id: 4,
      title: 'Классическая гостиная',
      category: 'Классика',
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/files/b294a8b9-6f80-4f06-91c1-717cd8e8f640.jpg',
      description: 'Вневременная элегантность',
      fullDescription: 'Гостиная в классическом стиле с элементами ар-деко. Лепнина, хрустальные люстры и антикварная мебель создают атмосферу роскоши и изысканности.',
      area: '45 м²',
      year: '2023',
      location: 'Москва'
    },
    {
      id: 5,
      title: 'Современная кухня',
      category: 'Современный',
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/files/584081d5-6b4c-443b-8108-95caac4174a4.jpg',
      description: 'Функциональность и стиль',
      fullDescription: 'Кухня-студия с островом и встроенной техникой премиум-класса. Эргономичная планировка и стильный дизайн делают пространство максимально функциональным.',
      area: '30 м²',
      year: '2024',
      location: 'Москва'
    },
    {
      id: 6,
      title: 'Лофт с акцентами',
      category: 'Лофт',
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/files/9db60ed4-71eb-4aa0-96a3-1a19192c920b.jpg',
      description: 'Смелость в деталях',
      fullDescription: 'Студия в стиле лофт с яркими цветовыми акцентами. Открытые коммуникации и кирпичная кладка гармонично сочетаются с современной мебелью.',
      area: '65 м²',
      year: '2024',
      location: 'Санкт-Петербург'
    }
  ];

  const services = [
    {
      icon: 'Home',
      title: 'Полный дизайн',
      description: 'Комплексное проектирование от концепции до реализации'
    },
    {
      icon: 'PenTool',
      title: '3D визуализация',
      description: 'Фотореалистичные изображения вашего будущего интерьера'
    },
    {
      icon: 'Palette',
      title: 'Подбор материалов',
      description: 'Эксклюзивная палитра отделочных материалов'
    },
    {
      icon: 'Package',
      title: 'Комплектация',
      description: 'Закупка мебели и декора с учётом вашего бюджета'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Соколова',
      text: 'Невероятная работа! Студия воплотила все наши мечты в реальность. Каждая деталь продумана до мелочей.',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      text: 'Профессионализм на высшем уровне. Сроки соблюдены, бюджет не превышен. Рекомендую всем!',
      rating: 5
    },
    {
      name: 'Елена Петрова',
      text: 'Спасибо за уникальный дизайн нашей квартиры! Все гости в восторге. Вы создали настоящее произведение искусства.',
      rating: 5
    }
  ];

  return (
    <>
      {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <HeroSection scrollY={scrollY} />

      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О студии</h2>
              <p className="text-lg text-muted-foreground mb-6">
                LUXE — это команда профессионалов с 15-летним опытом создания уникальных интерьеров. 
                Мы превращаем пространства в произведения искусства, сочетая современные тренды с классическими принципами дизайна.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Наша философия — создавать не просто красивые интерьеры, а функциональные пространства, 
                которые отражают индивидуальность каждого клиента.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">250+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative grid grid-cols-2 gap-4 scroll-animate">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/c0f9447f-aee2-4aa9-a92c-e063ffa3fe1d.JPG"
                  alt="Наталья - главный дизайнер"
                  className="w-full h-full object-cover parallax-image transition-transform duration-100 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Наталья</h3>
                  <p className="text-sm text-white/80">Главный дизайнер</p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/7d92beb7-4b12-43c9-aabd-72c6bfd4d186.jpg"
                  alt="Елена - ведущий дизайнер"
                  className="w-full h-full object-cover parallax-image transition-transform duration-100 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Елена</h3>
                  <p className="text-sm text-white/80">Ведущий дизайнер</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioSection projects={projects} />

      <section id="services" className="py-24 bg-gradient-to-br from-primary via-purple-900 to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Комплексный подход к созданию интерьера вашей мечты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 p-6 scroll-animate"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <Icon name={service.icon} size={40} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Процесс работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачный и понятный путь к интерьеру вашей мечты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Консультация', desc: 'Знакомство, обсуждение идей и пожеланий' },
              { step: '02', title: 'Концепция', desc: 'Разработка дизайн-проекта и 3D визуализация' },
              { step: '03', title: 'Реализация', desc: 'Закупка материалов и авторский надзор' },
              { step: '04', title: 'Сдача', desc: 'Финальная приёмка и стайлинг пространства' }
            ].map((item, index) => (
              <div 
                key={item.step} 
                className="relative scroll-animate"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="text-6xl font-bold text-secondary/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас те, кто уже реализовал свои мечты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 scroll-animate"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <img 
              src="https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/cc940387-85a8-48a4-b9e3-1fa9b956675f.png" 
              alt="LUXE" 
              className="h-8"
              style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }}
            />
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-secondary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
            </div>
            <div className="text-sm text-white/60">
              © 2024 LUXE Design Studio. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Index;