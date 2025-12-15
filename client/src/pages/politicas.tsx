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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-foreground">
            <div>
              <h2 className="text-2xl font-bold mb-4">Responsable del Tratamiento</h2>
              <p className="text-muted-foreground leading-relaxed">
                Juan Carlos Naranjo Espinosa<br/>
                Email: asistentesurgencias@gmail.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Finalidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Gestionar solicitudes enviadas a través del formulario, atender consultas y preparar la activación del servicio Asistente-Urgencias Personal.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Base Legal</h2>
              <p className="text-muted-foreground leading-relaxed">
                Consentimiento del usuario.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Datos Tratados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nombre, teléfono, email y en algunos casos datos relacionados con la actividad profesional.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Conservación</h2>
              <p className="text-muted-foreground leading-relaxed">
                Los datos se conservarán el tiempo necesario para prestar el servicio o hasta que el usuario solicite su eliminación.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Derechos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición y portabilidad enviando un email a asistentesurgencias@gmail.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Cesiones</h2>
              <p className="text-muted-foreground leading-relaxed">
                No se cederán datos a terceros, salvo obligación legal o prestación del propio servicio (por ejemplo, envío automático de información al WhatsApp del autónomo).
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
