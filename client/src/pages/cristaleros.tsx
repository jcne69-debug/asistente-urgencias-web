import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, Phone, Clock, MessageSquare, Square } from "lucide-react";

export default function Cristaleros() {
  const problemas = [
    "Un cliente llama porque le han roto el escaparate y necesita arreglarlo urgente",
    "Recibes llamadas de emergencia mientras estas cortando cristal en el taller",
    "Roturas de ventanas por la noche que no puedes atender hasta el dia siguiente",
    "Pierdes trabajos urgentes porque no puedes contestar con las manos ocupadas",
  ];

  const soluciones = [
    {
      icon: Phone,
      title: "Atencion de urgencias 24 horas",
      description: "Tu asistente virtual atiende todas las llamadas de emergencias de cristaleria. Roturas, escaparates, ventanas, mamparas - siempre hay alguien atendiendo.",
    },
    {
      icon: MessageSquare,
      title: "Datos precisos por WhatsApp",
      description: "Recibe al instante: direccion exacta, tipo de cristal (escaparate, ventana, mampara), medidas aproximadas si las conocen y nivel de urgencia.",
    },
    {
      icon: Clock,
      title: "Disponible mientras trabajas",
      description: "Cuando estas en el taller o instalando una mampara, el asistente recoge las llamadas y te avisa cuando termines.",
    },
    {
      icon: Square,
      title: "Preparado para cristaleria",
      description: "El asistente sabe preguntar por el tipo de trabajo: cristales rotos, escaparates, ventanas, mamparas de bano, espejos a medida.",
    },
  ];

  const testimonios = [
    {
      texto: "Las urgencias de cristaleria son muy rentables pero impredecibles. Ahora no pierdo ninguna llamada importante.",
      autor: "Miguel R.",
      profesion: "Cristalero autonomo en Zaragoza",
    },
    {
      texto: "Mis clientes comerciales valoran que siempre conteste alguien. Un escaparate roto no puede esperar.",
      autor: "Jose L.",
      profesion: "Cristaleria urgente en Bilbao",
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Asistente Virtual para Cristaleros
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
            No pierdas llamadas de urgencia mientras trabajas en el taller.
            Tu asistente de voz atiende clientes 24/7 y te envia los datos por WhatsApp.
          </p>
          <p className="text-base text-white/80">
            Servicio de atencion telefonica para cristaleros y cristalerias de urgencias
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            El problema de los cristaleros autonomos
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Las urgencias de cristaleria son muy rentables pero llegan sin avisar.
            Un escaparate roto o una ventana no pueden esperar.
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
            La solucion: atencion profesional automatizada
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Un asistente de voz que atiende las emergencias de cristaleria,
            recoge los datos del cliente y te los envia por WhatsApp.
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
            Que dicen otros cristaleros
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
            Para todo tipo de servicios de cristaleria
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              "Cristales rotos",
              "Escaparates urgentes",
              "Ventanas y puertas",
              "Mamparas de bano",
              "Cristalero 24 horas",
              "Espejos a medida",
              "Vidrios de seguridad",
              "Doble acristalamiento",
              "Cristales templados",
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
            Captura todas las urgencias de cristaleria
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Instalacion rapida. Sin complicaciones. Desde 119,79 euros al mes (IVA incluido).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-lg px-8"
                data-testid="button-solicitar-cristaleros"
              >
                Solicitar Instalacion
              </Button>
            </Link>
            <Link href="/precios">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
                data-testid="button-ver-precios-cristaleros"
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
