
import { useEffect, useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Instagram } from 'lucide-react';

// Sample Instagram images - these would ideally come from an Instagram API
const instagramPosts = [
  {
    id: 1,
    imageUrl: "/lovable-uploads/Brukeriet-26.jpg",
    caption: "Vintage och återbruk hos oss idag",
    likes: 42,
    url: "https://www.instagram.com/brukeriet"
  },
  {
    id: 2,
    imageUrl: "/lovable-uploads/Brukeriet-27.jpg",
    caption: "Ny leverans av svenska designlampor",
    likes: 38,
    url: "https://www.instagram.com/brukeriet"
  },
  {
    id: 3,
    imageUrl: "/lovable-uploads/Brukeriet-29.jpg",
    caption: "Veckans favoriter i butiken",
    likes: 56,
    url: "https://www.instagram.com/brukeriet"
  },
  {
    id: 4,
    imageUrl: "/lovable-uploads/Brukeriet-14.jpg",
    caption: "Vårens nyheter har anlänt",
    likes: 49,
    url: "https://www.instagram.com/brukeriet"
  },
  {
    id: 5,
    imageUrl: "/lovable-uploads/Brukeriet-15.jpg",
    caption: "Tidlös design möter modern inredning",
    likes: 62,
    url: "https://www.instagram.com/brukeriet"
  }
];

const InstagramCarousel = () => {
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
      id="instagram" 
      ref={sectionRef}
      className="section py-16 px-6 bg-white"
      style={{ '--section-index': '1.5' } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Instagram className="h-5 w-5 text-custom-terra" />
            <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-4 leading-tight text-custom-terra">
              Vårt Instagram flöde
            </h2>
          </div>
          
          <div className="w-12 h-[2px] bg-custom-gold mx-auto mb-4"></div>
          
          <p className="max-w-xl mx-auto text-custom-brown text-base">
            Följ oss på <a 
              href="https://www.instagram.com/brukeriet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-custom-gold hover:text-custom-terra transition-colors font-medium"
            >
              @brukeriet
            </a> för daglig inspiration och nyheter
          </p>
        </div>

        <div className="mt-8">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {instagramPosts.map((post) => (
                <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <a 
                    href={post.url}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block group"
                  >
                    <div className="overflow-hidden rounded-lg shadow-md bg-white">
                      <div className="relative aspect-square">
                        <img
                          src={post.imageUrl}
                          alt={post.caption}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                          <span className="text-white text-sm truncate">{post.caption}</span>
                        </div>
                      </div>
                      <div className="p-3 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Instagram className="h-4 w-4 text-custom-terra" />
                          <span className="text-xs text-custom-brown">@brukeriet</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-custom-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          </svg>
                          <span className="text-xs text-custom-brown">{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static left-0 right-0 translate-y-0 mr-4" />
              <CarouselNext className="relative static left-0 right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;
