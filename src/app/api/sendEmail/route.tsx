import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

// Interfaces for TypeScript
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
  estado?: string;
  company?: string;
  position?: string;
  industry?: string;
  collaborators?: string;
  message: string;
}

interface HubSpotProperties {
  email?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  company?: string;
  jobtitle?: string;
  city?: string;
  hs_lead_status?: string;
  lifecyclestage?: string;
  como_prefieres_que_te_contactemos_?: string;
  que_producto_te_interesa_?: string;
  producto__danos_?: string;
  producto__fianzas_?: string;
  producto__accidentes_personales_?: string;
  estado_de_la_republica?: string;
  cargo?: string;
  numero_de_colaboradores?: string;
  industria_dropdown?: string;
  message?: string;
}

// Function to create/update contact in HubSpot
async function createOrUpdateHubSpotContact(contactData: ContactData) {
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
  
  if (!hubspotToken) {
    throw new Error('HubSpot access token not configured');
  }

  // Format products as a string with semicolons for multi-select fields
  const formatProducts = (products: string | string[]) => {
    if (Array.isArray(products)) {
      // For multi-select fields in HubSpot, use semicolons
      return products.join(';');
    }
    return products || '';
  };

  const hubspotProperties: HubSpotProperties = {
    email: contactData.email,
    firstname: contactData.name,
    lastname: contactData.lastName || '',
    phone: contactData.phone,
    company: contactData.company || '',
    como_prefieres_que_te_contactemos_: contactData.contactPreference || '',
    que_producto_te_interesa_: formatProducts(contactData.product),
    producto__danos_: formatProducts(contactData.danios || ''),
    producto__fianzas_: formatProducts(contactData.finanzas || ''),
    producto__accidentes_personales_: formatProducts(contactData.accidentesPersonales || ''),
    estado_de_la_republica: contactData.estado || '',
    cargo: contactData.position || '',
    numero_de_colaboradores: contactData.collaborators || '',
    industria_dropdown: contactData.industry || '',
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
      // If the contact already exists, try updating it
      if (response.status === 409) {
        return await updateHubSpotContact(contactData.email, hubspotProperties);
      }
      throw new Error(`HubSpot API error: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return the complete object with the ID
  } catch (error) {
    console.error('Error creating HubSpot contact:', error);
    throw error;
  }
}

// Function to update an existing contact
async function updateHubSpotContact(email: string, properties: HubSpotProperties) {
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;

  try {
    console.log('Attempting to update contact with properties:', JSON.stringify(properties, null, 2));
    
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
      const errorData = await response.json();
      console.error('HubSpot update error details:', JSON.stringify(errorData, null, 2));
      throw new Error(`HubSpot update error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating HubSpot contact:', error);
    throw error;
  }
}

async function addContactToHubSpotList(contactId: string) {
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
  const listId = process.env.HUBSPOT_LIST_ID;

  if (!listId) {
    throw new Error('HubSpot list ID not configured');
  }

  try {
    // The payload must be a simple array of strings (IDs)
    const payload = [String(contactId)];
    const response = await fetch(`https://api.hubapi.com/crm/v3/lists/${listId}/memberships/add`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${hubspotToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('HubSpot API response:', errorData);
      throw new Error(`HubSpot list error: ${response.status} - ${JSON.stringify(errorData)}`);
    }
    console.log('Contact added to HubSpot list successfully');
    return await response.json();
  } catch (error) {
    console.error('Error adding contact to HubSpot list:', error);
    throw error;
  }
}

// In the POST handler, update the HubSpot part:
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
    estado,
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

  // Variables for tracking results
  let hubspotSuccess = false;
  let hubspotError: string | null = null;

  // 1. Try to create/update contact in HubSpot
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
      estado,
      company,
      position,
      industry,
      collaborators,
      message
    };

    console.log('Creating/updating HubSpot contact...');
    const contactResponse = await createOrUpdateHubSpotContact(contactData);
    const contactId = contactResponse.id;
    
    console.log('Adding contact to HubSpot list with ID:', contactId);
    await addContactToHubSpotList(contactId);
    
    hubspotSuccess = true;
    console.log('HubSpot integration successful');
  } catch (hubspotErr) {
    hubspotError = hubspotErr instanceof Error ? hubspotErr.message : 'Unknown HubSpot error';
    console.error('HubSpot integration failed:', hubspotError);
    // Continue with email sending even if HubSpot fails
  }

  // 2. Send email (always, regardless of HubSpot result)
  try {
    console.log('Sending email...');
    const { data, error } = await resend.emails.send({
      from: 'Metropoli <noreply@grupometropoli.com.mx>',
      to: ['noreply@fluss.mx'],
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
        estado,
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

    // Successful response with information from both services
    return Response.json({
      success: true,
      email: { success: true, data },
      hubspot: {
        success: hubspotSuccess,
        error: hubspotError
      }
    }, { status: 401 });
    
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
