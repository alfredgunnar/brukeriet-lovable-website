
import { Clock, Instagram } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const OppettiderSection = () => {
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

  // Only show open days
  const hourGroups = [
    { days: 'Torsdag - Lördag', hours: '11:00 - 16:00' },
    { days: 'Söndag', hours: '11:00 - 15:00' },
  ];

  return (
    <section
      id="oppettider"
      ref={sectionRef}
      className="section py-20 px-6 bg-white relative"
      style={{ '--section-index': '1' } as React.CSSProperties}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-4 leading-tight text-custom-brown">
            Öppettider
          </h2>

          <div className="w-16 h-[2px] bg-custom-gold mx-auto mb-6"></div>
          
          <p className="text-custom-brown max-w-2xl mx-auto">
            Välkommen att besöka oss på Spinneriet i Lindome under våra öppettider. 
            Vi har även extraöppet vid särskilda tillfällen, följ oss på Instagram för aktuell information.
          </p>
        </div>

        <Card className="max-w-md mx-auto bg-white shadow-lg border border-gray-100 hover-scale">
          <CardContent className="pt-8 pb-6">
            <div className="flex items-center justify-center mb-8">
              <div className="w-14 h-14 bg-custom-gold/10 flex items-center justify-center">
                <Clock className="w-7 h-7 text-custom-gold" />
              </div>
            </div>

            <div className="space-y-4">
              {hourGroups.map((group) => (
                <div
                  key={group.days}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="font-medium text-custom-brown text-lg">{group.days}</span>
                  <span className="text-custom-terra font-medium">{group.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 text-center">
              <p className="text-sm text-custom-brown mb-1">
                Öppettider kan justeras vid högtider.
              </p>
              <a
                href="https://www.instagram.com/brukeriet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-3 text-custom-terra hover:text-custom-gold transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                <span>@brukeriet</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OppettiderSection;
