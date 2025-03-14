
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0047AB] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/brukeriet" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span>@brukeriet</span>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/a5bf94d6-3187-43a1-acf3-79bbf4e92bda.png" 
              alt="Brukeriet Badge" 
              className="h-48 md:h-56 object-contain" 
            />
          </div>
          
          <div className="flex flex-col items-center md:items-end text-right">
            <a 
              href="mailto:info@brukeriet.se" 
              className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@brukeriet.se</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex justify-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} Brukeriet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
