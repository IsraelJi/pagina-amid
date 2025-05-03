import React from 'react';

const SocialButtons: React.FC = () => {
  const socialLinks = {
    whatsapp: 'https://wa.me/7226916360', 
    instagram: 'https://www.instagram.com/amid_mx?igsh=MWZscDBvNzE0Zmk3Zg==',
    facebook: 'https://www.facebook.com/profile.php?id=61575126480064&mibextid=wwXIfr&rdid=NrAtcMQRenxpMGtT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1YjYKcVqrk%2F%3Fmibextid%3DwwXIfr#',
    email: 'amidmx@outlook.com', 
    tiktok: 'https://www.tiktok.com/@amid_mx?_t=ZS-8w2McGCTLDs&_r=1',
    x: 'https://x.com/amid_mx?t=sRGXf1fSGiU_tvrbLGlN2A',
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4">
      {/* Botón de WhatsApp */}
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-.719-.911-.99-.24-.272-.482-.558-.722-.558-.24 0-.482.074-.67.223-.198.149-1.51.896-1.51 2.186 0 1.29 1.055 2.581 1.204 2.78.149.198 2.095 3.2 5.077 4.487.708.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.509-.074 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.099-.347-.223-.644-.372zm-5.452 7.638h-.001c-4.697 0-8.504-3.807-8.504-8.505s3.807-8.505 8.505-8.505c4.697 0 8.504 3.807 8.504 8.505 0 4.698-3.807 8.505-8.504 8.505zm0-18c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z"/>
        </svg>
      </a>

      {/* Botón de Instagram */}
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-colors duration-300"
        aria-label="Visitar Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>

      {/* Botón de Facebook */}
      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
        aria-label="Visitar Facebook"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>

      {/* Botón de TikTok */}
      <a
        href={socialLinks.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-black text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
        aria-label="Visitar TikTok"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 1.19.26V9.38a6.35 6.35 0 0 0-1.19-.1A6.34 6.34 0 0 0 4 20.29a6.34 6.34 0 0 0 10.86-4.43v-7a8.29 8.29 0 0 0 4.65 1.67V6.69h.08z"/>
        </svg>
      </a>

      {/* Botón de X */}
      <a
        href={socialLinks.x}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
        aria-label="Visitar X"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>

      {/* Botón de Correo Electrónico */}
      <a
        href={socialLinks.email}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
        aria-label="Enviar correo electrónico"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </a>
    </div>
  );
};

export default SocialButtons;