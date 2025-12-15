import { useEffect, useRef } from "react";

export function VapiWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vapiRef = useRef<any>(null);

  useEffect(() => {
    // Cargar script de Vapi
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    
    script.onload = () => {
      setTimeout(() => {
        const widget = document.querySelector("vapi-widget") as any;
        if (widget) {
          vapiRef.current = widget;
          // Ocultar widget por defecto
          widget.style.display = "none";
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

  const handleOpen = () => {
    if (vapiRef.current) {
      vapiRef.current.style.display = "block";
      // Trigger click en el botón del widget si existe
      const button = vapiRef.current.shadowRoot?.querySelector("button");
      if (button) {
        button.click();
      }
    }
  };

  const handleClose = () => {
    if (vapiRef.current) {
      vapiRef.current.style.display = "none";
    }
  };

  return (
    <>
      <style>{`
        vapi-widget {
          display: none !important;
        }
      `}</style>

      <div ref={containerRef}>
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-br from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 font-semibold text-sm hover:scale-105 active:scale-95"
          data-testid="button-vapi-toggle"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
            <path fillOpacity={0.5} d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
          </svg>
          Pruébame
        </button>

        <vapi-widget
          public-key="bb309dfd-dc0a-4d07-a23e-bb791d5b73dd"
          assistant-id="1fd64959-63b1-41ba-ac00-9417fbfdb4f6"
          mode="chat"
          theme="light"
        />
      </div>
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
