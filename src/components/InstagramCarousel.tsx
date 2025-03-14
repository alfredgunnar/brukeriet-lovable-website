
import { useEffect, useState, useRef } from 'react';
import { Instagram } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface InstagramPost {
  id: string | number;
  imageUrl: string;
  caption: string;
  likes?: number;
  url?: string;
}

const InstagramCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Sample manual uploads - replace these with your own uploaded images
  const instagramPosts: InstagramPost[] = [
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
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
    <section ref={sectionRef} className="py-16 md:py-20 bg-custom-brown bg-opacity-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/61c81ec4-6269-4076-9d95-577ff45a1f98.png')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 
            className={`section-title mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Det senaste från butiken
          </h2>
          
          <p 
            className={`text-coffee max-w-2xl mx-auto mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Vi uppdaterar regelbundet med bilder på nyheter 
            och aktuella föremål i butiken. Bilder kan laddas upp manuellt för att 
            visa de senaste produkterna och händelserna i vår butik.
          </p>
        </div>
        
        <div 
          className={`max-w-5xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {instagramPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square relative group overflow-hidden rounded-lg">
                    <img 
                      src={post.imageUrl} 
                      alt={post.caption} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white p-4 text-center absolute bottom-0 left-0 right-0 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Instagram className="mx-auto mb-2" size={24} />
                        <p className="font-medium text-sm drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">{post.caption}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-5 border-royal text-royal hover:bg-royal hover:text-cream" />
            <CarouselNext className="hidden md:flex -right-5 border-royal text-royal hover:bg-royal hover:text-cream" />
          </Carousel>
          
          <div className="mt-8 text-center">
            <a 
              href="https://instagram.com/brukeriet" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-royal text-cream px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              <Instagram size={20} className="mr-2" />
              Följ oss på Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;
