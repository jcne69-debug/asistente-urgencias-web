import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, Phone, Clock, MessageSquare, Wrench } from "lucide-react";

export default function Fontaneros() {
  const problemas = [
    "Un cliente llama por una fuga de agua urgente mientras reparas otra averia",
    "Recibes llamadas de emergencia a las 3 de la madrugada cuando duermes",
    "Pierdes trabajos porque no puedes contestar cuando tienes las manos ocupadas",
    "Clientes frustrados que cuelgan y llaman a otro fontanero",
  ];

  const soluciones = [
    {
      icon: Phone,
      title: "Atencion de llamadas 24 horas",
      description: "Tu asistente virtual atiende todas las llamadas de emergencias de fontaneria, incluso a las 3 de la madrugada. Nunca pierdas un cliente por no poder contestar.",
    },
    {
      icon: MessageSquare,
      title: "Resumen instantaneo por WhatsApp",
      description: "Recibe todos los datos del cliente en tu WhatsApp: nombre, telefono, direccion, tipo de averia (fuga, atasco, caldera) y nivel de urgencia.",
    },
    {
      icon: Clock,
      title: "Disponible mientras trabajas",
      description: "Cuando estas arreglando una tuberia o instalando un calentador, el asistente recoge las llamadas y te avisa cuando termines.",
    },
    {
      icon: Wrench,
      title: "Especializado en urgencias",
      description: "El asistente sabe preguntar por el tipo de problema: fugas de agua, atascos, problemas de caldera, instalaciones y reparaciones urgentes.",
    },
  ];

  const testimonios = [
    {
      texto: "Antes perdia 3-4 llamadas al dia cuando estaba en un trabajo. Ahora las capturo todas y he aumentado mis ingresos un 40%.",
      autor: "Manuel G.",
      profesion: "Fontanero autonomo en Valencia",
    },
    {
      texto: "Lo mejor es que puedo dormir tranquilo. Si hay una urgencia nocturna, el asistente recoge los datos y yo llamo cuando me levanto.",
      autor: "Carlos R.",
      profesion: "Fontanero 24h en Madrid",
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Asistente Virtual para Fontaneros
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
            No pierdas mas llamadas de emergencia mientras arreglas una fuga. 
            Tu asistente de voz atiende clientes 24/7 y te envia los datos por WhatsApp.
          </p>
          <p className="text-base text-white/80">
            Servicio de atencion telefonica automatizada para fontaneros autonomos en Valencia, Comunidad Valenciana y toda Espana
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            El problema de los fontaneros autonomos
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Como fontanero, tu trabajo requiere concentracion y tienes las manos ocupadas. 
            Pero cada llamada perdida es un cliente que se va a la competencia.
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
            La solucion: tu secretaria virtual 24 horas
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Un asistente de voz inteligente que contesta tus llamadas, 
            recoge la informacion del cliente y te la envia por WhatsApp al instante.
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
            Que dicen otros fontaneros
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
            Ideal para servicios de fontaneria urgente
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              "Fugas de agua",
              "Atascos y desatascos",
              "Reparacion de calentadores",
              "Instalacion de calderas",
              "Averias de cisterna",
              "Fontaneria 24 horas",
              "Reparacion de tuberias",
              "Problemas de presion",
              "Grifos y sanitarios",
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
            Empieza a capturar todas las llamadas de emergencia
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Instalacion rapida. Sin complicaciones tecnicas. Desde 119,79 euros al mes (IVA incluido).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-lg px-8"
                data-testid="button-solicitar-fontaneros"
              >
                Solicitar Instalacion
              </Button>
            </Link>
            <Link href="/precios">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
                data-testid="button-ver-precios-fontaneros"
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
