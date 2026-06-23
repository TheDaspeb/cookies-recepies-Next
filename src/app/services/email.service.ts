import nodemailer from "nodemailer";

type WelcomeEmailData = {
  name: string;
  email: string;
};

function getEmailConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;

  if (!host || !from) {
    return null;
  }

  return {
    host,
    port,
    from,
    auth: user && pass ? { user, pass } : undefined,
    secure: port === 465,
  };
}

export const emailService = {
  async sendWelcomeEmail({ name, email }: WelcomeEmailData) {
    const config = getEmailConfig();

    if (!config) {
      console.warn(
        "Welcome email skipped: configure SMTP_HOST and SMTP_FROM/SMTP_USER."
      );
      return { sent: false };
    }

    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
    });

    await transporter.sendMail({
      from: config.from,
      to: email,
      subject: "Bienvenido a Cooking Now",
      text: `Hola ${name}, bienvenido a Cooking Now. Ya puedes descubrir recetas deliciosas y guardar tus favoritas.`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #3f2b20; line-height: 1.6;">
          <h1 style="color: #6f4e37;">Bienvenido, ${name}</h1>
          <p>Gracias por registrarte en <strong>Cooking Now</strong>.</p>
          <p>Ya puedes descubrir recetas deliciosas, preparar cenas memorables y guardar tus favoritas para volver a ellas cuando quieras.</p>
          <p style="color: #765744;">Que tu próxima cena sepa increíble.</p>
        </div>
      `,
    });

    return { sent: true };
  },
};
