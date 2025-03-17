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
          src="lovable-uploads/Brukeriet-29.jpg"
          alt="Eleganta vintagemöbler i stilleben"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-custom-brown/60 to-transparent"></div>
      </div>
    </div>
  );
};

export default FullWidthImageSection;
