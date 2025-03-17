import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

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

  const navItems = [
    { name: 'Vår dröm', href: '#vision' },
    { name: 'Öppettider', href: '#hours' },
    { name: 'Hitta hit', href: '#location' },
  ];

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
            src="lovable-uploads/logo.png"
            alt="Brukeriet"
            className="h-10 object-contain"
          />
        </a>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-custom-brown">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-custom-cream">
              <div className="flex flex-col space-y-6 pt-10">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium uppercase tracking-wide text-custom-brown hover:text-[#0047AB] transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium uppercase tracking-wide text-custom-brown hover:text-[#0047AB] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
