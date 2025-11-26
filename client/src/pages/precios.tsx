import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function Precios() {
  const features = [
    {
      icon: "📱",
      text: "Asistente personal de voz 24/7",
    },
    {
      icon: "💬",
      text: "Notificaciones por WhatsApp",
    },
    {
      icon: "⚙️",
      text: "Configuración del asistente personalizado",
    },
    {
      icon: "🎧",
      text: "Soporte técnico continuo",
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Precios Transparentes
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Un único plan completo diseñado para autónomos que quieren crecer sin perder clientes
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 border-2 border-whatsapp hover-elevate transition-all duration-300" data-testid="card-plan-autonomo">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Plan Autónomo
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Todo lo que necesitas para nunca perder una llamada importante
              </p>
              <div className="inline-block bg-primary/10 px-6 py-3 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Precio</p>
                <p className="text-4xl font-bold text-primary">Consultar</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <h3 className="font-semibold text-xl">Incluye:</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-lg">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-card p-6 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-whatsapp" />
                  Sin permanencia
                </h4>
                <p className="text-muted-foreground">
                  Cancela cuando quieras sin penalizaciones
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-whatsapp" />
                  Configuración incluida
                </h4>
                <p className="text-muted-foreground">
                  Nos encargamos de toda la instalación y configuración inicial
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-whatsapp" />
                  Actualizaciones automáticas
                </h4>
                <p className="text-muted-foreground">
                  Mejoras y nuevas funcionalidades sin coste adicional
                </p>
              </div>
            </div>

            <Link href="/contacto">
              <Button
                size="lg"
                className="w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-lg"
                data-testid="button-pedir-presupuesto"
              >
                Pedir Presupuesto
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Tienes Preguntas sobre los Precios?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Consulta nuestras preguntas frecuentes o contáctanos directamente para obtener un presupuesto personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold"
                data-testid="button-ver-faq"
              >
                Ver Preguntas Frecuentes
              </Button>
            </Link>
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 font-semibold"
                data-testid="button-contactar"
              >
                Contactar Ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
