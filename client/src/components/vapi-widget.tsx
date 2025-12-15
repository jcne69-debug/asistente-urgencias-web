import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export function VapiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const vapi = useRef<any>(null);

  useEffect(() => {
    // Cargar el script del widget de Vapi
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    script.type = "text/javascript";
    script.onload = () => {
      // Inicializar Vapi cuando el script esté listo
      if (window.Vapi) {
        vapi.current = new window.Vapi({
          publicKey: "bb309dfd-dc0a-4d07-a23e-bb791d5b73dd",
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleStart = async () => {
    if (vapi.current) {
      try {
        await vapi.current.start({
          assistantId: "1fd64959-63b1-41ba-ac00-9417fbfdb4f6",
        });
      } catch (err) {
        console.error("Error starting Vapi:", err);
      }
    }
  };

  const handleStop = () => {
    if (vapi.current) {
      vapi.current.stop();
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3" ref={containerRef}>
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-to-r from-primary to-blue-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-whatsapp rounded-full animate-pulse"></div>
              <h3 className="font-semibold text-sm">Asistentes Urgencias</h3>
            </div>
            <button onClick={handleStop} className="hover:bg-white/20 p-1 rounded transition-colors" data-testid="button-close-vapi">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 bg-gray-50 text-center min-h-48 flex flex-col justify-center items-center gap-3">
            <p className="text-sm font-medium">¡Hola! Soy tu futuro asistente.</p>
            <p className="text-xs text-muted-foreground">Habla conmigo y simulamos una urgencia de prueba.</p>
          </div>

          <div className="border-t p-3 bg-white">
            <button onClick={handleStart} className="w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold py-2 rounded-lg transition-colors text-sm" data-testid="button-vapi-start">
              Comencemos
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className={`px-4 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center font-semibold text-sm ${isOpen ? "bg-red-500 hover:bg-red-600 text-white" : "bg-gradient-to-br from-primary to-blue-900 hover:shadow-xl hover:scale-105 text-white"}`} data-testid="button-vapi-toggle">
        {isOpen ? <X className="w-5 h-5" /> : "Pruébame"}
      </button>
    </div>
  );
}

declare global {
  interface Window {
    Vapi: any;
  }
}
