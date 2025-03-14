
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-4 lg:px-8",
        scrolled 
          ? "py-3 bg-custom-cream/90 backdrop-blur-md shadow-sm opacity-100" 
          : "py-6 bg-transparent opacity-0 pointer-events-none"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center"
        >
          <img 
            src="/lovable-uploads/logo.png" 
            alt="Brukeriet" 
            className="h-10 object-contain"
          />
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Vision', href: '#vision' },
            { name: 'Öppettider', href: '#hours' },
            { name: 'Hitta hit', href: '#location' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wide text-custom-brown hover:text-[#0047AB] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
