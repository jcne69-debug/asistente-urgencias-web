import { useEffect } from "react";

export function VapiWidget() {
  useEffect(() => {
    // Cargar script de Vapi
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    document.body.appendChild(script);

    // Personalizar estilos del widget después de que cargue
    const timer = setTimeout(() => {
      const style = document.createElement("style");
      style.textContent = `
        vapi-widget {
          --vapi-button-bg: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          --vapi-button-hover-bg: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
          --vapi-button-text: white;
          --vapi-button-border: none;
          --vapi-button-border-radius: 50px;
          --vapi-button-padding: 12px 20px;
          --vapi-button-font-size: 14px;
          --vapi-button-font-weight: 600;
          --vapi-button-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          --vapi-widget-bg: white;
          --vapi-widget-border-radius: 12px;
          --vapi-primary-color: #25D366;
        }
        
        vapi-widget::part(button) {
          padding: 12px 20px !important;
          border-radius: 50px !important;
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%) !important;
          color: white !important;
          font-weight: 600 !important;
          font-size: 14px !important;
          border: none !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
          transition: all 0.2s ease !important;
        }
        
        vapi-widget::part(button):hover {
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2) !important;
          transform: scale(1.05) !important;
        }
      `;
      document.head.appendChild(style);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <vapi-widget
      public-key="bb309dfd-dc0a-4d07-a23e-bb791d5b73dd"
      assistant-id="1fd64959-63b1-41ba-ac00-9417fbfdb4f6"
      mode="chat"
      theme="light"
      button-label="Pruébame"
      position="bottom-right"
    />
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
        position?: string;
      };
    }
  }
}
