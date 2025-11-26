import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";
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
            <div className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 cursor-pointer">
              <Phone className="w-6 h-6 md:w-7 md:h-7 text-whatsapp" />
              <span className="text-white font-bold text-lg md:text-xl">
                Asistente-Urgencias Personal
              </span>
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
