
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MobileSwipeHint = () => {
  return (
    <div className="flex justify-center items-center mb-4 text-royal">
      <ChevronLeft size={20} className="animate-pulse" />
      <span className="mx-2 text-sm">Swipe</span>
      <ChevronRight size={20} className="animate-pulse" />
    </div>
  );
};

export default MobileSwipeHint;
