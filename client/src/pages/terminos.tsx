import { Layout } from "@/components/layout";

export default function Terminos() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Términos y Condiciones
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Lee atentamente nuestros términos de servicio
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <div className="space-y-8 text-foreground">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Aceptación de los Términos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Al contratar el servicio de Asistente-Urgencias Personal, aceptas estos términos y condiciones en su
                totalidad. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro servicio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Descripción del Servicio</h2>
              <p className="text-muted-foreground leading-relaxed">
                Asistente-Urgencias Personal proporciona un servicio de asistente de voz automatizado que:
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Atiende llamadas entrantes cuando no puedes responder personalmente</li>
                <li>Recopila información del cliente mediante conversación automatizada</li>
                <li>Envía resúmenes de las llamadas a tu número de WhatsApp</li>
                <li>Opera 24 horas al día, 7 días a la semana</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Requisitos y Elegibilidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para utilizar nuestro servicio debes:
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Ser mayor de 18 años o actuar en nombre de una empresa legalmente constituida</li>
                <li>Proporcionar información precisa y completa durante el registro</li>
                <li>Mantener la confidencialidad de tus credenciales de acceso</li>
                <li>Disponer de un número de teléfono y WhatsApp activos</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Uso Aceptable</h2>
              <p className="text-muted-foreground leading-relaxed">
                Te comprometes a utilizar el servicio únicamente para fines comerciales legítimos y profesionales.
                Está prohibido:
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Usar el servicio para actividades ilegales o fraudulentas</li>
                <li>Intentar acceder, modificar o interferir con los sistemas del servicio</li>
                <li>Revender o redistribuir el servicio sin autorización expresa</li>
                <li>Utilizar el servicio de manera que pueda dañar, sobrecargar o perjudicar la infraestructura</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Pago y Facturación</h2>
              <p className="text-muted-foreground leading-relaxed">
                Los términos de pago se acuerdan individualmente con cada cliente según el plan contratado:
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Los precios se comunicarán claramente antes de la contratación</li>
                <li>La facturación se realiza mensualmente por adelantado</li>
                <li>Los pagos deben realizarse en las fechas acordadas</li>
                <li>El retraso en el pago puede resultar en la suspensión del servicio</li>
                <li>Los precios pueden modificarse con un aviso previo de 30 días</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Cancelación y Reembolsos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Política de cancelación:
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Puedes cancelar el servicio en cualquier momento con un aviso previo de 15 días</li>
                <li>No se realizan reembolsos por períodos ya facturados</li>
                <li>Tras la cancelación, el servicio permanecerá activo hasta el final del período pagado</li>
                <li>Nos reservamos el derecho de suspender o cancelar cuentas que violen estos términos</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Disponibilidad del Servicio</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos esforzamos por mantener el servicio disponible en todo momento, pero:
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>No garantizamos un tiempo de actividad del 100%</li>
                <li>Puede haber interrupciones por mantenimiento programado (notificado con antelación)</li>
                <li>No somos responsables de interrupciones causadas por terceros o circunstancias fuera de nuestro control</li>
                <li>En caso de problemas técnicos, trabajaremos para resolverlos lo antes posible</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Limitación de Responsabilidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                En la medida permitida por la ley:
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>El servicio se proporciona "tal cual" sin garantías de ningún tipo</li>
                <li>No somos responsables de pérdidas económicas derivadas de llamadas no atendidas o mal gestionadas</li>
                <li>Nuestra responsabilidad máxima se limita al importe pagado por el servicio en los últimos 3 meses</li>
                <li>No garantizamos que el servicio sea ininterrumpido o libre de errores</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Propiedad Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos los derechos de propiedad intelectual del servicio, incluyendo software, diseño, contenido y
                marca, pertenecen a Asistente-Urgencias Personal. No se concede ninguna licencia o derecho más allá
                del uso del servicio según estos términos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Modificaciones de los Términos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios significativos
                se notificarán con al menos 30 días de antelación. El uso continuado del servicio después de las
                modificaciones constituye la aceptación de los nuevos términos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Ley Aplicable y Jurisdicción</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estos términos se rigen por las leyes de España. Cualquier disputa se resolverá en los tribunales
                de Madrid, España.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">12. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para preguntas sobre estos términos y condiciones, contáctanos en:
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
