import { Instagram } from 'lucide-react';

const GallerySocialLink = () => {
  return (
    <div className="mt-10 text-center">
      <p className="text-cream hover:bg-opacity-90 transition-colors">
        Följ oss på Instagram för att se mer av vårt sortiment, och vad som finns inne just nu.
      </p>
      <a
        href="https://instagram.com/brukeriet"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-royal text-cream px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors mt-4"
      >
        <Instagram size={20} className="mr-2" />
        brukeriet
      </a>
    </div>
  );
};

export default GallerySocialLink;
