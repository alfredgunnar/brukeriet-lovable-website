
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GalleryPost } from '@/data/galleryPosts';

interface GalleryCarouselItemProps {
  post: GalleryPost;
  isMobile: boolean;
}

const GalleryCarouselItem = ({ post, isMobile }: GalleryCarouselItemProps) => {
  return (
    <CarouselItem key={post.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
      <div className="shadow-lg group overflow-hidden">
        <AspectRatio ratio={3 / 4} className="bg-gray-200">
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={post.imageUrl}
              alt={`Gallery image ${post.id}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              width="400"
              height="600"
              decoding="async"
            />

            {/* Touch overlay indicator visible only on mobile */}
            {isMobile && (
              <div className="absolute inset-0 flex items-center justify-between px-2 opacity-70 pointer-events-none">
                <div className="bg-white/30 p-1 rounded-full">
                  <ChevronLeft size={20} className="text-white" />
                </div>
                <div className="bg-white/30 p-1 rounded-full">
                  <ChevronRight size={20} className="text-white" />
                </div>
              </div>
            )}
          </div>
        </AspectRatio>
      </div>
    </CarouselItem>
  );
};

export default GalleryCarouselItem;
