
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPosition = window.scrollY;
      containerRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/lovable-uploads/Brukeriet-25.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: 'translateZ(0)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-custom-brown/40 to-custom-terra/40" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center text-custom-cream">
        <span className="inline-block px-3 py-1 mb-6 text-xs tracking-widest uppercase bg-custom-brown/20 backdrop-blur-sm rounded-full animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Est. 1987
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-4 max-w-5xl leading-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Tidlösa Möbler för det Moderna Hemmet
        </h1>
        
        <p className="max-w-xl text-base md:text-lg text-custom-cream/90 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          Noggrant utvalda vintagemöbler och inredningsdetaljer som berättar historier från det förflutna samtidigt som de skapar nya minnen i ditt hem.
        </p>
        
        <a 
          href="#vision" 
          className="px-8 py-3 bg-custom-gold text-custom-cream font-medium uppercase tracking-wider rounded-md shadow-lg hover:bg-custom-gold/90 transition-all transform hover:translate-y-[-2px] focus:ring-2 focus:ring-custom-terra focus:ring-offset-2 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
        >
          Upptäck Vår Historia
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
