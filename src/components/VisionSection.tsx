import { useEffect, useRef } from 'react';
const VarDromSection = () => {
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
  return <section id="var-drom" ref={sectionRef} className="section py-24 px-6 bg-custom-cream" style={{
    '--section-index': '0'
  } as React.CSSProperties}>
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="order-1 lg:order-1">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight text-custom-terra">
              Vår vintage-dröm på Spinneriet i Lindome
            </h2>

            <div className="w-16 h-[2px] bg-custom-gold"></div>

            <p className="text-custom-brown">Hej! I det gamla Spinneriet från 1907 i Lindome har vi, Olivia &amp; Alfred, öppnat vår lilla drömbutik. Här hittar du en härlig mix av gamla möbler, unika prylar och ny, hållbart producerad interiör.</p>

            <p className="text-custom-brown">
              Vi älskar att ge gamla möbler en ny chans. En skvätt linoljefärg, lite nytt tyg eller kanske bara nya knoppar – det gör susen! Vi hoppas att våra möbler ska få sprida glädje i ditt hem i många år framöver.
            </p>

            <p className="text-custom-brown">
              Så kom förbi Spinneriet, ta en fika hos någon av våra café-grannar och kika runt. Vi snackar gärna inredning och hjälper dig att hitta de där speciella detaljerna som gör ditt hem till en plats där du verkligen trivs.
            </p>

            <p className="text-custom-terra font-medium">
              Välkommen in!
            </p>

            <p className="text-custom-terra font-medium italic">
              / Olivia & Alfred
            </p>
          </div>
        </div>

        <div className="order-2 lg:order-2 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-[350px] w-full image-container rounded-lg overflow-hidden shadow-lg">
              <img src="lovable-uploads/E7549DA8-37F2-4D42-82FD-334139C2ADF2.JPG" alt="Vintage interiör med designmöbler och inredning" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width="700" height="350" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-custom-brown/10"></div>
            </div>
            <div className="relative h-[350px] w-full image-container rounded-lg overflow-hidden shadow-lg">
              <img src="lovable-uploads/BE6E6EFD-88A2-42E1-BB87-7852661F3C6E.JPG" alt="Vintagemöbler i modern inredning" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" width="700" height="350" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-custom-brown/10"></div>
            </div>
            <div className="relative h-[200px] md:h-[250px] w-full image-container rounded-lg overflow-hidden shadow-lg md:col-span-2">
              <img src="lovable-uploads/4BA41F26-4E66-47EF-9135-6D3EA49F9376.JPG" alt="Eleganta vintage designföremål" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" width="1400" height="250" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-custom-brown/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default VarDromSection;
