
import { useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useElementVisibility } from '@/hooks/use-element-visibility';
import { instagramPosts } from '@/data/instagramPosts';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import InstagramCarouselItem from './instagram/InstagramCarouselItem';
import MobileSwipeHint from './instagram/MobileSwipeHint';
import InstagramCallToAction from './instagram/InstagramCallToAction';

const InstagramCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useElementVisibility(sectionRef);
  const isMobile = useIsMobile();

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-custom-brown bg-opacity-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('lovable-uploads/61c81ec4-6269-4076-9d95-577ff45a1f98.png')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Mobile swipe hint */}
          {isMobile && <MobileSwipeHint />}
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
              skipSnaps: false,
              containScroll: "trimSnaps"
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {instagramPosts.map((post) => (
                <InstagramCarouselItem 
                  key={post.id}
                  post={post} 
                  isMobile={isMobile} 
                />
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-5 border-royal text-royal hover:bg-royal hover:text-cream" />
            <CarouselNext className="hidden md:flex -right-5 border-royal text-royal hover:bg-royal hover:text-cream" />
          </Carousel>

          <InstagramCallToAction />
        </div>
      </div>
    </section>
  );
};

export default InstagramCarousel;
