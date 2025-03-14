
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
      className="section py-24 px-6 bg-custom-cream"
      style={{ '--section-index': '0' } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">              
              <h2 className="text-3xl md:text-4xl font-medium leading-tight text-custom-terra">
                Vi bevarar det förflutnas skönhet för dagens livsmiljöer
              </h2>
              
              <div className="w-16 h-[2px] bg-custom-gold"></div>
              
              <p className="text-custom-brown">
                På Brukeriet tror vi att de vackraste interiörerna berättar en historia. Varje möbel i vår 
                kollektion har handplockats för sin karaktär, hantverk och den unika energin den tillför ett rum.
              </p>
              
              <p className="text-custom-brown">
                Vår mission är att rädda exceptionella vintagemöbler och inredning från förr, återställa dem 
                till sin ursprungliga glans och samtidigt ge dem nytt liv i moderna hem. Vi uppskattar 
                patinan som kommer med ålder – de små imperfektionerna som avslöjar ett föremåls resa genom tiden.
              </p>
              
              <p className="text-custom-terra font-medium">
                Vi bjuder in dig att upptäcka möbler som resonerar med din personliga stil och som blir 
                värdefulla inslag i ditt hem för generationer framöver.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-[350px] w-full image-container rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/Brukeriet-2.jpg" 
                  alt="Vintage interiör med designmöbler och inredning" 
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-custom-brown/10"></div>
              </div>
              <div className="relative h-[350px] w-full image-container rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/e8bbdeb1-097c-4101-846d-828f9bdafaa3.png" 
                  alt="Vintagemöbler i modern inredning" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-custom-brown/10"></div>
              </div>
              <div className="relative h-[200px] md:h-[250px] w-full image-container rounded-lg overflow-hidden shadow-lg md:col-span-2">
                <img 
                  src="/lovable-uploads/Brukeriet-21.jpg" 
                  alt="Eleganta vintage designföremål" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-custom-brown/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
