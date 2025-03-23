const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-custom-brown bg-opacity-10 text-white py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('lovable-uploads/61c81ec4-6269-4076-9d95-577ff45a1f98.png')] bg-cover bg-center opacity-5"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="mb-8">
          <img
            src="lovable-uploads/Brukeriet_Svart-15.png"
            alt="Brukeriet Badge"
            className="h-64 md:h-72 object-contain"
          />
        </div>

        <p className="text-custom-brown text-sm">
          &copy; {currentYear} Brukeriet Gunnargård AB
        </p>
      </div>
    </footer>
  );
};

export default Footer;
