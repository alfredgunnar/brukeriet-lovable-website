
import { Instagram } from 'lucide-react';

const GallerySocialLink = () => {
  return (
    <div className="mt-10 text-center">
      <p className="text-custom-brown hover:bg-opacity-90 transition-colors text-lg">
        Följ oss på Instagram för att se mer av vårt sortiment, och vad som finns inne just nu.
      </p>
      <a
        href="https://instagram.com/brukeriet"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-white border border-custom-brown text-custom-brown px-6 py-3 rounded-md hover:bg-custom-brown hover:text-white transition-colors mt-4"
      >
        <Instagram size={20} className="mr-2" />
        brukeriet
      </a>
    </div>
  );
};

export default GallerySocialLink;
