import { ArrowUpRight } from 'lucide-react';
import logoFullPrimary from '../assets/logo-full-primary.png';
import { useNavbar } from '../hooks/useNavbar';
import Button from './Button';

const Navbar = () => {
  const navbar = useNavbar();
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col bg-background/50 backdrop-blur-xs overflow-hidden transition-all duration-300 ease-in-out ${navbar.isOpen ? 'h-dvh' : 'h-16'}`}
    >
      <div className="p-4 flex justify-between items-center">
        <img className="h-6" src={logoFullPrimary} alt="Devly logo" />
        <div className="hidden md:flex md:items-center md:gap-8">
          <a
            className="h-8 px-2 inline-flex items-center justify-center font-inter text-sm font-medium text-foreground transition-all duration-300 hover:text-primary"
            href="#"
          >
            Why Us?
          </a>
          <a
            className="h-8 px-2 inline-flex items-center justify-center font-inter text-sm font-medium text-foreground transition-all duration-300 hover:text-primary"
            href="#"
          >
            Our Values
          </a>
          <a
            className="h-8 px-2 inline-flex items-center justify-center font-inter text-sm font-medium text-foreground transition-all duration-300 hover:text-primary"
            href="#"
          >
            About Us
          </a>
          <a
            className="h-8 px-2 inline-flex items-center justify-center font-inter text-sm font-medium text-foreground transition-all duration-300 hover:text-primary"
            href="#"
          >
            FAQ
          </a>
        </div>
        <Button className="hidden! md:inline-flex!">
          Gabung Ekosistem
          <ArrowUpRight size={20} />
        </Button>
        <button
          className="md:hidden relative size-8 flex flex-col justify-evenly items-center"
          onClick={navbar.toggle}
        >
          <div
            className={`absolute w-6 h-0.5 rounded-full bg-foreground transition-all duration-300 origin-center -translate-y-1.5 ${navbar.isOpen ? 'animate-menu-top-open' : 'animate-menu-top-close'}`}
          />
          <div
            className={`absolute w-6 h-0.5 rounded-full bg-foreground transition-all duration-300 origin-center translate-y-1.5 ${navbar.isOpen ? 'animate-menu-bottom-open' : 'animate-menu-bottom-close'}`}
          />
        </button>
      </div>
      <div className="md:hidden h-full px-4 py-8 flex flex-col justify-between overflow-y-auto transition-all duration-300">
        <div className="flex flex-col gap-6">
          <p className="font-inter text-sm text-muted-foreground">Menu</p>
          <div className="flex flex-col gap-4">
            <a
              className="font-inter text-2xl font-semibold text-foreground transition-all duration-300 hover:text-primary"
              href="#"
            >
              Why Us?
            </a>
            <a
              className="font-inter text-2xl font-semibold text-foreground transition-all duration-300 hover:text-primary"
              href="#"
            >
              Our Values
            </a>
            <a
              className="font-inter text-2xl font-semibold text-foreground transition-all duration-300 hover:text-primary"
              href="#"
            >
              About Us
            </a>
            <a
              className="font-inter text-2xl font-semibold text-foreground transition-all duration-300 hover:text-primary"
              href="#"
            >
              FAQ
            </a>
          </div>
        </div>
        <Button>Gabung Ekosistem</Button>
      </div>
    </div>
  );
};

export default Navbar;
