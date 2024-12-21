import Mailjet from "node-mailjet";

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

  const mailjetApiKey = process.env.MAILJET_API_KEY;
  const mailjetSecretKey = process.env.MAILJET_SECRET_KEY;

  if (!mailjetApiKey || !mailjetSecretKey) {
    throw new Error("Mailjet API key and secret key must be defined");
  }

  const mailjet = Mailjet.apiConnect(
    mailjetApiKey,
    mailjetSecretKey,
  );
  await mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'hola@quatrodesign.com',
          Name: 'quatrodesign',
        },
        To: [
          {
            Email: 'hola@quatrodesign.com',
            Name: 'quatrodesign',
          },
        ],
        Subject: 'Envio de solicitud Metrópoli',
        HTMLPart: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #1C6EF6;
                color: #ffffff;
                padding: 10px;
                text-align: center;
                border-radius: 8px 8px 0 0;
            }
            .content {
                padding: 20px;
            }
            .content h3 {
                color: #091934;
            }
            .content p {
                margin: 10px 0;
            }
            .footer {
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #666;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
                <h3>Contact Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Product:</strong> ${product}</p>
                <p><strong>Contact Preference:</strong> ${contactPreference}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Position:</strong> ${position}</p>
                <p><strong>Industry:</strong> ${industry}</p>
                <p><strong>Collaborators:</strong> ${collaborators}</p>
                <p><strong>Message:</strong> ${message}</p>
            </div>
            <div class="footer">
                <p>This email was sent from metropoli.</p>
            </div>
        </div>
    </body>
    </html>
  `,
      },
    ],
  });

  return Response.json({ success: true });
}
