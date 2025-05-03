'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import Image from "next/image";
import { useState, useEffect } from "react";



export default function App({ onNavigate }: { onNavigate: (section: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  
  const handleMouseMove = () => {
    setIsVisible(true);
    resetTimeout();
  };


  let hideTimeout: NodeJS.Timeout;
  const resetTimeout = () => {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => setIsVisible(false), 2000); 
  };

  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(hideTimeout);
    };
  }, []);

 
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) { 
        setIsVisible(true);
        resetTimeout();
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    
    <Navbar 
      shouldHideOnScroll={true}
      className={`bg-sky-200 fixed top-0 left-0 right-0 h-28 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      onMenuOpenChange={setIsMenuOpen}
    >
  
      <NavbarBrand>
        <Image
          src="/imgs/amidLogo.png"
          alt="Logo de AMID"
          width={200}
          height={100}
          className="mx-auto mt-0 cursor-pointer"
          onClick={() => onNavigate('inicio')}
        />
      </NavbarBrand>

     
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {['conocenos', 'comisiones', 'proyectos', 'miembros', 'preguntas'].map((item) => (
          <NavbarItem key={item}>
            <Link 
              color="foreground" 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item);
              }}
              className="capitalize hover:text-cyan-600 transition-colors"
            >
              {item === 'preguntas' ? 'Preguntas Frecuentes' : item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu  className="bg-sky-50 mt-10 w-40">
        {['conocenos', 'comisiones', 'proyectos', 'miembros', 'preguntas'].map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item);
                setIsMenuOpen(false);
              }}
              className="w-full capitalize hover:bg-cyan-100 px-4 py-2 rounded-md"
              size="lg"
            >
              {item === 'preguntas' ? 'Preguntas Frecuentes' : item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}