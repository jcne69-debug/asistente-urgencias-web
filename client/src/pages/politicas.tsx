import { Layout } from "@/components/layout";

export default function Politicas() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Política de Privacidad
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Tu privacidad es importante para nosotros
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <div className="space-y-8 text-foreground">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Información que Recopilamos</h2>
              <p className="text-muted-foreground leading-relaxed">
                En Asistente-Urgencias Personal recopilamos únicamente la información necesaria para proporcionar
                nuestro servicio de asistente de voz automatizado. Esto incluye:
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Datos de contacto (nombre, teléfono, email)</li>
                <li>Información sobre tu negocio y sector de actividad</li>
                <li>Datos de las llamadas atendidas por el asistente (nombre del cliente, teléfono, descripción de la urgencia)</li>
                <li>Número de WhatsApp para envío de notificaciones</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Uso de la Información</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos la información recopilada exclusivamente para:
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Configurar y mantener tu asistente de voz personalizado</li>
                <li>Enviar notificaciones de llamadas atendidas a tu WhatsApp</li>
                <li>Proporcionar soporte técnico y mejorar nuestro servicio</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Protección de Datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal
                contra acceso no autorizado, pérdida, destrucción o alteración. Todos los datos se almacenan en
                servidores seguros con cifrado y acceso restringido.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Compartir Información con Terceros</h2>
              <p className="text-muted-foreground leading-relaxed">
                No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto:
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Proveedores de servicios necesarios para operar el sistema (plataforma de voz, WhatsApp Business API)</li>
                <li>Cuando sea requerido por ley o por orden judicial</li>
                <li>Para proteger nuestros derechos legales o la seguridad de nuestros usuarios</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Tus Derechos</h2>
              <p className="text-muted-foreground leading-relaxed">
                De acuerdo con el RGPD (Reglamento General de Protección de Datos), tienes derecho a:
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Acceder a tus datos personales</li>
                <li>Rectificar información incorrecta o incompleta</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Solicitar la portabilidad de tus datos</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Para ejercer estos derechos, contacta con nosotros en info@asistente-urgencias.es
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Retención de Datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conservamos tu información personal mientras mantengas una cuenta activa con nosotros. Los datos de
                llamadas atendidas se conservan durante un período máximo de 12 meses, salvo que solicites su
                eliminación antes o sea necesario conservarlos por obligaciones legales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Cookies y Tecnologías Similares</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies esenciales para el funcionamiento de nuestro sitio web. No utilizamos cookies de
                seguimiento o publicidad sin tu consentimiento explícito.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Cambios en esta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos cualquier cambio
                significativo por email o mediante un aviso destacado en nuestro sitio web.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tus datos personales,
                contáctanos en:
              </p>
              <ul className="list-none mt-3 text-muted-foreground space-y-2">
                <li>Email: info@asistente-urgencias.es</li>
                <li>Teléfono: +34 900 123 456</li>
                <li>Dirección: Madrid, España</li>
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Última actualización: {new Date().toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
