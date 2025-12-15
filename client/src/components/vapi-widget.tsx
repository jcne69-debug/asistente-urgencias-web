import { useEffect } from "react";
import { MessageCircle } from "lucide-react";

export function VapiWidget() {
  useEffect(() => {
    // Cargar script de Vapi
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleClick = () => {
    const vapiWidget = document.querySelector("vapi-widget") as any;
    if (vapiWidget && vapiWidget.open) {
      vapiWidget.open();
    }
  };

  return (
    <>
      <style>{`
        vapi-widget {
          display: none !important;
        }
      `}</style>
      
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-br from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 font-semibold text-sm hover:scale-105 active:scale-95"
        data-testid="button-vapi-widget"
      >
        <MessageCircle className="w-5 h-5" />
        Pruébame
      </button>

      <vapi-widget
        public-key="bb309dfd-dc0a-4d07-a23e-bb791d5b73dd"
        assistant-id="1fd64959-63b1-41ba-ac00-9417fbfdb4f6"
        mode="chat"
        theme="light"
      />
    </>
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vapi-widget": {
        "public-key": string;
        "assistant-id": string;
        mode?: string;
        theme?: string;
      };
    }
  }
}
