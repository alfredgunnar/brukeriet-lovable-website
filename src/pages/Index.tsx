
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import OpeningHours from '@/components/OpeningHours';
import LocationSection from '@/components/LocationSection';
import FullWidthImageSection from '@/components/FullWidthImageSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <VisionSection />
        <OpeningHours />
        <LocationSection />
        <GallerySection />
        <FullWidthImageSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
