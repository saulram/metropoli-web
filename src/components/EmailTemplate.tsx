import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  lastName?: string;
  email: string;
  phone: string;
  product: string | string[];
  contactPreference: string;
  danios?: string | string[];
  accidentesPersonales?: string | string[];
  finanzas?: string | string[];
  ubication?: string;
  company?: string;
  position?: string;
  industry?: string;
  collaborators?: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  lastName,
  email,
  phone,
  product,
  contactPreference,
  danios,
  accidentesPersonales,
  finanzas,
  ubication,
  company,
  position,
  industry,
  collaborators,
  message,
}) => {
  // Función auxiliar para formatear valores que pueden ser arrays
  const formatValue = (value: string | string[] | undefined): string => {
    if (!value) return '';
    if (Array.isArray(value)) return value.join(', ');
    return value;
  };

  return (
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
          {lastName && <p><strong>Last Name:</strong> {lastName}</p>}
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          {ubication && <p><strong>Location:</strong> {ubication}</p>}
          
          <h3>Company Information</h3>
          {company && <p><strong>Company:</strong> {company}</p>}
          {position && <p><strong>Position:</strong> {position}</p>}
          {industry && <p><strong>Industry:</strong> {industry}</p>}
          {collaborators && <p><strong>Number of Employees:</strong> {collaborators}</p>}
          
          <h3>Products of Interest</h3>
          <p><strong>Main Products:</strong> {formatValue(product)}</p>
          {danios && formatValue(danios) && <p><strong>Damages:</strong> {formatValue(danios)}</p>}
          {accidentesPersonales && formatValue(accidentesPersonales) && <p><strong>Personal Accidents:</strong> {formatValue(accidentesPersonales)}</p>}
          {finanzas && formatValue(finanzas) && <p><strong>Finance:</strong> {formatValue(finanzas)}</p>}
          
          <h3>Contact Information</h3>
          <p><strong>Contact Preference:</strong> {contactPreference}</p>
          <p><strong>Message:</strong> {message}</p>
        </div>
        <div className="footer">
          <p>This email was sent from metropoli.</p>
        </div>
      </div>
    </body>
  </html>
  );
}; 