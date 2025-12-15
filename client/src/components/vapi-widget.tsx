import { useEffect, useRef } from "react";

export function VapiWidget() {
  const vapiRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@vapi-ai/web@0.3.5/dist/vapi.js";
    script.async = true;
    
    script.onload = () => {
      setTimeout(() => {
        if (window.Vapi) {
          vapiRef.current = new window.Vapi({
            publicKey: "bb309dfd-dc0a-4d07-a23e-bb791d5b73dd",
          });
        }
      }, 100);
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleStart = async () => {
    if (vapiRef.current) {
      await vapiRef.current.start({
        assistantId: "1fd64959-63b1-41ba-ac00-9417fbfdb4f6",
      });
    }
  };

  return (
    <button
      onClick={handleStart}
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-br from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-semibold text-sm hover:scale-105 active:scale-95"
      data-testid="button-vapi-pruebame"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
      </svg>
      Pruébame
    </button>
  );
}

declare global {
  interface Window {
    Vapi: any;
  }
}
