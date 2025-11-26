import { Layout } from "@/components/layout";

export default function AvisoLegal() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Aviso Legal
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Información legal sobre Asistente-Urgencias Personal
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-foreground">
            <div>
              <h2 className="text-2xl font-bold mb-4">Titular del Sitio</h2>
              <p className="text-muted-foreground leading-relaxed">
                El presente sitio web y el servicio "Asistente-Urgencias Personal" pertenece a Juan Carlos Naranjo Espinosa, con email de contacto: jcne69@gmail.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Aceptación de Términos</h2>
              <p className="text-muted-foreground leading-relaxed">
                El acceso y uso de esta web implica la aceptación de los términos descritos en este documento. El titular no se hace responsable del mal uso de la información ofrecida ni de las decisiones tomadas por terceros basadas en dicha información.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Descripción del Servicio</h2>
              <p className="text-muted-foreground leading-relaxed">
                Este servicio tiene como finalidad ofrecer un asistente virtual que atiende llamadas de emergencia en nombre del autónomo y le envía un resumen por WhatsApp. El titular no es responsable del resultado final de los trabajos realizados por el autónomo ni de la comunicación posterior entre las partes.
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
