import { useEffect } from "react";

export function VapiWidget() {
  useEffect(() => {
    // Cargar script de Vapi
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    document.body.appendChild(script);

    // Esperar a que el script cargue y personalizar el widget
    const timer = setTimeout(() => {
      const vapiWidget = document.querySelector("vapi-widget") as any;
      if (vapiWidget) {
        // Aplicar estilos personalizados
        vapiWidget.style.cssText = `
          --vapi-button-bg: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          --vapi-button-text: white;
          --vapi-button-padding: 12px 16px;
          --vapi-widget-width: 320px;
          --vapi-widget-height: 400px;
          --vapi-primary-color: #25D366;
          --vapi-border-radius: 12px;
        `;
      }
    }, 500);

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
      position="bottom-right"
      button-label="Pruébame"
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
        position?: string;
        "button-label"?: string;
      };
    }
  }
}
