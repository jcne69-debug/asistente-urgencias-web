import { useEffect, useRef, useState } from "react";
import { X, MessageCircle } from "lucide-react";
import Vapi from "@vapi-ai/web";

export function VapiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const vapiRef = useRef<any>(null);

  useEffect(() => {
    const apiKey = "bb309dfd-dc0a-4d07-a23e-bb791d5b73dd";

    try {
      vapiRef.current = new Vapi({
        publicKey: apiKey,
      });
    } catch (error) {
      console.error("Error Vapi:", error);
    }

    return () => {
      try {
        if (vapiRef.current?.stop) {
          vapiRef.current.stop();
        }
      } catch (e) {
        console.error(e);
      }
    };
  }, []);

  const handleStart = async () => {
    try {
      setIsLoading(true);
      await vapiRef.current?.start({
        assistantId: "1fd64959-63b1-41ba-ac00-9417fbfdb4f6",
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  const handleStop = () => {
    try {
      vapiRef.current?.stop();
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
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
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <p className="text-sm font-medium">¡Hola! Soy tu futuro asistente.</p>
            <p className="text-xs text-muted-foreground">Habla conmigo y simulamos una urgencia de prueba.</p>
          </div>

          <div className="border-t p-3 bg-white">
            <button onClick={handleStart} disabled={isLoading} className="w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold py-2 rounded-lg transition-colors disabled:opacity-50 text-sm" data-testid="button-vapi-start">
              {isLoading ? "Iniciando..." : "Comencemos"}
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center font-semibold text-xs ${isOpen ? "bg-red-500 hover:bg-red-600" : "bg-gradient-to-br from-primary to-blue-900 hover:shadow-xl hover:scale-110"}`} title="Pruébame" data-testid="button-vapi-toggle">
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>
    </div>
  );
}
