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
              <h2 className="text-2xl font-bold mb-4">Términos y Condiciones del Servicio</h2>
              <p className="text-muted-foreground leading-relaxed">
                El servicio "Asistente-Urgencias Personal" permite que un asistente virtual atienda llamadas en nombre del autónomo cuando este no pueda contestar.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Qué Incluye el Servicio</h2>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Atención automática de llamadas configuradas por el autónomo.</li>
                <li>Recogida de datos básicos del cliente que llama.</li>
                <li>Envío automático de la información por WhatsApp al autónomo.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Responsabilidades</h2>
              <p className="text-muted-foreground leading-relaxed">
                El titular no asume responsabilidad sobre la veracidad de la información proporcionada por quienes llaman ni de las decisiones posteriores del autónomo.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Limitaciones</h2>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Este servicio no sustituye la obligación del autónomo de responder a sus clientes cuando sea posible.</li>
                <li>El asistente no realiza diagnósticos ni presta servicios profesionales; solo recoge información.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Precio y Pagos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Las tarifas y condiciones económicas se acordarán individualmente con cada autónomo.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Cancelación</h2>
              <p className="text-muted-foreground leading-relaxed">
                El usuario puede solicitar la baja del servicio en cualquier momento por WhatsApp o email.
              </p>
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
