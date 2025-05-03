'use client';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '@/styles/page-m.css';
import Card from '@/components/Cards';
import Preguntas from '@/components/Preguntas';
import Carrusel from '@/components/Carrusel';
import SocialButtons from '@/components/SocialButtons';

export default function Home() {
  
  const inicioRef = useRef<HTMLDivElement>(null);
  const conocenosRef = useRef<HTMLDivElement>(null);
  const comisionesRef = useRef<HTMLDivElement>(null);
  const preguntasRef = useRef<HTMLDivElement>(null);
  const miembrosRef = useRef<HTMLDivElement>(null);


  const handleNavigation = (section: string) => {

    console.log(`Navegando a: ${section}`);

    switch(section) {
      case 'inicio': 
        inicioRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'conocenos': 
        conocenosRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'comisiones': 
        comisionesRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'preguntas': 
        preguntasRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'miembros': 
        miembrosRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        inicioRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="main pt-0"> 
      <Navbar onNavigate={handleNavigation} />
      
      {/* Sección Inicio */}
      <div ref={inicioRef} className="container mx-auto px-4 sm:px-6 pt-16 flex-grow mt-48">
        <Image
          src="/imgs/amidIcono.png"
          alt="Logo de AMID"
          width={300}
          height={20}
          className="mx-auto -mt-40 -z-10 w-full max-w-[300px]"
        />
        <div className='textos mt-20 font-abc z-10'>
          <p className="text-xl sm:text-2xl text-center z-10 animate-ty">
            Juntos por la inclusión, construyendo un mundo sin barreras.
          </p>
          <p className="text-xl sm:text-2xl text-center animate-typing">
            Conócenos, nuestros logros y contactos
          </p>
        </div>
      </div>
      
     
      
      {/* Sección Conócenos */}
      <div ref={conocenosRef} className="px-4 sm:px-6 py-10">
        <h1 className="text-3xl sm:text-4xl text-center mt-10">CONÓCENOS</h1>
        <p className="text-balance text-center mt-10 font-abc text-lg sm:text-2xl">
        En AMID, trabajamos con pasión para transformar vidas y promover un mundo más inclusivo. 
        Somos una asociación dedicada a apoyar a personas con discapacidad, sus familias y 
        comunidades, ofreciendo recursos, programas y servicios que fomentan la autonomía, 
        la dignidad y la igualdad de oportunidades.
        </p>
        
        <div className='flex flex-col md:flex-row items-center mt-10 gap-8 md:gap-14 lg:gap-20 justify-center'>
          <div className='flex flex-col items-center max-w-xs'>
            <Image
              src="/imgs/iconoObjetivos.svg"
              alt="Icono Objetivos"
              width={120}
              height={40}
              className="img2 w-24 sm:w-32"
            />
            <h1 className='mt-6 text-xl sm:text-2xl'>Objetivo</h1>
            <p className='font-abc text-center text-sm sm:text-lg mt-3'>
            Empoderar a las personas con discapacidad mediante el acceso a herramientas, formación
            y espacios inclusivos que les permitan desarrollar su potencial y participar plenamente
            en la sociedad.
            </p>
          </div>
          
       
          <div className='flex flex-col items-center max-w-xs'>
            <Image
              src="/imgs/iconoValores.svg"
              alt="Icono Valores"
              width={120}
              height={40}
              className="img2 w-24 sm:w-32"
            />
            <h1 className='mt-6 text-xl sm:text-2xl'>Valores</h1>
            <p className='font-abc text-center text-sm sm:text-lg mt-3'>
            Promovemos la inclusión, la diversidad y el respeto por los derechos humanos de todas las personas, 
            independientemente de sus capacidades. Fomentamos la colaboración y el trabajo en equipo 
            para lograr un impacto positivo en la comunidad.
            </p>
          </div>
          
          
          <div className='flex flex-col items-center max-w-xs'>
            <Image
              src="/imgs/iconoVision.svg"
              alt="Icono Visión"
              width={120}
              height={40}
              className="img2 w-24 sm:w-32"
            />
            <h1 className='mt-6 text-xl sm:text-2xl'>Visión</h1>
            <p className='font-abc text-center text-sm sm:text-lg mt-3'>
            Ser un referente en la promoción de la inclusión y el bienestar de las personas con discapacidad,
             trabajando en colaboración con la comunidad para construir un futuro más justo y 
             equitativo.
            </p>
          </div>
        </div>
      </div>

       {/* Sección Comisiones*/}
       <div ref={comisionesRef} className="px-4 sm:px-6 py-20">
        <h1 className="text-3xl sm:text-4xl text-center font-bold">COMISIONES</h1>
        <p className="text-center mt-6 font-abc text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Esta sección muestra información sobre las diferentes comisiones de trabajo en nuestra organización.
          Próximamente tendremos más detalles sobre cada una de ellas.
        </p>
        <Carrusel />
      </div>
      

      
      {/* Sección Miembros */}
      <div ref={miembrosRef} className="px-4 sm:px-6 py-10">
        <h1 className="text-3xl sm:text-4xl text-center mt-10">MIEMBROS</h1>
        <p className="text-center font-abc text-lg sm:text-2xl mt-6">
        En AMID, contamos con un equipo diverso y comprometido que trabaja incansablemente para 
        promover la inclusión y el bienestar de las personas con discapacidad. Nuestros miembros son 
        apasionados defensores de los derechos humanos y están dedicados a crear un mundo más justo y 
        equitativo para todos.
        </p>
        
        <div className='flex flex-wrap justify-center gap-6 mt-10'>
          <Card
            cargo='Presidente'
            estudio='Fundador'
            nombre='Felipe Bravo'
            url='https://i.pravatar.cc/150?u=a042581f4e29026704d'
          />
          <Card
            cargo='Fundador'
            estudio='Vicepresidente'
            nombre='Javier Palomino'
            url='https://i.pravatar.cc/150?u=a042581f4e29026024d'
          />
          <Card
            cargo='Fundador'
            estudio='Secretaria General'
            nombre='Yetmary Corona'
            url='https://i.pravatar.cc/150?u=a04258114e29026702d'
          />
          <Card
            cargo='Fundador'
            estudio='Vocal de la Comisión'
            nombre='Dulce Ciriaco'
            url='https://i.pravatar.cc/150?u=a04258114e29026702d'
          />
        </div>
      </div>
      
      {/* Sección Preguntas Frecuentes */}
      <div ref={preguntasRef} className="px-4 sm:px-6 py-10">
        <h1 className="text-3xl sm:text-4xl text-center mt-10">PREGUNTAS FRECUENTES</h1>
        <Preguntas />
      </div>
      
        
      {/* Sección Contacto */}
      <div className="px-4 sm:px-6 py-10 bg-gray-50">
        <h1 className="text-3xl sm:text-4xl text-center mt-10">CONTACTO</h1>
        <p className="text-center font-abc text-lg sm:text-2xl mt-6">
          Si tienes alguna pregunta o deseas más información, no dudes en contactarnos.
        </p>
          <SocialButtons /> 
      </div>
          


    </main>
  );
}
