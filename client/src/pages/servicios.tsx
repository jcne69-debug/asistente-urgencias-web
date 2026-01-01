import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import whatsappMockup from "@assets/generated_images/whatsapp_urgent_call_summary_optimized.png";
import callScreen from "@assets/generated_images/incoming_call_interface_screen_optimized.png";

export default function Servicios() {
  const assistantTypes = [
    {
      icon: "📱",
      title: "Asistente de Urgencias - Estándar",
      description:
        "Asistente de voz con configuración estándar y personalización básica. Ideal para empezar con una solución confiable y económica.",
      features: [
        "Mensaje de bienvenida personalizado básico",
        "Preguntas estándar para recopilación de datos",
        "Integración con tu número de teléfono",
        "Resúmenes por WhatsApp automáticos",
      ],
    },
    {
      icon: "✨",
      title: "Asistente de Urgencias - Personalizado",
      description:
        "Asistente completamente adaptado a tu negocio con preguntas personalizadas, mensajes únicos y flujos optimizados según tu sector.",
      features: [
        "Personalización completa del mensaje de bienvenida",
        "Configuración avanzada de preguntas específicas para tu sector",
        "Integración con tu número de teléfono existente",
        "Optimización de flujo de conversación según tu negocio",
      ],
    },
    {
      icon: "💻",
      title: "Asistente de Chat para Webs",
      description:
        "Widget de chat inteligente integrado en tu sitio web. Atiende consultas de clientes y captura leads automáticamente.",
      features: [
        "Chat integrable en cualquier web",
        "Respuestas automáticas a preguntas frecuentes",
        "Recopilación de datos de clientes interesados",
        "Historial de conversaciones para tu seguimiento",
      ],
    },
  ];

  const services = [
    {
      icon: "🤖",
      title: "Gestión Inteligente de Llamadas",
      description:
        "Nuestro sistema detecta cuando no puedes atender y activa automáticamente tu asistente para no perder ninguna oportunidad.",
      features: [
        "Desvío automático cuando no contestas",
        "Recopilación estructurada de datos del cliente",
        "Identificación de nivel de urgencia",
      ],
    },
    {
      icon: "⚙️",
      title: "Automatización Total",
      description:
        "Todo el proceso funciona sin que tengas que hacer nada. Desde la llamada hasta el resumen en tu WhatsApp.",
      features: [
        "Configuración inicial única",
        "Sistema 100% automático",
        "Sin necesidad de intervención manual",
      ],
    },
    {
      icon: "💬",
      title: "Integración con WhatsApp",
      description:
        "Recibe resúmenes detallados de cada llamada directamente en WhatsApp, listos para que respondas cuando puedas.",
      features: [
        "Mensajes instantáneos tras cada llamada",
        "Formato claro y organizado",
        "Incluye todos los datos del cliente",
      ],
    },
    {
      icon: "🎧",
      title: "Soporte Técnico Continuo",
      description:
        "Nuestro equipo está disponible para ayudarte con cualquier ajuste o pregunta sobre tu asistente.",
      features: [
        "Asistencia técnica personalizada",
        "Actualizaciones y mejoras incluidas",
        "Ajustes según tus necesidades",
      ],
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Ofrecemos una solución completa para que nunca pierdas una llamada importante.
            Todo automatizado, profesional y listo para usar desde el primer día.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tipos de Instalación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {assistantTypes.map((assistant, index) => (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-300"
                data-testid={`card-asistente-${index}`}
              >
                <div className="text-5xl mb-4">{assistant.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{assistant.title}</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {assistant.description}
                </p>
                <ul className="space-y-3">
                  {assistant.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-whatsapp flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Características Incluidas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-300"
                data-testid={`card-servicio-${index}`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-whatsapp flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cómo se Ve en Práctica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <img
                src={callScreen}
                alt="Interfaz de llamada entrante"
                className="rounded-lg shadow-lg max-w-sm mx-auto"
                data-testid="img-call-screen"
              />
              <p className="text-center mt-4 text-muted-foreground">
                Cuando estás ocupado, el asistente responde automáticamente
              </p>
            </div>
            <div>
              <img
                src={whatsappMockup}
                alt="Resumen en WhatsApp"
                className="rounded-lg shadow-lg max-w-sm mx-auto"
                data-testid="img-whatsapp-mockup"
              />
              <p className="text-center mt-4 text-muted-foreground">
                Recibes un resumen completo por WhatsApp al instante
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Empezar?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Solicita la instalación de tu asistente personal y empieza a capturar cada oportunidad
          </p>
          <Link href="/contacto">
            <Button
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-lg px-8"
              data-testid="button-solicitar-instalacion"
            >
              Solicitar Instalación
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
