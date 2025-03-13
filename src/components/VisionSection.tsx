
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
                Our Vision
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
                Preserving the beauty of the past for today's living spaces
              </h2>
              
              <div className="w-16 h-[2px] bg-vintage-terracotta"></div>
              
              <p className="text-muted-foreground">
                At Vintage Haven, we believe that the most beautiful interiors tell a story. Every piece in our 
                collection has been handpicked for its character, craftsmanship, and the unique energy it brings 
                to a space.
              </p>
              
              <p className="text-muted-foreground">
                Our mission is to rescue exceptional vintage furnishings and décor from the past, restoring them 
                to their original glory while giving them new life in contemporary homes. We appreciate the 
                patina that comes with age – the small imperfections that reveal an object's journey through time.
              </p>
              
              <p className="text-vintage-brown font-medium">
                We invite you to discover pieces that resonate with your personal style and will become treasured 
                elements of your home for generations to come.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative h-[500px] w-full image-container rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop" 
                alt="Vintage interior with wooden furniture and plants" 
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
