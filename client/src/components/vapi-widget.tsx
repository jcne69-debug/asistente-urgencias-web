import { useEffect, useRef, useState } from "react";

export function VapiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const vapiRef = useRef<any>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Cargar SDK de Vapi
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@vapi-ai/web@0.4.0/dist/vapi.js";
    script.async = true;
    
    script.onload = () => {
      // Esperar un poco para asegurar que window.Vapi esté disponible
      setTimeout(() => {
        if (window.Vapi) {
          vapiRef.current = new window.Vapi({
            publicKey: "bb309dfd-dc0a-4d07-a23e-bb791d5b73dd",
          });
        }
      }, 200);
    };

    scriptRef.current = script;
    document.body.appendChild(script);

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
    };
  }, []);

  const handleStartCall = async () => {
    if (vapiRef.current) {
      try {
        await vapiRef.current.start({
          assistantId: "1fd64959-63b1-41ba-ac00-9417fbfdb4f6",
        });
        setIsOpen(true);
      } catch (error) {
        console.error("Error starting Vapi:", error);
      }
    }
  };

  const handleEndCall = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
      setIsOpen(false);
    }
  };

  return (
    <button
      onClick={isOpen ? handleEndCall : handleStartCall}
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-br from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 font-semibold text-sm hover:scale-105 active:scale-95"
      data-testid="button-vapi-toggle"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
      </svg>
      {isOpen ? "Cerrar" : "Pruébame"}
    </button>
  );
}

declare global {
  interface Window {
    Vapi: any;
  }
}
