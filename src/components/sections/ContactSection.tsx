import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
  };

  return (
    <section id="contact" className="relative py-24 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/765c629e-4a23-4b64-bec1-3f6ede5de41f.jpg)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-purple-900/90 to-secondary/90" />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-white/80">
            Готовы начать ваш проект? Оставьте заявку, и мы свяжемся с вами в течение 24 часов
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 scroll-animate">
          <form className="space-y-6" onSubmit={handleSubmit}>
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

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center scroll-animate">
            <Icon name="Phone" size={32} className="mx-auto mb-3 text-secondary" />
            <div className="font-semibold mb-2">Телефон</div>
            <a href="tel:+79063511615" className="block text-white/80 hover:text-secondary transition-colors text-sm mb-1">
              +7 906 351-16-15
            </a>
            <a href="tel:+79200016080" className="block text-white/80 hover:text-secondary transition-colors text-sm">
              +7 920 001-60-80
            </a>
          </div>
          <div className="text-center scroll-animate" style={{ transitionDelay: '0.1s' }}>
            <Icon name="Mail" size={32} className="mx-auto mb-3 text-secondary" />
            <div className="font-semibold mb-2">Email</div>
            <a href="mailto:kadakoff.nn@gmail.com" className="block text-white/80 hover:text-secondary transition-colors text-sm">
              kadakoff.nn@gmail.com
            </a>
          </div>
          <div className="text-center scroll-animate" style={{ transitionDelay: '0.2s' }}>
            <Icon name="Share2" size={32} className="mx-auto mb-3 text-secondary" />
            <div className="font-semibold mb-3">Социальные сети</div>
            <div className="flex justify-center gap-4">
              <a href="https://vk.com/kadakova_design_interirors" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 13.5c.728.726 1.5 1.413 2.07 2.197.252.35.49.703.638 1.116.21.586-.136 1.187-.798 1.223l-2.64-.002c-.675.056-1.218-.213-1.668-.662-.357-.356-.69-.73-1.035-1.094-.143-.152-.29-.293-.465-.41-.407-.273-.762-.187-.984.265-.227.455-.278.953-.306 1.453-.038.711-.296.898-1.008.93-1.52.073-2.963-.16-4.282-.964-1.162-.708-2.06-1.677-2.847-2.786-1.53-2.153-2.7-4.52-3.733-6.952-.223-.528-.063-.81.514-.82.96-.015 1.92-.012 2.878-.003.394.004.656.238.81.603.472 1.122.99 2.215 1.662 3.23.177.267.355.536.607.73.283.22.506.15.645-.17.09-.205.137-.43.167-.656.104-.807.115-1.616-.008-2.42-.076-.485-.364-.797-.85-.895-.246-.05-.21-.146-.09-.295.188-.237.365-.385.72-.385h2.662c.42.083.514.273.57.696l.003 2.968c-.003.166.083.66.383.77.24.085.4-.122.544-.278.656-.715 1.122-1.56 1.543-2.43.184-.381.346-.78.503-1.18.118-.3.305-.448.64-.44l2.854.004c.085 0 .172 0 .255.015.49.088.624.31.472.786-.235.74-.65 1.37-1.06 1.996-.44.67-.908 1.32-1.34 2-.395.617-.364 1.027.125 1.547z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/kadakova.design?igsh=MTIyMDEzeHRybmFuOA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-secondary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="https://t.me/kadakova_interior_design" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L7.773 13.99l-2.93-.918c-.64-.203-.658-.64.135-.954l11.445-4.413c.534-.198.997.127.82.954z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;