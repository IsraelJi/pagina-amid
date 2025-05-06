import React from 'react';

interface CardProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
}

const Proyecto: React.FC<CardProps> = ({ title, content, imageSrc, imageAlt, buttonText, buttonLink }) => {
  return (
    <div className="block rounded-lg bg-white shadow-md w-full sm:max-w-sm md:max-w-md lg:max-w-2xl">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          className="rounded-t-lg w-full h-32 object-cover"
          src={imageSrc}
          alt={imageAlt}
        />
        <a href={buttonLink}>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-100 bg-opacity-15 opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
        </a>
      </div>
      <div className="p-4 text-gray-900">
        <h5 className="mb-1 text-lg font-medium leading-tight">{title}</h5>
        <p className="mb-3 text-sm">{content}</p>
        <button
          type="button"
          className="inline-block rounded bg-blue-600 px-4 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Proyecto;