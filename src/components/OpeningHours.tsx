
import { Clock, Instagram } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const OpeningHours = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('in-view');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Group similar days together
  const hourGroups = [
    { days: 'Måndag - Onsdag', hours: 'Stängt' },
    { days: 'Torsdag - Lördag', hours: '11:00 - 16:00' },
    { days: 'Söndag', hours: '11:00 - 15:00' },
  ];

  return (
    <section 
      id="hours" 
      ref={sectionRef}
      className="section py-16 px-6 bg-custom-brown"
      style={{ '--section-index': '1' } as React.CSSProperties}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-xs tracking-widest uppercase bg-custom-gold/20 text-custom-cream rounded-full">
            Besök Oss
          </span>
          
          <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-4 leading-tight text-custom-cream">
            Öppettider
          </h2>
          
          <div className="w-12 h-[2px] bg-custom-gold mx-auto"></div>
        </div>
        
        <Card className="max-w-md mx-auto bg-custom-cream/95 backdrop-blur-sm shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-custom-gold/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-custom-gold" />
              </div>
            </div>
            
            <div className="space-y-3">
              {hourGroups.map((group) => (
                <div 
                  key={group.days}
                  className="flex justify-between items-center py-2 border-b border-custom-terra/10 last:border-b-0"
                >
                  <span className="font-medium text-custom-brown">{group.days}</span>
                  <span className="text-custom-terra">{group.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-custom-terra/10 text-center">
              <p className="text-xs text-custom-brown">
                Öppettider kan ändras under helgdagar. Följ oss på Instagram för senaste information.
              </p>
              <a 
                href="https://www.instagram.com/brukeriet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center mt-2 text-custom-terra hover:text-custom-gold transition-colors"
              >
                <Instagram className="h-4 w-4 mr-1" />
                <span className="text-xs">@brukeriet</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OpeningHours;
