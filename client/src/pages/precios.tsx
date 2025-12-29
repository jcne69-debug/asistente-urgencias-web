import { useState } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "wouter";
import { CheckCircle2, Info } from "lucide-react";

export default function Precios() {
  const plans = [
    {
      icon: "📱",
      title: "Asistente de Urgencias - Estándar",
      description: "Solución completa con configuración estándar",
      installation: "119,79",
      monthly: "119,79",
      badge: "Recomendado",
    },
    {
      icon: "✨",
      title: "Asistente de Urgencias - Personalizado",
      description: "Completamente adaptado a tu negocio",
      installation: "181,50",
      monthly: "119,79",
      badge: "Premium",
    },
    {
      icon: "💻",
      title: "Asistente de Chat para Webs",
      description: "Widget inteligente para tu sitio web",
      installation: "229,90",
      monthly: "119,79",
      badge: "Nuevo",
    },
  ];

  const commonFeatures = [
    {
      icon: "✓",
      text: "Sin permanencia",
      description: "Cancela cuando quieras sin penalizaciones",
    },
    {
      icon: "✓",
      text: "Configuración incluida",
      description: "Nos encargamos de toda la instalación y configuración inicial",
    },
    {
      icon: "✓",
      text: "Actualizaciones automáticas",
      description: "Mejoras y nuevas funcionalidades sin coste adicional",
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
            Soluciones a medida para autónomos que quieren crecer sin perder clientes
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-300 flex flex-col"
                data-testid={`card-plan-${index}`}
              >
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{plan.icon}</span>
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  <div className="bg-card p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Instalación</p>
                    <p className="text-2xl font-bold text-primary">{plan.installation}€</p>
                    <p className="text-xs text-muted-foreground font-bold">IVA incluido</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                    <div className="flex items-center gap-1 mb-1">
                      <p className="text-sm text-muted-foreground">Mantenimiento Mensual</p>
                      {index < 2 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <button
                              className="text-muted-foreground hover:text-primary transition-colors"
                              data-testid={`button-info-mantenimiento-${index}`}
                            >
                              <Info className="w-4 h-4" />
                            </button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Sobre el coste de mantenimiento</DialogTitle>
                              <DialogDescription className="pt-4 space-y-3">
                                <p>
                                  El precio base de mantenimiento es de <strong>119,79€/mes</strong> e incluye 
                                  un volumen normal de llamadas y mensajes de WhatsApp.
                                </p>
                                <p>
                                  Si tu negocio recibe un volumen muy alto de llamadas, el coste de 
                                  mantenimiento puede variar ligeramente para cubrir los gastos operativos 
                                  adicionales (minutos de voz, mensajes enviados, etc.).
                                </p>
                                <p>
                                  En estos casos, te informaremos con antelacion y acordaremos juntos 
                                  la mejor solucion para tu negocio.
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  La mayoria de nuestros clientes se mantienen dentro del precio base sin 
                                  costes adicionales.
                                </p>
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                    <p className="text-2xl font-bold text-primary">{plan.monthly}€</p>
                    <p className="text-xs text-muted-foreground font-bold">IVA incluido</p>
                  </div>
                </div>

                <Link href="/contacto">
                  <Button
                    size="lg"
                    className="w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold"
                    data-testid={`button-solicitar-${index}`}
                  >
                    Solicitar
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-primary/5 border-2 border-primary/20 mb-12">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Descuento por Múltiples Servicios</h3>
              <p className="text-lg text-foreground">
                Si contratas <span className="font-semibold">2 o más servicios</span>, obtén un{" "}
                <span className="text-primary font-bold">40% de descuento</span> en el mantenimiento mensual de cada uno
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Incluido en Todos los Planes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commonFeatures.map((feature, index) => (
              <div key={index} className="p-6 bg-background rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-whatsapp flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{feature.text}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
