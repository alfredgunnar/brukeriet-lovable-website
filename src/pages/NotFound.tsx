
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-cream">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4 text-custom-terra">404</h1>
        <p className="text-xl text-custom-brown mb-6">Hoppsan! Sidan hittades inte</p>
        <a href="/" className="px-6 py-3 bg-custom-gold text-custom-cream rounded-md hover:bg-custom-gold/90 transition-all uppercase tracking-wider">
          Tillbaka till Brukeriet
        </a>
      </div>
    </div>
  );
};

export default NotFound;
