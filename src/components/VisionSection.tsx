
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
                Vår vision är ett hem där dåtid och framtid möts
              </h2>
              
              <div className="w-16 h-[2px] bg-custom-gold"></div>
              
              <p className="text-custom-brown">
                Hej! Vi som driver Brukeriet heter Olivia och Alfred. På fantastiska Spinneriet i Lindome från 1907 har vi samlat det vi själva älskar - tidlösa vintagemöbler och spännande nyproducerad svensk design med hållbarhet i fokus.
              </p>
              
              <p className="text-custom-brown">
                När det gäller vintage handplockar vi varje unik pjäs för dess karaktär, kvalitet och den speciella känsla den förmedlar. Vi uppskattar patinan som kommer med ålder – de små imperfektionerna som avslöjar ett föremåls resa genom tiden.
              </p>
              
              <p className="text-custom-brown">
                Samtidigt samarbetar vi med kreativa svenska formgivare som skapar allt från 3D-printade lampor av återvunnet material till linnetextilier tillverkade här i Sverige och ljushållare gjorda av spillmaterial från stålindustrin. Allt har en tanke och en historia.
              </p>
              
              <p className="text-custom-terra font-medium">
                Vi vill att du ska hitta både de perfekta vintagepjäserna och de moderna, hållbara detaljerna som tillsammans skapar ett personligt hem. Välkommen in och låt dig inspireras!
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-[350px] w-full image-container rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/E7549DA8-37F2-4D42-82FD-334139C2ADF2.JPG" 
                  alt="Vintage interiör med designmöbler och inredning" 
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-custom-brown/10"></div>
              </div>
              <div className="relative h-[350px] w-full image-container rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/BE6E6EFD-88A2-42E1-BB87-7852661F3C6E.JPG" 
                  alt="Vintagemöbler i modern inredning" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-custom-brown/10"></div>
              </div>
              <div className="relative h-[200px] md:h-[250px] w-full image-container rounded-lg overflow-hidden shadow-lg md:col-span-2">
                <img 
                  src="/lovable-uploads/4BA41F26-4E66-47EF-9135-6D3EA49F9376.JPG" 
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
