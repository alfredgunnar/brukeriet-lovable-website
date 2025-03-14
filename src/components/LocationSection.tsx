
import { MapPin, Mail, Bus, Car, Link } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Button } from './ui/button';

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
              
              <div className="w-16 h-[2px] bg-custom-gold"></div>
              
              <p className="text-custom-brown">
                Välkommen till vår inspirerande butik på Spinneriet i Lindome!
              </p>
              
              <div className="mt-8 space-y-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-custom-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-custom-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-custom-terra">Adress</h3>
                    <p className="text-custom-brown">
                      Spinnmästarevägen 2<br />
                      43734 Lindome
                    </p>
                    <div className="mt-2">
                      <a 
                        href="https://www.spinnerietlindome.se/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-custom-gold hover:text-custom-terra transition-colors"
                      >
                        <Link className="w-4 h-4 mr-1" />
                        <span className="underline">spinnerietlindome.se</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-custom-gold/10 flex items-center justify-center shrink-0">
                    <Bus className="w-5 h-5 text-custom-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-custom-terra">Kollektivtrafik</h3>
                    <p className="text-custom-brown">
                      Pendeltåg från Göteborg eller Kungsbacka till Lindome station. Därifrån tar du buss 761 mot Mölndal och går av vid Annestorpsvägen.
                      <br /><br />
                      När du klivit av bussen, fortsätt ett par minuter på samma väg men bakåt i bussens färdriktning. Du har ett grönt radhusområde på höger sida. Sväng sedan vänster upp på Spinnmästarevägen - och du är framme!
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-custom-gold/10 flex items-center justify-center shrink-0">
                    <Car className="w-5 h-5 text-custom-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-custom-terra">Parkering</h3>
                    <p className="text-custom-brown">
                      Det finns gott om kostnadsfria parkeringsplatser precis utanför vår lokal, så det är enkelt att besöka oss med bil.
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
                      info@brukeriet.se
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.553837375168!2d12.0986673!3d57.6165978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff0ea4b8b2a7b%3A0x3b20d78133d980c6!2sSpinnm%C3%A4starev%C3%A4gen%202%2C%20437%2034%20Lindome!5e0!3m2!1ssv!2sse!4v1717073883764!5m2!1ssv!2sse&maptype=satellite" 
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
