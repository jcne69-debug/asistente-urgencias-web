import { useEffect } from "react";

export function VapiWidget() {
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
    <>
      <style>{`
        vapi-widget {
          --vapi-button-bg: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%) !important;
          --vapi-button-hover-bg: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%) !important;
          --vapi-button-text: white !important;
          --vapi-button-border-radius: 50px !important;
          --vapi-button-padding: 12px 20px !important;
          --vapi-button-font-size: 14px !important;
          --vapi-button-font-weight: 600 !important;
          --vapi-button-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
          --vapi-primary-color: #25D366 !important;
          --vapi-widget-width: 360px !important;
          --vapi-widget-height: 480px !important;
          --vapi-widget-border-radius: 12px !important;
          --vapi-header-bg: linear-gradient(to right, #1e3a8a, #1e40af) !important;
          --vapi-header-text: white !important;
          --vapi-message-input-bg: #f3f4f6 !important;
          --vapi-message-input-border: 1px solid #e5e7eb !important;
          --vapi-message-input-text: #1f2937 !important;
          --vapi-message-input-placeholder: #9ca3af !important;
          --vapi-message-box-bg: #f3f4f6 !important;
          --vapi-chat-bg: white !important;
        }
      `}</style>
      <vapi-widget
        public-key="bb309dfd-dc0a-4d07-a23e-bb791d5b73dd"
        assistant-id="1fd64959-63b1-41ba-ac00-9417fbfdb4f6"
        mode="chat"
        theme="light"
        button-label="Pruébame"
        title="Asistentes Urgencias"
        subtitle="Prueba nuestro asistente de voz"
        placeholder="Escribe tu mensaje..."
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
        "button-label"?: string;
        title?: string;
        subtitle?: string;
        placeholder?: string;
      };
    }
  }
}
