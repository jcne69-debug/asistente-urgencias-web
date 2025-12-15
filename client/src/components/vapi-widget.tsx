import { useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";

export function VapiWidget() {
  const vapiRef = useRef<Vapi | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const vapi = new Vapi("bb309dfd-dc0a-4d07-a23e-bb791d5b73dd");
    vapiRef.current = vapi;

    vapi.on("call-start", () => {
      setIsActive(true);
    });

    vapi.on("call-end", () => {
      setIsActive(false);
    });

    vapi.on("error", (error) => {
      console.error("Vapi error:", error);
      setIsActive(false);
    });

    return () => {
      vapi.stop();
    };
  }, []);

  const handleClick = async () => {
    if (!vapiRef.current) return;

    if (isActive) {
      vapiRef.current.stop();
    } else {
      await vapiRef.current.start("1fd64959-63b1-41ba-ac00-9417fbfdb4f6");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-[9999] rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-semibold text-sm hover:scale-105 active:scale-95 ${
        isActive
          ? "bg-red-600 hover:bg-red-700 text-white"
          : "bg-gradient-to-br from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white"
      }`}
      data-testid="button-vapi-pruebame"
    >
      {isActive ? (
        <>
          <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
          </svg>
          Terminar
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
          </svg>
          Pruébame
        </>
      )}
    </button>
  );
}
