
import { useRef, useEffect } from 'react';
import { useElementVisibility } from '@/hooks/use-element-visibility';

const FeatureGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useElementVisibility(sectionRef);

  return (
    <div 
      ref={sectionRef} 
      className="py-12 md:py-16 bg-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className={`overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative h-[500px] group cursor-pointer">
              <img 
                src="lovable-uploads/BE6E6EFD-88A2-42E1-BB87-7852661F3C6E.JPG" 
                alt="Vintage möbler"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
                <h3 className="text-white text-2xl font-medium p-6">Möbler</h3>
              </div>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className={`overflow-hidden transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative h-[500px] group cursor-pointer">
              <img 
                src="lovable-uploads/4BA41F26-4E66-47EF-9135-6D3EA49F9376.JPG" 
                alt="Unika prylar"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
                <h3 className="text-white text-2xl font-medium p-6">Prylar</h3>
              </div>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className={`overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative h-[500px] group cursor-pointer">
              <img 
                src="lovable-uploads/51113cdd-281c-4ae9-bb51-09b982b21a34.png" 
                alt="Hållbar inredning"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
                <h3 className="text-white text-2xl font-medium p-6">Inredning</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-custom-brown mb-8">Upptäck vår butik</h2>
          <p className="text-custom-brown text-lg max-w-3xl mx-auto">
            Välkommen till Brukeriet, där varje möbel och pryl har en historia att berätta. Vi fokuserar på kvalitet, hållbarhet och tidlös design som ger ditt hem karaktär.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
