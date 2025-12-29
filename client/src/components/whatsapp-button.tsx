import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  const phoneNumber = "34640397434";
  const message = "Hola, me gustaría obtener más información sobre el servicio de Asistente de Urgencias.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 left-7 z-[99999] flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      data-testid="button-whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <SiWhatsapp className="w-6 h-6" />
      <span className="font-semibold text-sm">WhatsApp</span>
    </a>
  );
}
