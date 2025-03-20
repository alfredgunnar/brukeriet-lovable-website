
import { Clock, Instagram } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const OppettiderSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        sectionRef.current?.classList.add('in-view');
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Only show open days
  const hourGroups = [{
    days: 'Torsdag - Lördag',
    hours: '11:00 - 16:00'
  }, {
    days: 'Söndag',
    hours: '11:00 - 15:00'
  }];
  return <section id="oppettider" ref={sectionRef} className="section py-16 px-6 bg-custom-brown relative" style={{
    '--section-index': '1'
  } as React.CSSProperties}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img src="lovable-uploads/994a0654-9951-465f-8427-7a8265a6521c.png" alt="Background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-custom-brown/80"></div>
      </div>

      {/* Content with relative positioning to appear above the background */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-4 leading-tight text-custom-cream">
            Öppettider
          </h2>
          
          {/* Separator removed */}
        </div>

        <Card className="max-w-md mx-auto bg-custom-cream/95 backdrop-blur-sm shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-custom-gold/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-custom-gold" />
              </div>
            </div>

            <div className="space-y-3">
              {hourGroups.map(group => <div key={group.days} className="flex justify-between items-center py-2 border-b border-custom-terra/10 last:border-b-0">
                  <span className="font-medium text-custom-brown">{group.days}</span>
                  <span className="text-custom-terra">{group.hours}</span>
                </div>)}
            </div>

            <div className="mt-6 pt-4 border-t border-custom-terra/10 text-center">
              
              <p className="text-xs text-custom-brown">Vi har alltid öppet på vår instagram. Där postar vi aktuella saker som händer i butiken och nya möbler som kommer in. Skriv gärna till oss i DM där eller skicka ett mail till info@brukeriet.se så svarar vi så fort vi kan. </p>
              <a href="https://www.instagram.com/brukeriet" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center mt-2 text-[#0047AB] hover:text-[#0047AB]/80 transition-colors">
                <Instagram className="h-4 w-4 mr-1" />
                <span className="text-xs">@brukeriet</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default OppettiderSection;
