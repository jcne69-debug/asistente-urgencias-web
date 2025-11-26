import { Layout } from "@/components/layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";

export default function Contacto() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    },
    onError: (error: any) => {
      toast({
        title: "Error al enviar",
        description: error.message || "No pudimos enviar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data);
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contacta con Nosotros
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            ¿Listo para instalar tu asistente? Completa el formulario y te contactaremos enseguida
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Envíanos un Mensaje
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Rellena el formulario y nos pondremos en contacto contigo en menos de 24 horas para programar la instalación de tu asistente personal.
              </p>

              <Card className="p-8">
                {isSuccess ? (
                  <div className="text-center py-12" data-testid="success-message">
                    <div className="w-20 h-20 rounded-full bg-whatsapp/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12 text-whatsapp" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">¡Mensaje Enviado!</h3>
                    <p className="text-muted-foreground text-lg">
                      Gracias por contactarnos. Te responderemos muy pronto.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre Completo</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Tu nombre"
                                {...field}
                                data-testid="input-name"
                                disabled={mutation.isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Teléfono</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+34 600 123 456"
                                {...field}
                                data-testid="input-phone"
                                disabled={mutation.isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="tu@email.com"
                                {...field}
                                data-testid="input-email"
                                disabled={mutation.isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensaje</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Cuéntanos sobre tu negocio y tus necesidades..."
                                className="min-h-32"
                                {...field}
                                data-testid="input-message"
                                disabled={mutation.isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold"
                        data-testid="button-enviar"
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          "Enviar Mensaje"
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Información de Contacto
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                También puedes contactarnos directamente a través de estos medios:
              </p>

              <div className="space-y-6">
                <Card className="p-6 hover-elevate transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">+34 900 123 456</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Lunes a Viernes, 9:00 - 18:00
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover-elevate transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">info@asistente-urgencias.es</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Respuesta en menos de 24 horas
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover-elevate transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Ubicación</h3>
                      <p className="text-muted-foreground">Madrid, España</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Servicio disponible en toda España
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
