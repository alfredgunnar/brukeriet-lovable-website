
import { MapPin, Phone, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';

const LocationSection = () => {
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
      id="location" 
      ref={sectionRef}
      className="section py-24 px-6 bg-custom-cream"
      style={{ '--section-index': '2' } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <div className="space-y-6">              
              <h2 className="text-3xl md:text-4xl font-medium leading-tight text-custom-brown">
                Besök Vår Butik
              </h2>
              
              <div className="w-16 h-[2px] bg-custom-gold"></div>
              
              <p className="text-custom-brown">
                Vår noggrant kurerade butik ligger i hjärtat av stadens historiska kvarter, 
                där du kan utforska vår kollektion i en vackert restaurerad byggnad från 1800-talet.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-custom-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-custom-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-custom-terra">Adress</h3>
                    <p className="text-custom-brown">
                      Storgatan 123<br />
                      Gamla Stan<br />
                      Stockholm, 11129
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-custom-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-custom-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-custom-terra">Telefon</h3>
                    <p className="text-custom-brown">
                      08-123 45 67
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-custom-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-custom-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-custom-terra">E-post</h3>
                    <p className="text-custom-brown">
                      hej@brukeriet.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg image-container">
              <img 
                src="/lovable-uploads/994a0654-9951-465f-8427-7a8265a6521c.png" 
                alt="Brukeriet butiksinredning" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
