
import { useEffect, useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const images = [
  {
    src: "/lovable-uploads/fd89ec7c-7967-42ef-a8d1-b9a93e43ac36.png",
    alt: "Vintage interior with furniture and decorative items"
  },
  {
    src: "/lovable-uploads/994a0654-9951-465f-8427-7a8265a6521c.png",
    alt: "Elegant vintage furniture display"
  },
  {
    src: "/lovable-uploads/e8bbdeb1-097c-4101-846d-828f9bdafaa3.png",
    alt: "Antique furniture piece in a stylish setting"
  }
];

const GallerySection = () => {
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
      id="gallery" 
      ref={sectionRef}
      className="section py-24 px-6 bg-white"
      style={{ '--section-index': '3' } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium leading-tight text-custom-terra">
            Vår Kollektion
          </h2>
          
          <div className="w-16 h-[2px] bg-custom-gold mx-auto my-4"></div>
          
          <p className="max-w-2xl mx-auto text-custom-brown">
            Utforska vårt noggrant utvalda sortiment av vintage möbler och inredningsdetaljer 
            som ger karaktär och historia till ditt hem.
          </p>
        </div>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <AspectRatio ratio={4/3} className="bg-custom-cream/30">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static left-0 right-0 translate-y-0 mr-4" />
              <CarouselNext className="relative static left-0 right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
