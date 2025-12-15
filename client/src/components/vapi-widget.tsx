import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export function VapiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  return (
    <div ref={containerRef}>
      <style>{`
        .vapi-widget-hidden vapi-widget {
          display: none !important;
        }
        
        vapi-widget {
          --vapi-button-bg: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%) !important;
          --vapi-button-text: white !important;
          --vapi-button-border-radius: 50px !important;
          --vapi-button-padding: 12px 20px !important;
          --vapi-button-font-size: 14px !important;
          --vapi-button-font-weight: 600 !important;
          --vapi-widget-width: 300px !important;
          --vapi-widget-height: 350px !important;
        }
      `}</style>

      <div className={isOpen ? "" : "vapi-widget-hidden"}>
        <vapi-widget
          public-key="bb309dfd-dc0a-4d07-a23e-bb791d5b73dd"
          assistant-id="1fd64959-63b1-41ba-ac00-9417fbfdb4f6"
          mode="chat"
          theme="light"
          button-label="Pruébame"
        />
      </div>

      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed bottom-6 right-6 z-50 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all"
          data-testid="button-close-vapi"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-br from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-semibold text-sm"
          data-testid="button-open-vapi"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
          </svg>
          Pruébame
        </button>
      )}
    </div>
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
        "button-label"?: string;
      };
    }
  }
}
