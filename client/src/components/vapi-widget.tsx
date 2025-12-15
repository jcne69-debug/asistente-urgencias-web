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
          --vapi-button-text: white !important;
          --vapi-button-border-radius: 50px !important;
          --vapi-button-padding: 12px 20px !important;
          --vapi-button-font-size: 14px !important;
          --vapi-button-font-weight: 600 !important;
        }
      `}</style>
      <vapi-widget
        public-key="bb309dfd-dc0a-4d07-a23e-bb791d5b73dd"
        assistant-id="1fd64959-63b1-41ba-ac00-9417fbfdb4f6"
        mode="chat"
        theme="light"
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
        mode?: string;
        theme?: string;
        "button-label"?: string;
      };
    }
  }
}
