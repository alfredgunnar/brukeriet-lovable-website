
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
      
      {/* Enhanced overlay with stronger gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-custom-brown/60 to-custom-terra/70" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium mb-4 max-w-5xl leading-tight text-custom-cream drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          Vintage Möts Hållbar Nutid
        </h1>
        
        <p className="max-w-xl text-base md:text-lg text-white mb-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Vi handplockar både unika vintagepjäser och nya, svenskdesignade hållbara inredningsdetaljer. Allt hos oss har en historia - vissa från förr, andra bara i början på sin resa.
        </p>
        
        <a 
          href="#vision" 
          className="px-8 py-3 bg-custom-gold/90 text-white font-medium uppercase tracking-wider rounded-md shadow-lg hover:bg-custom-gold transition-all transform hover:translate-y-[-2px] focus:ring-2 focus:ring-custom-terra focus:ring-offset-2 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          Lär Känna Oss
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
