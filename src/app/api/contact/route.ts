import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, message } = body;

    // Validación estricta en servidor
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Por favor ingresa un nombre válido (mínimo 2 caracteres)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Por favor proporciona un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Por favor describe brevemente tu necesidad (mínimo 10 caracteres)." },
        { status: 400 }
      );
    }

    // Registro estructurado listo para conectar Resend, SendGrid o base de datos
    console.log("[SuperSoft Contact Lead]", {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || "No especificada",
      projectType: projectType || "No especificado",
      message: message.trim(),
    });

    return NextResponse.json({
      success: true,
      message: "Tu solicitud ha sido recibida con éxito. El equipo de ingeniería de SuperSoft se pondrá en contacto contigo a la brevedad.",
    });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "Hubo un error al procesar tu solicitud. Por favor intenta de nuevo o escríbenos directamente a contacto@supersoft.com.bo" },
      { status: 500 }
    );
  }
}
