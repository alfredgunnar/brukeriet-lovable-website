
import { Clock } from 'lucide-react';
import { useEffect, useRef } from 'react';

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

  const hours = [
    { day: 'Måndag', hours: '10:00 - 18:00' },
    { day: 'Tisdag', hours: '10:00 - 18:00' },
    { day: 'Onsdag', hours: '10:00 - 18:00' },
    { day: 'Torsdag', hours: '10:00 - 19:00' },
    { day: 'Fredag', hours: '10:00 - 19:00' },
    { day: 'Lördag', hours: '09:00 - 20:00' },
    { day: 'Söndag', hours: '11:00 - 17:00' },
  ];

  return (
    <section 
      id="hours" 
      ref={sectionRef}
      className="section py-24 px-6 bg-vintage-taupe/10"
      style={{ '--section-index': '1' } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-sans tracking-widest uppercase bg-vintage-brown/10 text-vintage-brown rounded-full">
            Besök Oss
          </span>
          
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-6 leading-tight">
            Öppettider
          </h2>
          
          <div className="w-16 h-[2px] bg-vintage-terracotta mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-vintage-green/10 flex items-center justify-center">
                <Clock className="w-8 h-8 text-vintage-green" />
              </div>
            </div>
            
            <div className="space-y-4">
              {hours.map((item, index) => (
                <div 
                  key={item.day}
                  className="flex justify-between py-3 border-b border-vintage-taupe/20 last:border-b-0"
                >
                  <span className="font-medium">{item.day}</span>
                  <span className="text-vintage-brown">{item.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-vintage-taupe/20 text-center">
              <p className="text-sm text-muted-foreground">
                Specialbokningar finns tillgängliga för inredningsarkitekter och kommersiella projekt.
                <br />Kontakta oss på <span className="text-vintage-brown">bokning@vintagehaven.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
