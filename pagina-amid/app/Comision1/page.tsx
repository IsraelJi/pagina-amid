import React from 'react';

export default function Comision1Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Barra superior */}
      <header className="bg-blue-100 py-4 flex justify-center items-center">
        <div className="flex items-center space-x-6">
          <img
            src="/imgs/amidLogo.png"
            alt="AMID Logo"
            className="h-10"
          />
          <nav className="flex space-x-6 text-gray-800 text-sm font-medium">
            <a href="#quienes-somos" className="hover:underline">¿Quiénes somos?</a>
            <a href="#objetivo" className="hover:underline">Objetivo</a>
            <a href="#lineas-accion" className="hover:underline">Líneas de acción</a>
            <a href="#proyectos-destacados" className="hover:underline">Proyectos destacados</a>
            <a href="#como-colaborar" className="hover:underline">¿Cómo puedo colaborar?</a>
          </nav>
        </div>
      </header>

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
          <p className="text-center text-lg mb-6">
            Esta sección muestra información detallada sobre la Comisión de Inclusión a las Personas con Discapacidad Visual.
          </p>

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

          {/* Proyectos Destacados */}
          <section id="proyectos-destacados" className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Proyectos Destacados</h2>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Iluminando Caminos</h3>
              <p className="text-lg">
                Iniciativa que comenzó con la instalación de placas en braille en paradas de camiones de Toluca, con el objetivo de expandirse a todo el Estado de México y, posteriormente, a nivel nacional. Este proyecto representa una iniciativa transformadora para Toluca, con el potencial de convertirse en un referente nacional de accesibilidad urbana. Al implementar un sistema integral de señalización en braille en estaciones de autobuses, semáforos y esquinas, AMID busca no solo mejorar la movilidad de las personas con discapacidad visual, sino también generar un cambio cultural hacia una sociedad más inclusiva. El éxito de este proyecto dependerá del compromiso conjunto de autoridades, sociedad civil, sector privado y, fundamentalmente, de la participación activa de las personas con discapacidad visual en todas sus fases. "Iluminando Caminos" no es solo un proyecto de infraestructura, sino un paso decisivo hacia el reconocimiento efectivo de derechos y la construcción de una ciudad para todos.
              </p>
            </div>
          </section>

          {/* ¿Cómo puedes colaborar? */}
          <section id="como-colaborar" className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">¿Cómo puedes colaborar?</h2>
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