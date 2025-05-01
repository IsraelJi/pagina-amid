import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";




  

export default function App() {
  return (
    <Navbar shouldHideOnScroll className="bg-sky-50 fixed top-0 left-0" >
      <NavbarBrand>
      
        <p className="font-bold text-inherit text-2xl">AMID</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6 " justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
          Conócenos
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#conocenos" >
            Logros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contactos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        
      </NavbarContent>
    </Navbar>
  );
}
