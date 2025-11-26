import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-white/80 hover:text-white transition-colors" 
                  data-testid="link-footer-inicio"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicios" 
                  className="text-white/80 hover:text-white transition-colors" 
                  data-testid="link-footer-servicios"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link 
                  href="/precios" 
                  className="text-white/80 hover:text-white transition-colors" 
                  data-testid="link-footer-precios"
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-white/80 hover:text-white transition-colors" 
                  data-testid="link-footer-faq"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link 
                  href="/contacto" 
                  className="text-white/80 hover:text-white transition-colors" 
                  data-testid="link-footer-contacto"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">+34 900 123 456</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">info@asistente-urgencias.es</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Madrid, España</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/politicas" 
                  className="text-white/80 hover:text-white transition-colors" 
                  data-testid="link-footer-politicas"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link 
                  href="/terminos" 
                  className="text-white/80 hover:text-white transition-colors" 
                  data-testid="link-footer-terminos"
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Asistente-Urgencias Personal. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
