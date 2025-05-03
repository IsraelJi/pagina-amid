import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-100 text-gray-800 py-4 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          © 2025 Asociación Mexicana de Inclusión a los Discapacitados (AMID). Todos los derechos reservados.
        </p>
        <p className="text-sm mt-2">
          <a
            href="#" // Reemplaza con la URL real del PDF, por ejemplo: "https://tu-sitio.com/aviso-privacidad.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Aviso de Privacidad
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;