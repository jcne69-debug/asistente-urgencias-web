import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);

      // Enviar email de notificación
      try {
        await resend.emails.send({
          from: "Asistentes Urgencias <onboarding@resend.dev>",
          to: "asistentesurgencias@gmail.com",
          subject: `Nuevo mensaje de contacto de ${validatedData.name}`,
          html: `
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> ${validatedData.name}</p>
            <p><strong>Teléfono:</strong> ${validatedData.phone}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Tipo de actividad:</strong> ${validatedData.activityType}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${validatedData.message}</p>
          `,
        });
      } catch (emailError) {
        console.error("Error al enviar email:", emailError);
      }

      res.json({ success: true, message });
    } catch (error: any) {
      if (error.name === "ZodError") {
        res.status(400).json({ 
          success: false, 
          error: "Datos de formulario inválidos",
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Error al procesar el mensaje" 
        });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ success: true, messages });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Error al obtener los mensajes" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
