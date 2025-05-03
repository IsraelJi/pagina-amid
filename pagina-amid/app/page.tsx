'use client';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '@/styles/page-m.css';
import Card from '@/components/Cards';
import Preguntas from '@/components/Preguntas';

export default function Home() {
  const inicioRef = useRef<HTMLDivElement>(null);
  const conocenosRef = useRef<HTMLDivElement>(null);
  const comisionesRef = useRef<HTMLDivElement>(null);
  const proyectosRef = useRef<HTMLDivElement>(null);
  const preguntasRef = useRef<HTMLDivElement>(null);
  const miembrosRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="main">
      <Navbar 
        onNavigate={(section) => {
          switch(section) {
            case 'inicio': return handleNavigation(inicioRef);
            case 'conocenos': return handleNavigation(conocenosRef);
            case 'comisiones': return handleNavigation(comisionesRef);
            case 'proyectos': return handleNavigation(proyectosRef);
            case 'preguntas': return handleNavigation(preguntasRef);
            case 'miembros': return handleNavigation(miembrosRef);
          }
        }} 
      />
      
      <div ref={inicioRef} className="container w-auto mx-auto max-w-7xl pt-16 px-6 flex-grow mt-48">
        <Image
          src="/imgs/amidIcono.png"
          alt="Logo de AMID"
          width={300}
          height={20}
          className="mx-auto -mt-40 -z-10"
        />
        <div className='textos mt-20 font-abc z-10'>
          <p className="text-2xl text-center z-10 animate-ty">Juntos por la inclusión, construyendo un mundo sin barreras.</p>
          <p className="text-2xl text-center animate-typing">Conócenos, nuestros logros y contactos</p>
        </div>
      </div>
      
      <video src="imgs/videofondo.mp4" autoPlay loop muted className='video'></video>
      
      <div ref={conocenosRef}>
        <h1 className="mt-40">CONOCENOS</h1>
        <p className="text-balance text-center mt-10 font-abc w-auto text-2xl">
          En AMID, trabajamos con pasión para transformar vidas y promover un mundo más inclusivo. 
          Somos una asociación dedicada a apoyar a personas con discapacidad, sus familias y 
          comunidades, ofreciendo recursos, programas y servicios que fomentan la autonomía, 
          la dignidad y la igualdad de oportunidades.
        </p>
        <div className='flex flex-row items-center mt-10 space-x-56 justify-center'>
          <div className='flex flex-col items-center'>
            <Image
              id='iconos'
              src="/imgs/iconoObjetivos.svg"
              alt="Logo de AMID"
              width={150}
              height={50}
              className="img2"
            />
            <h1 className='mt-10'>Objetivo</h1>
            <p className='text-wrap font-abc text-center text-lg w-80 mt-5'>
              Empoderar a las personas con discapacidad mediante el acceso a herramientas, formación y espacios inclusivos que les permitan desarrollar su potencial y participar plenamente en la sociedad.
            </p>
          </div>
          <div className='concocenos-text flex flex-col items-center'>
            <Image
              id='iconos'
              src="/imgs/iconoValores.svg"
              alt="Logo de AMID"
              width={150}
              height={50}
              className="img2"
            />
            <h1 className='mt-10'>Valores</h1>
            <p className='concocenos-text font-abc text-lg text-wrap text-center w-80 mt-5'>
              Promovemos la inclusión, la diversidad y el respeto por los derechos humanos de todas las personas, independientemente de sus capacidades. Fomentamos la colaboración y el trabajo en equipo para lograr un impacto positivo en la comunidad.
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              id='iconos'
              src="/imgs/iconoVision.svg"
              alt="Logo de AMID"
              width={150}
              height={50}
              className="img2"
            />
            <h1 className='mt-10'>Visión</h1>
            <p className='concocenos-text font-abc text-balance text-lg text-center w-80 mt-5'>
              Ser un referente en la promoción de la inclusión y el bienestar de las personas con discapacidad, trabajando en colaboración con la comunidad para construir un futuro más justo y equitativo.
            </p>
          </div>
        </div>
      </div>
      
      <div ref={comisionesRef} className="mt-10">
        <h1 className="mt-10">Comisiones</h1>
        <p className="text-center text-balance mt-10 font-abc w-screen text-2xl">
        </p>
      </div>
      
      <div ref={proyectosRef} className="mt-10">
        <h1 className="mt-10">Proyectos</h1>
        <p className="text-center text-balance mt-10 font-abc w-screen text-2xl">
        </p>
      </div>
      
      <div ref={miembrosRef} className="mt-10">
        <h1 className="mt-10">Miembros</h1>
        <p className="text-center text-balance mt-10 font-abc w-screen text-2xl">
          En AMID, contamos con un equipo diverso y comprometido que trabaja incansablemente para promover la inclusión y el bienestar de las personas con discapacidad. Nuestros miembros son apasionados defensores de los derechos humanos y están dedicados a crear un mundo más justo y equitativo para todos.
        </p>
        <div className='flex lg:flex-raw items-center mt-10 space-x-56 justify-center'>
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
      
      <div ref={preguntasRef}>
        <h1 className="mt-10">Preguntas Frecuentes</h1>
        <Preguntas />
      </div>
    </main>
  );
}
