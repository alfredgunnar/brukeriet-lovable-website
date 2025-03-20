import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
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
    { name: 'Lär känna oss', href: '#lar-kanna-oss' },
    { name: 'Öppettider', href: '#oppettider' },
    { name: 'Hitta hit', href: '#hitta-hit' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-4 lg:px-8 py-3",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
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
              <button className="p-2 text-gray-800">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <div className="flex flex-col space-y-6 pt-10">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium uppercase tracking-wide text-gray-800 hover:text-[#0047AB] transition-colors"
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
                className="text-sm font-medium uppercase tracking-wide text-gray-800 hover:text-[#0047AB] transition-colors"
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
