import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

export async function POST(req: Request) {
  const {
    name,
    email,
    phone,
    product,
    contactPreference,
    company,
    position,
    industry,
    collaborators,
    message
  } = await req.json();

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return Response.json({ error: "Resend API key must be defined" }, { status: 500 });
  }

  const resend = new Resend(resendApiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Metropoli <noreply@grupometropoli.com.mx>', // Replace with your verified Resend domain
      to: ['noreply@fluss.mx'], // Your receiving email
      subject: 'Envio de solicitud Metrópoli',
      react: EmailTemplate({
        name,
        email,
        phone,
        product,
        contactPreference,
        company,
        position,
        industry,
        collaborators,
        message
      }),
    });

    if (error) {
      console.error('Resend API Error:', error);
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ success: true, data });
  } catch (exception: Error | unknown) {
    console.error('Exception sending email:', exception);
    const errorMessage = exception instanceof Error ? exception.message : 'An unknown error occurred';
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}
