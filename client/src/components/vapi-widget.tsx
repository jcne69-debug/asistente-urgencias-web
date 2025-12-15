import { useEffect, useRef, useState } from "react";
import { X, MessageCircle } from "lucide-react";
import Vapi from "@vapi-ai/web";

export function VapiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const vapiRef = useRef<InstanceType<typeof Vapi> | null>(null);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
    const assistantId = "1fd64959-63b1-41ba-ac00-9417fbfdb4f6";

    if (!publicKey) {
      console.warn("VITE_VAPI_PUBLIC_KEY no configurada");
      return;
    }

    try {
      vapiRef.current = new Vapi({
        publicKey: publicKey,
        assistantId: assistantId,
        onMessage: () => {
          setIsLoading(false);
        },
        onError: (error: any) => {
          console.error("Error de Vapi:", error);
          setIsLoading(false);
        },
      });
    } catch (error) {
      console.error("Error inicializando Vapi:", error);
    }

    return () => {
      if (vapiRef.current) {
        try {
          vapiRef.current.stop();
        } catch (e) {
          console.error("Error al detener Vapi:", e);
        }
      }
    };
  }, []);

  const toggleChat = () => {
    if (!vapiRef.current) return;

    try {
      setIsLoading(true);
      setIsOpen(true);
      vapiRef.current.start();
    } catch (error) {
      console.error("Error al iniciar Vapi:", error);
      setIsLoading(false);
    }
  };

  const stopChat = () => {
    if (!vapiRef.current) return;

    try {
      vapiRef.current.stop();
      setIsOpen(false);
    } catch (error) {
      console.error("Error al detener Vapi:", error);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-to-r from-primary to-blue-900 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-whatsapp rounded-full animate-pulse"></div>
              <h3 className="font-semibold text-sm">Asistentes Urgencias</h3>
            </div>
            <button
              onClick={stopChat}
              className="hover:bg-white/20 p-1 rounded transition-colors"
              data-testid="button-close-vapi-widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col justify-center items-center gap-4">
            {isLoading ? (
              <div className="flex flex-col items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
                <p className="text-sm text-muted-foreground">Conectando asistente...</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground mb-2">
                  ¡Hola! Soy tu asistente
                </p>
                <p className="text-xs text-muted-foreground">
                  Pulsa el botón para hablar o realiza tu consulta por voz
                </p>
              </div>
            )}
          </div>

          <div className="border-t p-3 bg-white rounded-b-lg">
            <button
              onClick={toggleChat}
              disabled={isLoading}
              className="w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold py-2 rounded-lg transition-colors disabled:opacity-50 text-sm"
              data-testid="button-vapi-start"
            >
              {isLoading ? "Iniciando..." : "Pruébame"}
            </button>
          </div>
        </div>
      )}

      <button
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gradient-to-br from-primary to-blue-900 hover:shadow-xl hover:scale-110"
        }`}
        data-testid="button-vapi-toggle"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
