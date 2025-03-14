
import { useEffect, useRef } from 'react';

const FullWidthImageSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <div 
      ref={sectionRef}
      className="section relative w-full h-[60vh] md:h-[70vh] overflow-hidden"
      style={{ '--section-index': '4' } as React.CSSProperties}
    >
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/lovable-uploads/994a0654-9951-465f-8427-7a8265a6521c.png" 
          alt="Eleganta vintagemöbler i stilleben" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-custom-brown/60 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-custom-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-medium italic mb-6">
            "Varje möbel har en historia att berätta, ett minne att väcka, och en framtid att skapa."
          </p>
          <div className="w-16 h-[2px] bg-custom-gold mx-auto mb-2"></div>
          <p className="text-sm uppercase tracking-wider">Brukeriet</p>
        </div>
      </div>
    </div>
  );
};

export default FullWidthImageSection;
