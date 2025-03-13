
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
          ? "py-3 bg-vintage-cream/90 backdrop-blur-md shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="font-serif text-2xl font-medium tracking-tight text-vintage-brown hover:text-vintage-terracotta transition-colors"
        >
          Vintage Haven
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Vision', href: '#vision' },
            { name: 'Hours', href: '#hours' },
            { name: 'Location', href: '#location' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-vintage-brown hover:text-vintage-terracotta transition-colors"
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
