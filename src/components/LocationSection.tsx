
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
      className="section py-24 px-6"
      style={{ '--section-index': '2' } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 text-xs font-sans tracking-widest uppercase bg-vintage-terracotta/10 text-vintage-terracotta rounded-full">
                Find Us
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
                Visit Our Showroom
              </h2>
              
              <div className="w-16 h-[2px] bg-vintage-green"></div>
              
              <p className="text-muted-foreground">
                Our carefully curated showroom is located in the heart of the city's historic district, 
                where you can explore our collection in a beautifully restored 19th-century building.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-vintage-brown/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-vintage-brown" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      123 Heritage Lane<br />
                      Antiquity District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-vintage-brown/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-vintage-brown" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      (212) 555-1234
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-vintage-brown/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-vintage-brown" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      hello@vintagehaven.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg image-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8827246595906!2d-73.9907510000000!3d40.749452000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca8b8d4c40cee5f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1699629573426!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Vintage Haven Location Map"
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
