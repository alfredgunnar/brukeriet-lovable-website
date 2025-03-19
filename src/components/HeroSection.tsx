
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full py-8 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="lovable-uploads/439c5560-76bf-49c6-8514-eced0f4e3485.png"
              alt="Brukeriet Logo"
              className="w-[20rem] md:w-[24rem] mx-auto md:mx-0"
            />
            <p className="text-custom-brown mt-6 text-xl">
              Vintage, återbruk och svensk design
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="lovable-uploads/a8435648-71f7-448a-8f73-6ca2b527146b.png"
              alt="Brukeriet Interior"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
