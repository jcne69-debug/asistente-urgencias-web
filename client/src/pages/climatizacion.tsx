import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, Phone, Clock, MessageSquare, Thermometer } from "lucide-react";

export default function Climatizacion() {
  const problemas = [
    "El aire acondicionado deja de funcionar en plena ola de calor y los clientes llaman desesperados",
    "Recibes llamadas urgentes mientras estas en otra instalacion y no puedes contestar",
    "Clientes con bebes o ancianos que necesitan climatizacion inmediata",
    "Pierdes servicios de mantenimiento porque no puedes atender el telefono",
  ];

  const soluciones = [
    {
      icon: Phone,
      title: "Atencion de urgencias 24/7",
      description: "Tu asistente virtual atiende todas las llamadas de emergencias de climatizacion. Averias de aire acondicionado, bombas de calor, splits que no enfrían.",
    },
    {
      icon: MessageSquare,
      title: "Informacion completa por WhatsApp",
      description: "Recibe al instante: direccion, tipo de equipo, marca, modelo si lo saben, sintoma del problema y nivel de urgencia.",
    },
    {
      icon: Clock,
      title: "Disponible mientras instalas",
      description: "Cuando estas montando un equipo nuevo o reparando una unidad exterior, el asistente gestiona las llamadas entrantes.",
    },
    {
      icon: Thermometer,
      title: "Especializado en climatizacion",
      description: "El asistente pregunta por el tipo de problema: no enfria, no calienta, hace ruido, gotea agua, olor extraño, no enciende.",
    },
  ];

  const testimonios = [
    {
      texto: "En verano es imposible contestar todas las llamadas. El asistente me ha ayudado a capturar un 60% mas de clientes.",
      autor: "David M.",
      profesion: "Tecnico de aire acondicionado en Alicante",
    },
    {
      texto: "Mis clientes valoran que siempre haya alguien atendiendo. Les da confianza y yo no pierdo oportunidades.",
      autor: "Pedro A.",
      profesion: "Instalador de climatizacion en Murcia",
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Asistente Virtual para Tecnicos de Climatizacion
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
            No pierdas llamadas de emergencia mientras instalas un equipo.
            Tu asistente de voz atiende clientes 24/7 y te envia los datos por WhatsApp.
          </p>
          <p className="text-base text-white/80">
            Servicio de atencion telefonica para tecnicos de aire acondicionado y climatizacion
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            El problema de los tecnicos de climatizacion
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            En verano las llamadas se multiplican. Cuando hace calor, 
            todos necesitan un tecnico urgente y tu no puedes atender a todos.
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
            La solucion: secretaria virtual especializada
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Un asistente de voz que entiende de climatizacion, recoge la informacion 
            del cliente y te la envia por WhatsApp al momento.
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
            Que dicen otros tecnicos
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
            Para todo tipo de servicios de climatizacion
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              "Aire acondicionado",
              "Bombas de calor",
              "Splits y multisplits",
              "Conductos de aire",
              "Climatizacion 24h",
              "Mantenimiento equipos",
              "Instalacion de equipos",
              "Reparacion de compresores",
              "Recarga de gas",
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
            No pierdas clientes en temporada alta
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Instalacion sencilla. Sin conocimientos tecnicos. Desde 119,79 euros al mes (IVA incluido).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-lg px-8"
                data-testid="button-solicitar-climatizacion"
              >
                Solicitar Instalacion
              </Button>
            </Link>
            <Link href="/precios">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
                data-testid="button-ver-precios-climatizacion"
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
