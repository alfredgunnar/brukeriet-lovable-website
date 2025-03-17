
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { InstagramPost } from '@/data/instagramPosts';

interface InstagramCarouselItemProps {
  post: InstagramPost;
  isMobile: boolean;
}

const InstagramCarouselItem = ({ post, isMobile }: InstagramCarouselItemProps) => {
  return (
    <CarouselItem key={post.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
      <div className="rounded-lg shadow-lg group overflow-hidden">
        <AspectRatio ratio={3/4} className="bg-muted">
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={post.imageUrl}
              alt="Butiken"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              width="400"
              height="600"
              decoding="async"
            />
            
            {/* Touch overlay indicator visible only on mobile */}
            {isMobile && (
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-2 opacity-70">
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

export default InstagramCarouselItem;
