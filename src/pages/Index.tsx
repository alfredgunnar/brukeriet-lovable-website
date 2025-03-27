
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VarDromSection from '@/components/VarDromSection';
import GallerySection from '@/components/GallerySection';
import OppettiderSection from '@/components/OppettiderSection';
import HittaHitSection from '@/components/HittaHitSection';
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
        <meta name="keywords" content="vintage möbler, återbruk, inredning, Spinneriet, Lindome, vintagefynd, hållbart, second hand" />
        <meta property="og:title" content="Brukeriet - Vintage & Återbruk" />
        <meta property="og:description" content="Vintage, återbruk och ny hållbart producerad inredning i Spinneriet, Lindome." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sv_SE" />
        <link rel="canonical" href="https://brukeriet.se/" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <header>
          <Navbar />
        </header>
        <main>
          <HeroSection />
          <VarDromSection />
          <GallerySection />
          <OppettiderSection />
          <HittaHitSection />
          <FullWidthImageSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
