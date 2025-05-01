'use client';
import Navbar from '@/components/Navbar';
import Intergrantes from '@/components/Integrantes';
import Image from 'next/image';
import '@/styles/page-m.css';
import {Link} from "@heroui/link";




export default function Home() {
  interface ScrollEvent extends React.MouseEvent<HTMLAnchorElement, MouseEvent> {}

  const handleScroll = (e: ScrollEvent, id: string): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className="main">
      
      <Navbar />
      <div className="container w-auto mx-auto max-w-7xl pt-16 px-6 flex-grow  mt-20">
        <Image
          src="/imgs/logo.png"
          alt="Logo de AMID"
          width={300}
          height={50}
          className="mx-auto -mt-40 -z-10"
        />
        <div className='textos -mt-20 font-bold z-10'>
        <p className="text-lg text-center z-10">Juntos por la inclusión, construyendo un mundo sin barreras.</p>
        <p className="text-lg text-center " >Conócenos, nuestros logros y contactos</p>
        </div>
        
      </div>
      <video src= "imgs/videofondo.mp4" autoPlay loop muted className='video'></video>
      <div>
      <h1 className="mt-40">¿Quiénes somos?</h1>
      <p className="text-balance text-center mt-10">
      En AMID, trabajamos con pasión para transformar vidas y promover un mundo más inclusivo. 
      Somos una asociación dedicada a apoyar a personas con discapacidad, sus familias y 
      comunidades, ofreciendo recursos, programas y servicios que fomentan la autonomía, 
      la dignidad y la igualdad de oportunidades.
      </p>
      <Image
          id='inicio'
          src="/imgs/braileConocenos.jpeg"
          alt="Logo de AMID"
          width={300}
          height={50}
          className="mx-auto mt-10 shadow-2xl rounded-full "
        />
      </div>
      <div>

      <h1 className="mt-10">Contacto</h1>
      <div className='w-96 justify-center mt-0'>
      <Intergrantes /> 
      </div> 
      </div>
     
     <button className='' > <Link href='inicio' onClick={(e) => handleScroll(e,'inicio')}>Hola</Link></button>
     </main>
    

  );
}
