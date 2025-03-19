
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VarDromSection from '@/components/VarDromSection';
import GallerySection from '@/components/GallerySection';
import OppettiderSection from '@/components/OppettiderSection';
import HittaHitSection from '@/components/HittaHitSection';
import FeatureGrid from '@/components/FeatureGrid';
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
      <div className="min-h-screen flex flex-col bg-white">
        <header>
          <Navbar />
        </header>
        <main>
          <HeroSection />
          <FeatureGrid />
          <VarDromSection />
          <GallerySection />
          <OppettiderSection />
          <HittaHitSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
