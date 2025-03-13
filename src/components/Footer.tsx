
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-custom-terra text-custom-cream py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-medium mb-4">Vintage Haven</h3>
            <p className="text-custom-cream/80 max-w-md">
              Handplockade vintagemöbler och inredning för kräsna husägare, inredningsarkitekter 
              och stilentusiaster som uppskattar det förflutnas tidlösa skönhet.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-custom-gold flex items-center justify-center hover:bg-custom-gold/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-custom-gold flex items-center justify-center hover:bg-custom-gold/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-custom-gold flex items-center justify-center hover:bg-custom-gold/80 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4 uppercase tracking-wider">Snabblänkar</h4>
            <ul className="space-y-2">
              {[
                { name: 'Vår Vision', href: '#vision' },
                { name: 'Öppettider', href: '#hours' },
                { name: 'Hitta Hit', href: '#location' },
                { name: 'Kontakta Oss', href: '#' },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-custom-cream/70 hover:text-custom-cream transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4 uppercase tracking-wider">Nyhetsbrev</h4>
            <p className="text-custom-cream/80 mb-4">
              Prenumerera för att få uppdateringar om nya varor och specialevenemang.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input 
                type="email" 
                placeholder="Din e-postadress" 
                className="w-full px-4 py-2 bg-custom-cream/10 border border-custom-cream/20 rounded-md placeholder:text-custom-cream/50 focus:outline-none focus:ring-2 focus:ring-custom-gold text-custom-cream"
              />
              <button 
                type="submit"
                className="w-full py-2 bg-custom-gold text-custom-cream font-medium rounded-md hover:bg-custom-gold/90 transition-colors uppercase tracking-wider"
              >
                Prenumerera
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-custom-cream/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-custom-cream/60 text-sm">
            &copy; {currentYear} Vintage Haven. Alla rättigheter förbehållna.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-custom-cream/60 text-sm hover:text-custom-cream transition-colors">
              Integritetspolicy
            </a>
            <a href="#" className="text-custom-cream/60 text-sm hover:text-custom-cream transition-colors">
              Användarvillkor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
