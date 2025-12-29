import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Servicios from "@/pages/servicios";
import Precios from "@/pages/precios";
import FAQ from "@/pages/faq";
import Contacto from "@/pages/contacto";
import Politicas from "@/pages/politicas";
import Terminos from "@/pages/terminos";
import AvisoLegal from "@/pages/aviso-legal";
import Fontaneros from "@/pages/fontaneros";
import Electricistas from "@/pages/electricistas";
import Cerrajeros from "@/pages/cerrajeros";
import Climatizacion from "@/pages/climatizacion";
import Cristaleros from "@/pages/cristaleros";
import Calderas from "@/pages/calderas";
import NotFound from "@/pages/not-found";
import { WhatsAppButton } from "@/components/whatsapp-button";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicios" component={Servicios} />
      <Route path="/precios" component={Precios} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/politicas" component={Politicas} />
      <Route path="/terminos" component={Terminos} />
      <Route path="/aviso-legal" component={AvisoLegal} />
      <Route path="/fontaneros" component={Fontaneros} />
      <Route path="/electricistas" component={Electricistas} />
      <Route path="/cerrajeros" component={Cerrajeros} />
      <Route path="/climatizacion" component={Climatizacion} />
      <Route path="/cristaleros" component={Cristaleros} />
      <Route path="/calderas" component={Calderas} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
