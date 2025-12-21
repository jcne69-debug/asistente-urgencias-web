import { Layout } from "@/components/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "¿Necesito cambiar mi número de teléfono?",
      answer:
        "No, en absoluto. Mantienes tu número actual. Simplemente configuramos un desvío inteligente que solo se activa cuando no puedes atender. Tus clientes siguen llamando al mismo número de siempre.",
    },
    {
      question: "¿Qué ocurre si estoy disponible para contestar?",
      answer:
        "Si contestas la llamada normalmente, el asistente no se activa. El sistema solo interviene cuando detecta que no has respondido después de unos segundos. Tú mantienes el control total.",
    },
    {
      question: "¿Cómo me llega el resumen por WhatsApp?",
      answer:
        "Inmediatamente después de que el asistente finalice la conversación con tu cliente, recibes un mensaje de WhatsApp con todos los datos: nombre del cliente, teléfono, tipo de urgencia, localidad y horario preferido. Todo organizado y listo para que actúes.",
    },
    {
      question: "¿Qué datos recoge exactamente el asistente?",
      answer:
        "El asistente está configurado para recopilar la información esencial: nombre completo del cliente, número de teléfono de contacto, descripción de la urgencia o problema, localidad donde se requiere el servicio, y horario en el que prefiere que le llames. Puedes personalizar qué preguntas hace según tu sector.",
    },
    {
      question: "¿Puedo tener varios asistentes para diferentes servicios?",
      answer:
        "Sí, podemos configurar múltiples asistentes si ofreces diferentes servicios. Por ejemplo, uno para urgencias de fontanería y otro para servicios programados de electricidad. Cada uno puede tener sus propias preguntas y mensajes personalizados.",
    },
    {
      question: "¿Funciona las 24 horas del día?",
      answer:
        "Sí, tu asistente está disponible 24/7, los 365 días del año. Nunca se toma vacaciones ni descansos. Esto significa que capturas oportunidades incluso fuera de tu horario laboral normal.",
    },
    {
      question: "¿Qué pasa si el cliente no entiende que es un asistente automatizado?",
      answer:
        "El asistente se presenta claramente como un sistema automatizado al inicio de la llamada, pero de manera profesional y amigable. Por ejemplo: 'Hola, soy el asistente automático de [Tu Negocio]. En este momento estamos atendiendo otra urgencia, pero puedo tomar tus datos para que te llamemos lo antes posible.' La experiencia es transparente y profesional.",
    },
    {
      question: "¿Necesito conocimientos técnicos para usar el sistema?",
      answer:
        "No, nada en absoluto. Nosotros nos encargamos de toda la configuración inicial. Tú solo recibes los mensajes de WhatsApp y respondes a tus clientes cuando puedas. Es tan simple como revisar tus mensajes.",
    },
    {
      question: "¿Puedo modificar las preguntas que hace el asistente?",
      answer:
        "Sí y No, el asistente Neo es estándar para todos, pero esta la opcion personalizada bajo presupuesto, se pueden personalizar ciertos aspectos según tu negocio y preferencias y si necesitas cambios más adelante, puedes contactarnos.",
    },
    {
      question: "¿Qué sucede si hay un problema técnico?",
      answer:
        "Nuestro equipo de soporte está disponible para resolver cualquier incidencia relacionada con nuestro sistema. Sin embargo, ten en cuenta que dependemos de plataformas externas (telefonía, WhatsApp, servidores de terceros) que pueden experimentar interrupciones ajenas a nuestro control. Hacemos todo lo posible para mantener el servicio activo, pero no podemos garantizar disponibilidad del 100% cuando el problema proviene de estos proveedores externos.",
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Encuentra respuestas a las dudas más comunes sobre nuestro servicio
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-card-border rounded-lg px-6 data-[state=open]:bg-card"
                data-testid={`accordion-item-${index}`}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿No Encuentras lo que Buscas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Si tienes alguna otra pregunta, no dudes en contactarnos. Estamos aquí para ayudarte.
          </p>
        </div>
      </section>
    </Layout>
  );
}
