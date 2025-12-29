import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, Phone, Clock, MessageSquare, Flame } from "lucide-react";

export default function Calderas() {
  const problemas = [
    "Clientes sin calefaccion en pleno invierno llamando desesperados",
    "Recibes llamadas de emergencia mientras reparas otra caldera",
    "Familias con ninos pequenos que necesitan agua caliente urgente",
    "Pierdes servicios de mantenimiento porque no puedes atender el telefono",
  ];

  const soluciones = [
    {
      icon: Phone,
      title: "Atencion de urgencias 24/7",
      description: "Tu asistente virtual atiende todas las llamadas de emergencias de calderas. Averias, sin agua caliente, sin calefaccion - siempre hay alguien respondiendo.",
    },
    {
      icon: MessageSquare,
      title: "Informacion detallada por WhatsApp",
      description: "Recibe al instante: direccion, marca y modelo de caldera si lo saben, tipo de problema, y si hay personas vulnerables en casa.",
    },
    {
      icon: Clock,
      title: "Disponible mientras trabajas",
      description: "Cuando estas reparando una caldera o haciendo un mantenimiento, el asistente gestiona todas las llamadas entrantes.",
    },
    {
      icon: Flame,
      title: "Especializado en calderas",
      description: "El asistente pregunta por el tipo de averia: no enciende, no calienta agua, no hay calefaccion, hace ruidos, pierde agua, error en pantalla.",
    },
  ];

  const testimonios = [
    {
      texto: "En invierno es imposible contestar todas las llamadas. El asistente me permite priorizar las urgencias reales.",
      autor: "Fernando G.",
      profesion: "Tecnico de calderas en Burgos",
    },
    {
      texto: "Mis clientes con contrato de mantenimiento valoran que siempre haya atencion. Es un diferenciador importante.",
      autor: "Luis M.",
      profesion: "Instalador de calefaccion en Valladolid",
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Asistente Virtual para Tecnicos de Calderas
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
            No pierdas llamadas de emergencia mientras reparas otra averia.
            Tu asistente de voz atiende clientes 24/7 y te envia los datos por WhatsApp.
          </p>
          <p className="text-base text-white/80">
            Servicio de atencion telefonica para tecnicos de calderas y calefaccion
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            El problema de los tecnicos de calderas
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            En invierno las emergencias de calderas se disparan. 
            Sin calefaccion ni agua caliente, los clientes no pueden esperar.
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
            Un asistente de voz que entiende de calderas, recoge la informacion 
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
            Para todo tipo de servicios de calefaccion
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              "Reparacion de calderas",
              "Calderas de gas",
              "Calderas de gasoil",
              "Calentadores de agua",
              "Calefaccion 24 horas",
              "Mantenimiento calderas",
              "Radiadores",
              "Suelo radiante",
              "Termos electricos",
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
            No dejes a tus clientes sin calefaccion
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Instalacion sencilla. Sin conocimientos tecnicos. Desde 119,79 euros al mes (IVA incluido).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-lg px-8"
                data-testid="button-solicitar-calderas"
              >
                Solicitar Instalacion
              </Button>
            </Link>
            <Link href="/precios">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
                data-testid="button-ver-precios-calderas"
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
