export type FormField = {
    id: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'multiselect';
    placeholder: string;
    required?: boolean;
    options?: { value: string; label: string }[];
    gridCols?: number;
  };
  
  export type FormData = {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    product: string | string[];
    contactPreference: string;
    danios: string | string[];
    'accidentes-personales': string | string[];
    finanzas: string | string[];
    ubication: string;
    company: string;
    position: string;
    industry: string;
    collaborators: string;
    message: string;
  };
  