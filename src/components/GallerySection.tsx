
import { useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useElementVisibility } from '@/hooks/use-element-visibility';
import { galleryPosts } from '@/data/galleryPosts';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GalleryCarouselItem from './gallery/GalleryCarouselItem';
import GallerySocialLink from './gallery/GallerySocialLink';

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useElementVisibility(sectionRef);
  const isMobile = useIsMobile();

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-custom-brown mb-4">Från vårt galleri</h2>
          <p className="text-custom-brown opacity-80">Ta en titt på våra senaste tillskott och favoriter från butiken</p>
        </div>
        
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
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
              {galleryPosts.map((post) => (
                <GalleryCarouselItem
                  key={post.id}
                  post={post}
                  isMobile={isMobile}
                />
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-5 border-custom-brown text-custom-brown hover:bg-custom-brown hover:text-white" />
            <CarouselNext className="hidden md:flex -right-5 border-custom-brown text-custom-brown hover:bg-custom-brown hover:text-white" />
          </Carousel>

          <GallerySocialLink />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
