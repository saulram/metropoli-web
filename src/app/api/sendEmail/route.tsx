import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

// Interfaces para TypeScript
interface ContactData {
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

interface HubSpotProperties {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  company: string;
  jobtitle: string;
  city: string;
  hs_lead_status: string;
  lifecyclestage: string;
  products_of_interest: string;
  contact_preference: string;
  number_of_employees: string;
  industry: string;
  message: string;
}

// Función para crear/actualizar contacto en HubSpot
async function createOrUpdateHubSpotContact(contactData: ContactData) {
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
  
  if (!hubspotToken) {
    throw new Error('HubSpot access token not configured');
  }

  // Formatear productos como string
  const formatProducts = (products: string | string[]) => {
    if (Array.isArray(products)) return products.join(', ');
    return products || '';
  };

  const hubspotProperties = {
    email: contactData.email,
    firstname: contactData.name,
    lastname: contactData.lastName || '',
    phone: contactData.phone,
    company: contactData.company || '',
    jobtitle: contactData.position || '',
    city: contactData.ubication || '',
    hs_lead_status: 'NEW',
    lifecyclestage: 'lead',
    // Campos personalizados (falta crear estos en HubSpot si es necesario)
    products_of_interest: formatProducts(contactData.product),
    contact_preference: contactData.contactPreference || '',
    number_of_employees: contactData.collaborators || '',
    industry: contactData.industry || '',
    message: contactData.message || ''
  };

  try {
    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${hubspotToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: hubspotProperties
      }),
    });

    if (!response.ok) {
      // Si el contacto ya existe, intentar actualizarlo
      if (response.status === 409) {
        console.log('Contact exists, attempting to update...');
        return await updateHubSpotContact(contactData.email, hubspotProperties);
      }
      throw new Error(`HubSpot API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating HubSpot contact:', error);
    throw error;
  }
}

// Función para actualizar contacto existente
async function updateHubSpotContact(email: string, properties: HubSpotProperties) {
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;

  try {
    const response = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${email}?idProperty=email`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${hubspotToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: properties
      }),
    });

    if (!response.ok) {
      throw new Error(`HubSpot update error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating HubSpot contact:', error);
    throw error;
  }
}

// Función para agregar contacto a lista de HubSpot
async function addContactToHubSpotList(email: string) {
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
  const listId = process.env.HUBSPOT_LIST_ID;

  if (!listId) {
    throw new Error('HubSpot list ID not configured');
  }

  try {
    const response = await fetch(`https://api.hubapi.com/contacts/v1/lists/${listId}/add`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${hubspotToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        emails: [email]
      }),
    });

    if (!response.ok) {
      throw new Error(`HubSpot list error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error adding contact to HubSpot list:', error);
    throw error;
  }
}

export async function POST(req: Request) {
  const {
    name,
    lastName,
    email,
    phone,
    product,
    contactPreference,
    danios,
    'accidentes-personales': accidentesPersonales,
    finanzas,
    ubication,
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

  // Variables para tracking de resultados
  let hubspotSuccess = false;
  let hubspotError: string | null = null;

  // 1. Intentar crear/actualizar contacto en HubSpot
  try {
    const contactData = {
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
      message
    };

    console.log('Creating/updating HubSpot contact...');
    await createOrUpdateHubSpotContact(contactData);
    
    console.log('Adding contact to HubSpot list...');
    await addContactToHubSpotList(email);
    
    hubspotSuccess = true;
    console.log('HubSpot integration successful');
  } catch (hubspotErr) {
    hubspotError = hubspotErr instanceof Error ? hubspotErr.message : 'Unknown HubSpot error';
    console.error('HubSpot integration failed:', hubspotError);
    // Continuar con el envío de email aunque HubSpot falle
  }

  // 2. Enviar email (siempre, independientemente del resultado de HubSpot)
  try {
    console.log('Sending email...');
    const { data, error } = await resend.emails.send({
      from: 'Metropoli <noreply@grupometropoli.com.mx>', // Replace with your verified Resend domain
      to: ['noreply@fluss.mx'], // Your receiving email
      subject: 'Envio de solicitud Metrópoli',
      react: EmailTemplate({
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
        message
      }),
    });

    if (error) {
      console.error('Resend API Error:', error);
      return Response.json({ 
        error: error.message,
        hubspot: {
          success: hubspotSuccess,
          error: hubspotError
        }
      }, { status: 400 });
    }

    console.log('Email sent successfully');
    
    // Respuesta exitosa con información de ambos servicios
    return Response.json({ 
      success: true, 
      email: { success: true, data },
      hubspot: {
        success: hubspotSuccess,
        error: hubspotError
      }
    });
    
  } catch (exception: Error | unknown) {
    console.error('Exception sending email:', exception);
    const errorMessage = exception instanceof Error ? exception.message : 'An unknown error occurred';
    
    return Response.json({ 
      error: errorMessage,
      hubspot: {
        success: hubspotSuccess,
        error: hubspotError
      }
    }, { status: 500 });
  }
}
