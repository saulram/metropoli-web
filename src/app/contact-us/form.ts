export type FormField = {
    id: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
    placeholder: string;
    required?: boolean;
    options?: { value: string; label: string }[];
    gridCols?: number;
  };
  
  export type FormData = {
    name: string;
    email: string;
    phone: string;
    product: string;
    contactPreference: string;
    company: string;
    position: string;
    industry: string;
    collaborators: string;
    message: string;
  };
  