
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
    { day: 'Måndag', hours: 'Stängt' },
    { day: 'Tisdag', hours: 'Stängt' },
    { day: 'Onsdag', hours: 'Stängt' },
    { day: 'Torsdag', hours: '11:00 - 16:00' },
    { day: 'Fredag', hours: '11:00 - 16:00' },
    { day: 'Lördag', hours: '11:00 - 16:00' },
    { day: 'Söndag', hours: '11:00 - 15:00' },
  ];

  return (
    <section 
      id="hours" 
      ref={sectionRef}
      className="section py-24 px-6 bg-custom-brown"
      style={{ '--section-index': '1' } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs tracking-widest uppercase bg-custom-gold/20 text-custom-cream rounded-full">
            Besök Oss
          </span>
          
          <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-6 leading-tight text-custom-cream">
            Öppettider
          </h2>
          
          <div className="w-16 h-[2px] bg-custom-gold mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-custom-cream/95 backdrop-blur-sm rounded-lg p-8 shadow-sm">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-custom-gold/10 flex items-center justify-center">
                <Clock className="w-8 h-8 text-custom-gold" />
              </div>
            </div>
            
            <div className="space-y-4">
              {hours.map((item) => (
                <div 
                  key={item.day}
                  className="flex justify-between py-3 border-b border-custom-terra/10 last:border-b-0"
                >
                  <span className="font-medium text-custom-brown">{item.day}</span>
                  <span className="text-custom-terra">{item.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-custom-terra/10 text-center">
              <p className="text-sm text-custom-brown">
                Specialbokningar finns tillgängliga för inredningsarkitekter och kommersiella projekt.
                <br />Kontakta oss på <span className="text-custom-terra">bokning@brukeriet.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
