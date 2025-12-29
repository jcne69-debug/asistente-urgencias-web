import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, Phone, Clock, MessageSquare, Zap } from "lucide-react";

export default function Electricistas() {
  const problemas = [
    "Un cliente llama por un corte de luz urgente mientras estas en otra instalacion",
    "Pierdes llamadas de emergencia porque estas subido a una escalera",
    "Clientes que necesitan un electricista urgente y no pueden esperar",
    "Llamadas nocturnas por cortocircuitos que no puedes atender al momento",
  ];

  const soluciones = [
    {
      icon: Phone,
      title: "Atencion de emergencias electricas 24/7",
      description: "Tu asistente virtual atiende todas las llamadas de urgencias electricas. Cortes de luz, cortocircuitos, averias - ninguna llamada sin respuesta.",
    },
    {
      icon: MessageSquare,
      title: "Datos completos por WhatsApp",
      description: "Recibe al instante: nombre, telefono, direccion exacta, tipo de problema electrico y nivel de urgencia. Todo listo para que priorices.",
    },
    {
      icon: Clock,
      title: "Trabaja sin interrupciones",
      description: "Cuando estas haciendo una instalacion electrica o reparando un cuadro, el asistente gestiona las llamadas por ti.",
    },
    {
      icon: Zap,
      title: "Preparado para urgencias electricas",
      description: "El asistente pregunta por el tipo de averia: apagones, enchufes que no funcionan, olores a quemado, saltan los diferenciales, etc.",
    },
  ];

  const testimonios = [
    {
      texto: "Como electricista autonomo, no puedo permitirme perder llamadas. Este asistente me ha salvado decenas de trabajos que antes perdia.",
      autor: "Antonio M.",
      profesion: "Electricista autonomo en Barcelona",
    },
    {
      texto: "Las emergencias electricas no avisan. Ahora tengo la tranquilidad de que siempre hay alguien atendiendo mis llamadas.",
      autor: "Francisco L.",
      profesion: "Electricista 24h en Sevilla",
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Asistente Virtual para Electricistas
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
            No pierdas llamadas de emergencia mientras haces una instalacion.
            Tu asistente de voz atiende clientes 24/7 y te envia los datos por WhatsApp.
          </p>
          <p className="text-base text-white/80">
            Secretaria virtual para electricistas autonomos - atencion telefonica automatizada
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            El problema de los electricistas autonomos
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Las averias electricas son urgentes y los clientes necesitan respuesta rapida.
            Pero cuando estas trabajando, no puedes contestar el telefono.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemas.map((problema, index) => (
              <Card key={index} className="p-6 bg-destructive/5" data-testid={`card-problema-${index}`}>
                <p className="text-foreground">{problema}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            La solucion: atencion telefonica automatizada
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Un asistente inteligente que recoge llamadas de emergencia electrica,
            obtiene todos los datos y te los envia por WhatsApp inmediatamente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {soluciones.map((solucion, index) => (
              <Card key={index} className="p-8 hover-elevate" data-testid={`card-solucion-${index}`}>
                <solucion.icon className="w-12 h-12 text-whatsapp mb-4" />
                <h3 className="text-xl font-semibold mb-3">{solucion.title}</h3>
                <p className="text-muted-foreground">{solucion.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Que dicen otros electricistas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonios.map((testimonio, index) => (
              <Card key={index} className="p-8" data-testid={`card-testimonio-${index}`}>
                <p className="text-lg italic mb-4">"{testimonio.texto}"</p>
                <p className="font-semibold">{testimonio.autor}</p>
                <p className="text-sm text-muted-foreground">{testimonio.profesion}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Para todo tipo de servicios electricos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              "Cortes de luz",
              "Cortocircuitos",
              "Instalaciones electricas",
              "Cuadros electricos",
              "Enchufes y interruptores",
              "Electricista 24 horas",
              "Averias electricas",
              "Boletines electricos",
              "Iluminacion LED",
            ].map((servicio, index) => (
              <div key={index} className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="w-5 h-5 text-whatsapp" />
                <span className="text-sm">{servicio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Captura todas las llamadas de emergencia electrica
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Instalacion sencilla. Sin conocimientos tecnicos. Desde 119,79 euros al mes (IVA incluido).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-lg px-8"
                data-testid="button-solicitar-electricistas"
              >
                Solicitar Instalacion
              </Button>
            </Link>
            <Link href="/precios">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
                data-testid="button-ver-precios-electricistas"
              >
                Ver Precios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
