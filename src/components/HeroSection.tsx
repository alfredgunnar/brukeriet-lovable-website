
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPosition = window.scrollY;
      containerRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[450px] md:h-[700px] w-full overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(lovable-uploads/80fdf4af-8d73-435f-857c-6eff24a9244b.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: 'translateZ(0)'
        }}
      />

      {/* Enhanced overlay with more transparency for better visibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <img
          src="lovable-uploads/439c5560-76bf-49c6-8514-eced0f4e3485.png"
          alt="Brukeriet Logo"
          className="w-[40rem] md:w-[48rem] lg:w-[56rem] mb-10 opacity-0 animate-fade-in drop-shadow-xl"
          style={{
            animationDelay: '0.3s',
            animationFillMode: 'forwards'
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
