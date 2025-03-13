
import { useEffect, useRef } from 'react';

const VisionSection = () => {
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

  return (
    <section 
      id="vision" 
      ref={sectionRef}
      className="section py-24 px-6"
      style={{ '--section-index': '0' } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 text-xs font-sans tracking-widest uppercase bg-vintage-green/10 text-vintage-green rounded-full">
                Vår Vision
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
                Vi bevarar det förflutnas skönhet för dagens livsmiljöer
              </h2>
              
              <div className="w-16 h-[2px] bg-vintage-terracotta"></div>
              
              <p className="text-muted-foreground">
                På Vintage Haven tror vi att de vackraste interiörerna berättar en historia. Varje möbel i vår 
                kollektion har handplockats för sin karaktär, hantverk och den unika energin den tillför ett rum.
              </p>
              
              <p className="text-muted-foreground">
                Vår mission är att rädda exceptionella vintagemöbler och inredning från förr, återställa dem 
                till sin ursprungliga glans och samtidigt ge dem nytt liv i moderna hem. Vi uppskattar 
                patinan som kommer med ålder – de små imperfektionerna som avslöjar ett föremåls resa genom tiden.
              </p>
              
              <p className="text-vintage-brown font-medium">
                Vi bjuder in dig att upptäcka möbler som resonerar med din personliga stil och som blir 
                värdefulla inslag i ditt hem för generationer framöver.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative h-[500px] w-full image-container rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop" 
                alt="Vintage interiör med trämöbler och växter" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
