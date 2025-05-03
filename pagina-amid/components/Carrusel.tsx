import React, { useState } from 'react';

const Carrusel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg',
      title: 'Etiqueta de la primera diapositiva',
      description: 'Contenido representativo para la primera diapositiva.',
    },
    {
      image: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg',
      title: 'Etiqueta de la segunda diapositiva',
      description: 'Contenido representativo para la segunda diapositiva.',
    },
    {
      image: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg',
      title: 'Etiqueta de la tercera diapositiva',
      description: 'Contenido representativo para la tercera diapositiva.',
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Indicadores del carrusel */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[10%] mb-2 flex list-none justify-center p-0 sm:mb-4 sm:mx-[15%]">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`mx-1 box-content h-1 w-6 flex-initial cursor-pointer border-0 border-y-8 border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-600 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none sm:h-2 sm:w-8 sm:border-y-10 ${
              activeSlide === index ? 'opacity-100' : 'opacity-50'
            }`}
            aria-current={activeSlide === index ? 'true' : undefined}
            aria-label={`Diapositiva ${index + 1}`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>

      {/* Elementos del carrusel */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] w-full transition-transform duration-600 ease-in-out motion-reduce:transition-none ${
              activeSlide === index ? 'translate-x-0' : 'hidden'
            }`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <img
              src={slide.image}
              className="block w-full h-auto object-cover"
              alt={`Diapositiva ${index + 1}`}
            />
            <div className="absolute inset-x-[10%] bottom-3 py-3 text-center text-white bg-black bg-opacity-50 sm:inset-x-[15%] sm:bottom-5 sm:py-5 md:block">
              <h5 className="text-base sm:text-xl">{slide.title}</h5>
              <p className="text-sm sm:text-base">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controles del carrusel - elemento anterior */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={handlePrev}
      >
        <span className="inline-block h-6 w-6 sm:h-8 sm:w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 sm:h-6 sm:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Anterior
        </span>
      </button>
      {/* Controles del carrusel - elemento siguiente */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={handleNext}
      >
        <span className="inline-block h-6 w-6 sm:h-8 sm:w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 sm:h-6 sm:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Siguiente
        </span>
      </button>
    </div>
  );
};

export default Carrusel;