
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
    <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
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

      {/* Enhanced overlay with stronger gradient for better text contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <img
          src="lovable-uploads/a5bf94d6-3187-43a1-acf3-79bbf4e92bda.png"
          alt="Brukeriet Logo"
          className="w-[20rem] md:w-[24rem] lg:w-[28rem] mb-10 opacity-0 animate-fade-in drop-shadow-xl"
          style={{
            animationDelay: '0.3s',
            animationFillMode: 'forwards'
          }}
        />

        <a
          href="#var-drom"
          className="px-8 py-3 bg-custom-terra text-white font-medium uppercase tracking-wider shadow-lg hover:bg-custom-terra/90 transition-all transform hover:translate-y-[-2px] focus:ring-2 focus:ring-custom-terra focus:ring-offset-2 opacity-0 animate-fade-in"
          style={{
            animationDelay: '0.7s',
            animationFillMode: 'forwards'
          }}
        >
          Lär Känna Oss
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
