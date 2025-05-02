import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import Image from "next/image";

export default function App({ onNavigate }: { onNavigate: (section: string) => void }){
  return (
    <Navbar shouldHideOnScroll className="bg-sky-50 fixed top-0 left-0 h-28" >
      <NavbarBrand>
        <p className="font-bold text-inherit text-2xl">
          <Image
            id='inicio'
            src="/imgs/amidLogo.png"
            alt="Logo de AMID"
            width={200}
            height={100}
            className="mx-auto mt-0 -z-10"
            onClick={() => onNavigate('inicio')}
            style={{cursor: 'pointer'}}
          />
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" onClick={() => onNavigate('conocenos')}>
            Conócenos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" onClick={() => onNavigate('comisiones')}>
            Comisiones
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" onClick={() => onNavigate('proyectos')}>
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" onClick={() => onNavigate('preguntas')}>
            Preguntas Frecuentes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" onClick={() => onNavigate('miembros')}>
            Miembros
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      </NavbarContent>
    </Navbar>
  );
}