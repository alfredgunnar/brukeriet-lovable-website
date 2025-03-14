
import { MapPin, Mail, Bus, Car } from 'lucide-react';
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <div className="space-y-6">              
              <h2 className="text-3xl md:text-4xl font-medium leading-tight text-custom-brown">
                Hitta hit
              </h2>
              
              <div className="w-16 h-[2px] bg-custom-terra"></div>
              
              <p className="text-custom-brown">
                Vår noggrant kurerade butik ligger i hjärtat av stadens historiska kvarter, 
                där du kan utforska vår kollektion i en vackert restaurerad byggnad från 1800-talet.
              </p>
              
              <div className="mt-8 space-y-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-custom-terra/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-custom-terra" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-custom-terra">Adress</h3>
                    <p className="text-custom-brown">
                      Spinnmästarevägen 2<br />
                      43734 Lindome
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-custom-terra/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-custom-terra" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-custom-terra">E-post</h3>
                    <p className="text-custom-brown">
                      info@brukeriet.se
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-custom-terra/10 flex items-center justify-center shrink-0">
                    <Bus className="w-5 h-5 text-custom-terra" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-custom-terra">Kollektivtrafik</h3>
                    <p className="text-custom-brown">
                      Vill du åka kollektivt från Göteborg eller Kungsbacka så ta pendeltåget till Lindome station.
                      <br /><br />
                      Åk därifrån buss 761 mot Mölndal och gå av vid Annestorpsvägen.
                      <br /><br />
                      Fortsätt sedan till fots ett par minuter på samma väg du gått av, men bakåt i bussens färdriktning. 
                      Du kommer ha ett grönt radhusområde på din högra sida. Precis efter radhusen svänger du vänster upp på Spinnmästarevägen. Framme!
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-custom-terra/10 flex items-center justify-center shrink-0">
                    <Car className="w-5 h-5 text-custom-terra" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-custom-terra">Parkering</h3>
                    <p className="text-custom-brown">
                      Vi har 200 kostnadsfria parkeringsplatser tillgängliga för våra besökare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg border-2 border-custom-terra/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.553837375168!2d12.0986673!3d57.6165978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff0ea4b8b2a7b%3A0x3b20d78133d980c6!2sSpinnm%C3%A4starev%C3%A4gen%202%2C%20437%2034%20Lindome!5e0!3m2!1ssv!2sse!4v1717073883764!5m2!1ssv!2sse" 
                className="w-full h-full border-0"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brukeriet location map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
