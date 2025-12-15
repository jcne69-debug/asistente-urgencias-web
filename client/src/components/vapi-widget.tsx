import { useEffect } from "react";

export function VapiWidget() {
  useEffect(() => {
    // Cargar el script del widget de Vapi
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
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
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 40,
      } as React.CSSProperties}
    />
  );
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vapi-widget": any;
    }
  }
}
