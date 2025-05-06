"use client";

import React, { useState } from 'react';
//import Card from './Card'; // Asegúrate de que el archivo Card.tsx esté en el mismo directorio o ajusta la ruta
import Proyecto from '@/components/Proyecto';
export default function Comision1Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Botón de menú (ícono de hamburguesa) */}
      <header className="bg-blue-100 py-4 flex items-center px-4">
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        <div className="flex-1 flex justify-center">
          <img
            src="/imgs/amidLogo.png"
            alt="AMID Logo"
            className="h-10"
          />
        </div>
      </header>

      {/* Menú lateral desplegable */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-100 text-gray-800 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col h-full">
          <div className="py-4 px-6 border-b border-gray-300">
            <h2 className="text-lg font-semibold">Menú</h2>
          </div>
          <nav className="flex-1 flex flex-col space-y-4 p-6">
            <a
              href="#quienes-somos"
              className="text-base font-medium hover:underline"
              onClick={closeMenu}
            >
              ¿Quiénes somos?
            </a>
            <a
              href="#objetivo"
              className="text-base font-medium hover:underline"
              onClick={closeMenu}
            >
              Objetivo
            </a>
            <a
              href="#lineas-accion"
              className="text-base font-medium hover:underline"
              onClick={closeMenu}
            >
              Líneas de acción
            </a>
            <a
              href="#proyectos-destacados"
              className="text-base font-medium hover:underline"
              onClick={closeMenu}
            >
              Proyectos destacados
            </a>
            <a
              href="#como-colaborar"
              className="text-base font-medium hover:underline"
              onClick={closeMenu}
            >
              ¿Cómo puedo colaborar?
            </a>
          </nav>
        </div>
      </div>

      {/* Overlay transparente para cerrar el menú al hacer clic fuera */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Imagen de fondo con texto superpuesto */}
      <main className="flex-1 relative">
        <div
          className="w-full h-[60vh] sm:h-[50vh] bg-cover bg-center"
          style={{ backgroundImage: "url('https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center pb-10">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-2">Comisión de Inclusión a las Personas con Discapacidad Visual</h1>
              <p className="text-lg">Vocal: Dulce Abril Ciriaco Agustín</p>
            </div>
          </div>
        </div>
      </main>

      {/* Contenido detallado */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4 text-gray-800">
          

          {/* Quiénes somos */}
          <section id="quienes-somos" className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">¿Quiénes somos?</h2>
            <p className="text-lg">
              La Comisión de Inclusión a las Personas con Discapacidad Visual es un grupo de trabajo comprometido con el diseño, implementación y seguimiento de acciones que garanticen el acceso equitativo a los espacios públicos, la información y los servicios para personas con discapacidad visual. Nuestro enfoque se basa en los principios de accesibilidad universal, empatía, participación ciudadana y derechos humanos.
            </p>
          </section>

          {/* Objetivo */}
          <section id="objetivo" className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Objetivo</h2>
            <p className="text-lg">
              Promover la inclusión plena de personas con discapacidad visual a través de políticas, proyectos y herramientas que les permitan ejercer su derecho a la movilidad, la información y la autonomía de manera segura y digna.
            </p>
          </section>

          {/* Líneas de Acción */}
          <section id="lineas-accion" className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Líneas de Acción</h2>
            <ol className="list-decimal list-inside text-lg space-y-2">
              <li>
                <strong>Accesibilidad Urbana:</strong> Implementación de señalética táctil (braille y podotáctil), dispositivos auditivos y mobiliario urbano adaptado.
              </li>
              <li>
                <strong>Educación y Sensibilización:</strong> Talleres, charlas y capacitaciones dirigidas a servidores públicos, operadores del transporte y ciudadanía en general.
              </li>
              <li>
                <strong>Participación Activa:</strong> Inclusión de personas con discapacidad visual en la planeación y evaluación de los proyectos.
              </li>
              <li>
                <strong>Normatividad y Derechos:</strong> Promoción del cumplimiento de la Convención sobre los Derechos de las Personas con Discapacidad y las leyes nacionales en materia de accesibilidad.
              </li>
            </ol>
          </section>

          {/* Proyectos Destacados con tarjeta */}
          <section id="proyectos-destacados" className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Proyectos Destacados</h2>
            <Proyecto
              title="Iluminando Caminos"
              content="Proyecto para instalar señalética en braille en Toluca. Busca mejorar la accesibilidad y expandirse a nivel nacional."
              imageSrc="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
              imageAlt="Nature image"
              buttonText="Ver más"
              buttonLink="#proyectos-destacados"
            />
          </section>

          {/* ¿Cómo puedes colaborar? */}
          <section id="como-colaborar" className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">¿Cómo puedo colaborar?</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Participando en nuestros talleres.</li>
              <li>Donando materiales o recursos.</li>
              <li>Siendo voluntario en eventos y campañas.</li>
              <li>Reportando puntos inseguros o inaccesibles en tu comunidad.</li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}