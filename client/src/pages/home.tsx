import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/hispanic_tradesperson_answering_phone.png";

export default function Home() {
  const steps = [
    {
      number: "01",
      title: "Cliente llama",
      description: "Tu cliente intenta contactarte mientras estás ocupado trabajando",
    },
    {
      number: "02",
      title: "Asistente responde",
      description: "Si no contestas, tu asistente de voz personalizado atiende automáticamente",
    },
    {
      number: "03",
      title: "Recoge datos",
      description: "Recopila nombre, teléfono, urgencia, localidad y horario preferido",
    },
    {
      number: "04",
      title: "WhatsApp instantáneo",
      description: "Recibes un resumen completo por WhatsApp para actuar de inmediato",
    },
  ];

  const benefits = [
    {
      number: "∞",
      title: "Disponible 24/7",
      description: "Tu asistente nunca duerme ni se toma descansos",
    },
    {
      number: "⚡",
      title: "Respuesta instantánea",
      description: "Cada llamada es atendida en segundos",
    },
    {
      number: "✓",
      title: "100% profesional",
      description: "Trato amable y recopilación precisa de datos",
    },
  ];

  return (
    <Layout>
      <section
        className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary to-blue-900 overflow-hidden"
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Nunca Pierdas Otra Llamada Importante
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Tu asistente personal de voz atiende tus llamadas urgentes cuando estás ocupado,
            recoge toda la información necesaria y te envía un resumen completo por WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-lg px-8"
                data-testid="button-cta-instalar"
              >
                Quiero Instalar Mi Asistente
              </Button>
            </Link>
            <Link href="/servicios">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8"
                data-testid="button-mas-informacion"
              >
                Más Información
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-que-es">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Qué es Asistente-Urgencias Personal?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Es un servicio profesional de asistente de voz automatizado diseñado específicamente
            para autónomos y pequeños negocios. Cuando estás trabajando y no puedes atender el
            teléfono, nuestro sistema inteligente responde por ti, mantiene una conversación
            natural con tus clientes, recopila todos los datos importantes y te los envía al
            instante por WhatsApp para que puedas responder cuando tengas un momento.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card" data-testid="section-como-funciona">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ¿Cómo Funciona?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step) => (
              <Card
                key={step.number}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-paso-${step.number}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-whatsapp mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Beneficios Clave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-300"
                data-testid={`card-beneficio-${index}`}
              >
                <div className="text-6xl mb-4 text-whatsapp">{benefit.number}</div>
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para No Perder Más Clientes?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Instala tu asistente personal hoy y empieza a capturar cada oportunidad de negocio
          </p>
          <Link href="/contacto">
            <Button
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-lg px-8"
              data-testid="button-cta-solicitar"
            >
              Solicitar Instalación
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
