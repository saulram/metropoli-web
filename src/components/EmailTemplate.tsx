import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  product: string;
  contactPreference: string;
  company?: string;
  position?: string;
  industry?: string;
  collaborators?: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  product,
  contactPreference,
  company,
  position,
  industry,
  collaborators,
  message,
}) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contact Form Submission</title>
      <style>
        {`
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
        `}
      </style>
    </head>
    <body>
      <div className="container">
        <div className="header">
          <h2>New Contact Form Submission</h2>
        </div>
        <div className="content">
          <h3>Contact Details</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Product:</strong> {product}</p>
          <p><strong>Contact Preference:</strong> {contactPreference}</p>
          {company && <p><strong>Company:</strong> {company}</p>}
          {position && <p><strong>Position:</strong> {position}</p>}
          {industry && <p><strong>Industry:</strong> {industry}</p>}
          {collaborators && <p><strong>Collaborators:</strong> {collaborators}</p>}
          <p><strong>Message:</strong> {message}</p>
        </div>
        <div className="footer">
          <p>This email was sent from metropoli.</p>
        </div>
      </div>
    </body>
  </html>
); 