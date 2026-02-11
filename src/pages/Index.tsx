import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
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

  const filters = ['Все', 'Современный', 'Классика', 'Лофт', 'Скандинавский'];

  const filteredProjects = activeFilter === 'Все' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img 
            src="https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/cc940387-85a8-48a4-b9e3-1fa9b956675f.png" 
            alt="LUXE" 
            className="h-10 brightness-0 saturate-0"
            style={{ filter: 'brightness(0) saturate(100%) invert(11%) sepia(17%) saturate(1127%) hue-rotate(193deg) brightness(93%) contrast(92%)' }}
          />
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-sm hover:text-secondary transition-colors">О студии</a>
            <a href="#portfolio" className="text-sm hover:text-secondary transition-colors">Портфолио</a>
            <a href="#services" className="text-sm hover:text-secondary transition-colors">Услуги</a>
            <a href="#process" className="text-sm hover:text-secondary transition-colors">Процесс</a>
            <a href="#testimonials" className="text-sm hover:text-secondary transition-colors">Отзывы</a>
            <Button className="relative overflow-hidden bg-gradient-to-r from-secondary via-purple-500 to-secondary bg-[length:200%_100%] hover:bg-[position:100%_0] active:scale-95 transition-all duration-500 text-primary font-semibold">
              Связаться
            </Button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-purple-900 to-secondary"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute inset-0 bg-black/30"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Создаём пространства<br />вашей мечты
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Элегантные интерьеры, где роскошь встречается с функциональностью
          </p>
          <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6">
            Начать проект
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
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
            <div className="relative h-[500px] rounded-2xl overflow-hidden animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/files/b294a8b9-6f80-4f06-91c1-717cd8e8f640.jpg"
                alt="Interior Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждый проект — уникальная история, созданная с любовью к деталям
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? 'bg-secondary hover:bg-secondary/90 text-primary' : ''}
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group cursor-pointer overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-xs uppercase tracking-wider text-secondary mb-2">{project.category}</div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-white/90">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-gradient-to-br from-primary via-purple-900 to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Комплексный подход к созданию интерьера вашей мечты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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
          <div className="text-center mb-16 animate-fade-in">
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
                className="relative animate-slide-in-right"
                style={{ animationDelay: `${index * 0.15}s` }}
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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас те, кто уже реализовал свои мечты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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

      <section id="contact" className="py-24 bg-gradient-to-br from-primary via-purple-900 to-secondary text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-white/80">
              Готовы начать ваш проект? Оставьте заявку, и мы свяжемся с вами в течение 24 часов
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 animate-scale-in">
            <form className="space-y-6" onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              
              const formData = new FormData(e.currentTarget);
              const data = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                message: formData.get('message')
              };
              
              try {
                const response = await fetch('https://functions.poehali.dev/7ad19a66-b8ca-4de7-8c99-e1de0b50f0ad', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                  toast({
                    title: 'Заявка отправлена!',
                    description: result.message,
                  });
                  e.currentTarget.reset();
                } else {
                  toast({
                    title: 'Ошибка',
                    description: result.error || 'Не удалось отправить заявку',
                    variant: 'destructive'
                  });
                }
              } catch (error) {
                toast({
                  title: 'Ошибка',
                  description: 'Проблема с подключением. Попробуйте позже.',
                  variant: 'destructive'
                });
              } finally {
                setIsSubmitting(false);
              }
            }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    name="name"
                    required
                    placeholder="Ваше имя" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  name="email"
                  type="email"
                  placeholder="your@email.com" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Расскажите о вашем проекте</label>
                <Textarea 
                  name="message"
                  placeholder="Опишите ваши идеи и пожелания..." 
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-secondary text-primary hover:bg-secondary/90 text-lg"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </Button>
            </form>
          </Card>

          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="animate-fade-in">
              <Icon name="Phone" size={32} className="mx-auto mb-3 text-secondary" />
              <div className="font-semibold mb-1">Телефон</div>
              <div className="text-white/80">+7 (495) 123-45-67</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-secondary" />
              <div className="font-semibold mb-1">Email</div>
              <div className="text-white/80">hello@luxe-design.ru</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="MapPin" size={32} className="mx-auto mb-3 text-secondary" />
              <div className="font-semibold mb-1">Адрес</div>
              <div className="text-white/80">Москва, Тверская 1</div>
            </div>
          </div>
        </div>
      </section>

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

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold mb-2">{selectedProject.title}</DialogTitle>
                <div className="text-sm text-muted-foreground">{selectedProject.category}</div>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4 py-4 border-y">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Площадь</div>
                    <div className="font-semibold text-lg">{selectedProject.area}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Год</div>
                    <div className="font-semibold text-lg">{selectedProject.year}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Локация</div>
                    <div className="font-semibold text-lg">{selectedProject.location}</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">О проекте</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.fullDescription}</p>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white"
                  size="lg"
                >
                  Заказать похожий проект
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;