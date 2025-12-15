import { useEffect } from "react";

export function VapiWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      <style>{`
        vapi-widget {
          --vapi-button-bg: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          --vapi-button-hover-bg: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
          --vapi-button-text: white;
          --vapi-widget-bg: white;
          --vapi-header-bg: linear-gradient(to right, #1e3a8a, #1e40af);
          --vapi-header-text: white;
          --vapi-primary: #25D366;
          --vapi-border-radius: 12px;
        }
      `}</style>
      <vapi-widget
        public-key="bb309dfd-dc0a-4d07-a23e-bb791d5b73dd"
        assistant-id="1fd64959-63b1-41ba-ac00-9417fbfdb4f6"
        mode="chat"
        theme="light"
        title="Asistentes Urgencias"
        subtitle="Habla conmigo y simulamos una urgencia de prueba"
        placeholder="Escribe tu mensaje..."
        button-label="Pruébame"
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
        mode: string;
        theme: string;
        title?: string;
        subtitle?: string;
        placeholder?: string;
        "button-label"?: string;
      };
    }
  }
}
