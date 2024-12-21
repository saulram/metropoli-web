import { FormField } from "./form";


export const formFields: FormField[] = [
  {
    id: 'name',
    label: 'Nombre completo *',
    type: 'text',
    placeholder: 'Nombre completo',
    required: true,
    gridCols: 2
  },
  {
    id: 'email',
    label: 'Correo electrónico *',
    type: 'email',
    placeholder: 'Correo electrónico *',
    required: true,
    gridCols: 2
  },
  {
    id: 'phone',
    label: 'Teléfono / WhatsApp *',
    type: 'tel',
    placeholder: 'Teléfono / WhatsApp *',
    required: true,
    gridCols: 2
  },
  {
    id: 'product',
    label: '¿Qué producto te interesa? *',
    type: 'select',
    placeholder: '¿Qué producto te interesa? *',
    required: true,
    options: [
      { value: 'producto1', label: 'Producto 1' },
      { value: 'producto2', label: 'Producto 2' }
    ],
    gridCols: 2
  },
  {
    id: 'contactPreference',
    label: '¿Cómo prefieres que te contactemos?',
    type: 'select',
    placeholder: '¿Cómo prefieres que te contactemos?',
    options: [
      { value: 'email', label: 'Correo electrónico' },
      { value: 'phone', label: 'Teléfono' }
    ],
  },
  {
    id: 'company',
    label: 'Empresa',
    type: 'text',
    placeholder: 'Empresa',
    gridCols: 3
  },
  {
    id: 'position',
    label: 'Puesto',
    type: 'text',
    placeholder: 'Escribe tu puesto',
    gridCols: 3
  },
  {
    id: 'industry',
    label: 'Industria',
    type: 'text',
    placeholder: 'Industria',
    gridCols: 3
  },
  {
    id: 'collaborators',
    label: 'Número de colaboradores',
    type: 'select',
    placeholder: 'Número de colaboradores',
    options: [
      { value: '1-10', label: '1-10' },
      { value: '11-50', label: '11-50' },
      { value: '51-200', label: '51-200' }
    ]
  },
  {
    id: 'message',
    label: 'Cuéntanos detalladamente cómo te podemos ayudar',
    type: 'textarea',
    placeholder: 'Escribe tu mensaje'
  }
];

