
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
  url?: string;
}

const InstagramCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Updated photo collection with the requested images
  const instagramPosts: InstagramPost[] = [
    {
      id: 1,
      imageUrl: "/lovable-uploads/29F86351-37E8-468E-93A7-0F224F0EF290.JPG",
      url: "https://www.instagram.com/brukeriet"
    },
    {
      id: 2,
      imageUrl: "/lovable-uploads/2E09FA20-8ABB-43F4-97C9-1D0251196169.JPG",
      url: "https://www.instagram.com/brukeriet"
    },
    {
      id: 3,
      imageUrl: "/lovable-uploads/2EA37EB5-DCB1-4FCE-8DC6-29DF2470C3F6.JPG",
      url: "https://www.instagram.com/brukeriet"
    },
    {
      id: 4,
      imageUrl: "/lovable-uploads/4BA41F26-4E66-47EF-9135-6D3EA49F9376.JPG",
      url: "https://www.instagram.com/brukeriet"
    },
    {
      id: 5,
      imageUrl: "/lovable-uploads/6DF040E5-75B3-4876-834B-32AE31CC29F4.JPG",
      url: "https://www.instagram.com/brukeriet"
    },
    {
      id: 6,
      imageUrl: "/lovable-uploads/9D783DE5-92CE-4840-B73C-3BE6A59C6CC1.JPG",
      url: "https://www.instagram.com/brukeriet"
    },
    {
      id: 7,
      imageUrl: "/lovable-uploads/9E136025-6A59-449F-BC1E-2DC108372850.JPG",
      url: "https://www.instagram.com/brukeriet"
    },
    {
      id: 8,
      imageUrl: "/lovable-uploads/24C24012-27A8-445B-86C9-0DA508F7BA53.JPG",
      url: "https://www.instagram.com/brukeriet"
    },
    {
      id: 9,
      imageUrl: "/lovable-uploads/Brukeriet-27.jpg",
      url: "https://www.instagram.com/brukeriet"
    },
    {
      id: 10,
      imageUrl: "/lovable-uploads/Brukeriet-14.jpg",
      url: "https://www.instagram.com/brukeriet"
    },
    {
      id: 11,
      imageUrl: "/lovable-uploads/Brukeriet-15.jpg",
      url: "https://www.instagram.com/brukeriet"
    },
    {
      id: 12,
      imageUrl: "/lovable-uploads/Brukeriet-21.jpg",
      url: "https://www.instagram.com/brukeriet"
    },
    {
      id: 13,
      imageUrl: "/lovable-uploads/Brukeriet-25.jpg",
      url: "https://www.instagram.com/brukeriet"
    },
    {
      id: 14,
      imageUrl: "/lovable-uploads/Brukeriet-26.jpg",
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
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {instagramPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={post.imageUrl}
                      alt="Butiken"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="400"
                      height="400"
                      decoding="async"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-5 border-royal text-royal hover:bg-royal hover:text-cream" />
            <CarouselNext className="hidden md:flex -right-5 border-royal text-royal hover:bg-royal hover:text-cream" />
          </Carousel>

          <div className="mt-10 text-center">
            <p className="text-cream hover:bg-opacity-90 transition-colors">På vår Instagram får du en inblick i vad som finns inne just nu.</p>
            <a
              href="https://instagram.com/brukeriet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-royal text-cream px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              <Instagram size={20} className="mr-2" />
              brukeriet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;
