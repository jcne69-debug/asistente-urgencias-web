import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, Phone, Clock, MessageSquare, Key } from "lucide-react";

export default function Cerrajeros() {
  const problemas = [
    "Clientes desesperados que se han quedado fuera de casa y llaman mientras atiendes otra apertura",
    "Llamadas a las 2 de la madrugada de gente que ha perdido las llaves",
    "Pierdes servicios urgentes porque no puedes contestar cuando conduces",
    "Competencia feroz: si no contestas al momento, llaman a otro cerrajero",
  ];

  const soluciones = [
    {
      icon: Phone,
      title: "Atencion inmediata las 24 horas",
      description: "Tu asistente virtual atiende cada llamada al instante. El cliente que se ha quedado fuera de casa recibe atencion profesional aunque tu estes ocupado.",
    },
    {
      icon: MessageSquare,
      title: "Todos los datos en tu WhatsApp",
      description: "Direccion exacta, tipo de servicio (apertura, cambio de cerradura, copia de llaves), nivel de urgencia y telefono de contacto. Todo al momento.",
    },
    {
      icon: Clock,
      title: "No pierdas ningun servicio nocturno",
      description: "Las urgencias de cerrajeria ocurren de noche. El asistente recoge las llamadas mientras duermes y tu decides cuando atender.",
    },
    {
      icon: Key,
      title: "Especializado en cerrajeria urgente",
      description: "El asistente sabe preguntar: tipo de puerta, si hay ninos o ancianos dentro, si es vivienda o vehiculo, y la direccion exacta.",
    },
  ];

  const testimonios = [
    {
      texto: "En cerrajeria, el que contesta primero se lleva el trabajo. Ahora siempre contesto primero gracias al asistente.",
      autor: "Roberto S.",
      profesion: "Cerrajero 24h en Madrid",
    },
    {
      texto: "Antes perdia muchas aperturas nocturnas por no oir el telefono. Ahora tengo el resumen en WhatsApp cuando me despierto.",
      autor: "Javier P.",
      profesion: "Cerrajero autonomo en Valencia",
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Asistente Virtual para Cerrajeros
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
            No pierdas aperturas urgentes mientras atiendes otro servicio.
            Tu asistente de voz atiende clientes 24/7 y te envia la informacion por WhatsApp.
          </p>
          <p className="text-base text-white/80">
            Servicio de contestador inteligente para cerrajeros autonomos en Valencia, Comunidad Valenciana y toda Espana - aperturas urgentes 24 horas
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            El problema de los cerrajeros autonomos
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            La cerrajeria urgente es un negocio donde cada segundo cuenta.
            Si no contestas, el cliente llama al siguiente cerrajero de la lista.
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
            La solucion: nunca pierdas una apertura urgente
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Un asistente de voz que atiende todas tus llamadas de cerrajeria urgente,
            recoge los datos del cliente y te avisa inmediatamente por WhatsApp.
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
            Que dicen otros cerrajeros
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
            Para todos los servicios de cerrajeria
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              "Aperturas urgentes",
              "Cambio de cerraduras",
              "Cerrajero 24 horas",
              "Apertura de coches",
              "Bombillos de seguridad",
              "Cerraduras antibumping",
              "Cajas fuertes",
              "Puertas blindadas",
              "Copias de llaves",
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
            No dejes que la competencia se lleve tus clientes
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Atencion profesional 24/7. Instalacion en minutos. Desde 119,79 euros al mes (IVA incluido).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-lg px-8"
                data-testid="button-solicitar-cerrajeros"
              >
                Solicitar Instalacion
              </Button>
            </Link>
            <Link href="/precios">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
                data-testid="button-ver-precios-cerrajeros"
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
