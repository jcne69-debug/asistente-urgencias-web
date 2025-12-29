import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
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
                <span className="text-white/80">WhatsApp: +34 640 397 434</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">asistentesurgencias@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Valencia, España</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Sectores</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/fontaneros" 
                  className="text-white/80 hover:text-white transition-colors" 
                  data-testid="link-footer-fontaneros"
                >
                  Fontaneros
                </Link>
              </li>
              <li>
                <Link 
                  href="/electricistas" 
                  className="text-white/80 hover:text-white transition-colors" 
                  data-testid="link-footer-electricistas"
                >
                  Electricistas
                </Link>
              </li>
              <li>
                <Link 
                  href="/cerrajeros" 
                  className="text-white/80 hover:text-white transition-colors" 
                  data-testid="link-footer-cerrajeros"
                >
                  Cerrajeros
                </Link>
              </li>
              <li>
                <Link 
                  href="/climatizacion" 
                  className="text-white/80 hover:text-white transition-colors" 
                  data-testid="link-footer-climatizacion"
                >
                  Climatizacion
                </Link>
              </li>
              <li>
                <Link 
                  href="/cristaleros" 
                  className="text-white/80 hover:text-white transition-colors" 
                  data-testid="link-footer-cristaleros"
                >
                  Cristaleros
                </Link>
              </li>
              <li>
                <Link 
                  href="/calderas" 
                  className="text-white/80 hover:text-white transition-colors" 
                  data-testid="link-footer-calderas"
                >
                  Calderas
                </Link>
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
                  Politica de Privacidad
                </Link>
              </li>
              <li>
                <Link 
                  href="/terminos" 
                  className="text-white/80 hover:text-white transition-colors" 
                  data-testid="link-footer-terminos"
                >
                  Terminos y Condiciones
                </Link>
              </li>
              <li>
                <Link 
                  href="/aviso-legal" 
                  className="text-white/80 hover:text-white transition-colors"
                  data-testid="link-footer-aviso-legal"
                >
                  Aviso Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60 mb-4">&copy; {new Date().getFullYear()} Asistente-Urgencias Personal para Autónomos. Todos los derechos reservados.</p>
          <p className="text-center text-white/60 text-sm">Email: asistentesurgencias@gmail.com</p>
          <p className="text-center text-white/60 text-sm mt-2">Servicio gestionado por Inteligencia Artificial + Automatizaciones</p>
        </div>
      </div>
    </footer>
  );
}
