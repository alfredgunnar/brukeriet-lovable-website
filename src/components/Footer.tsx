
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0047AB] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/a5bf94d6-3187-43a1-acf3-79bbf4e92bda.png" 
            alt="Brukeriet Badge" 
            className="h-64 md:h-72 object-contain" 
          />
        </div>
        
        <p className="text-white/70 text-sm">
          &copy; {currentYear} Brukeriet
        </p>
      </div>
    </footer>
  );
};

export default Footer;
