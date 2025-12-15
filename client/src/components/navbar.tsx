import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/precios", label: "Precios" },
    { href: "/faq", label: "FAQ" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-lg px-3 py-2 cursor-pointer">
              <div className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg">
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <Wifi className="w-4 h-4 md:w-5 md:h-5 text-white rotate-45" />
                  <div className="w-3 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-white font-bold text-sm md:text-base">
                  Asistente IA
                </span>
                <span className="text-yellow-300 font-semibold text-xs md:text-sm">
                  24h Autónomos
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                className={`text-white hover:text-white ${
                  location === link.href ? "bg-primary-foreground/10" : ""
                }`}
                asChild
              >
                <Link href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                className={`w-full justify-start text-white hover:text-white ${
                  location === link.href ? "bg-primary-foreground/10" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
                asChild
              >
                <Link href={link.href} data-testid={`link-mobile-${link.label.toLowerCase()}`}>
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
