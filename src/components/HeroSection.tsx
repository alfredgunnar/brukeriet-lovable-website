
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: 'translateZ(0)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-vintage-brown/30" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center text-white">
        <span className="inline-block px-3 py-1 mb-6 text-xs font-sans tracking-widest uppercase bg-white/10 backdrop-blur-sm rounded-full animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Est. 1987
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium mb-4 max-w-5xl leading-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Timeless Pieces for the Modern Home
        </h1>
        
        <p className="max-w-xl text-base md:text-lg text-white/90 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          Curated vintage furniture and décor that tells stories of the past while creating new memories in your space.
        </p>
        
        <a 
          href="#vision" 
          className="px-8 py-3 bg-vintage-cream text-vintage-brown font-medium rounded-full shadow-lg hover:bg-vintage-cream/90 transition-all transform hover:translate-y-[-2px] focus:ring-2 focus:ring-vintage-terracotta focus:ring-offset-2 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
        >
          Discover Our Story
        </a>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
        <div className="w-[1px] h-16 bg-white/30 mb-2"></div>
        <span className="text-white/70 text-sm">Scroll</span>
      </div>
    </div>
  );
};

export default HeroSection;
