
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
          backgroundImage: 'url(https://storage.googleapis.com/gpt-engineer-file-uploads/q5weDLyZRpOVVC6Qv4QCV2OH98Z2/659630e8-7b75-45eb-9af5-cddb0b4b3f16?Expires=1741904019&GoogleAccessId=admin-2%40gpt-engineer-390607.iam.gserviceaccount.com&Signature=xQ7%2Fo%2BiZoO%2BeBko3TThAtqb6s%2FUtLc68k07FJacZP%2F7QlYTdffVS3gnZ5xzXtqVb%2FFHfdigx7bEnYZRtDPoVSRoBDh0x6kyzIrLm19aSM38sESK1op32jzc%2FtDPb5bX7xkKQ4zMfS8O%2BdeUK4SgScBJ1P5GM%2BqgP91UwbjV0uY3g9kEJQhQVqcW0FVSKQTrZTkT5m0BK8qXqx77eo99y2yc3brFu%2Fbnc8h%2BSdKXiNMRnE9O7%2FARTCzQ7ALU4mJgB3Sy3rSdCIUFZicsGqeJlDi8gBHN4GABSHqjD48T7yZhUu6JsNN0dJQYsmoN9BKtzrzS1XyppN4V6Pv4YPA%2F4Sw%3D%3D)',
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
