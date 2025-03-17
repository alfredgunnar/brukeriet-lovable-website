
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import InstagramCarousel from '@/components/InstagramCarousel';
import OpeningHours from '@/components/OpeningHours';
import LocationSection from '@/components/LocationSection';
import FullWidthImageSection from '@/components/FullWidthImageSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Brukeriet - Vintage, återbruk & svensk design | Spinneriet Lindome</title>
        <meta name="description" content="Upptäck Brukeriet, en vintage- och återbruksbutik i det anrika Spinneriet i Lindome. Vi erbjuder noga utvalda vintagefynd och hållbar inredning." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <header>
          <Navbar />
        </header>
        <main>
          <HeroSection />
          <VisionSection />
          <InstagramCarousel />
          <OpeningHours />
          <LocationSection />
          <FullWidthImageSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
