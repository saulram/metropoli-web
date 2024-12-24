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
    type: 'multiselect',
    placeholder: '¿Qué producto te interesa? *',
    required: true,
    options: [
      { value: 'admin-integral', label: 'Administración integral de tus pólizas' },
      { value: 'autos', label: 'Autos, camiones y/o flotillas' },
      { value: 'autos-clasicos', label: 'Autos clásicos o exóticos' },
      { value: 'aviacion', label: 'Aviación, drones, yates' },
      { value: 'beneficios-flexibles', label: 'Beneficios flexibles' },
      { value: 'beneficios-colaboradores', label: 'Beneficios para colaboradores: gastos médicos, vida, accidentes personales, etc.' },
      { value: 'carga', label: 'Carga / Transporte' },
      { value: 'construccion', label: 'Construcción / Obra Civil' },
      { value: 'fianzas', label: 'Fianzas' },
      { value: 'gastos-medicos', label: 'Gastos médicos' },
      { value: 'inmuebles', label: 'Inmuebles / empresarial' },
      { value: 'lineas-financieras', label: 'Líneas financieras: Cyber, D&O, E&O, Instituciones Financieras, Responsabilidad Profesional.' },
      { value: 'reaseguro', label: 'Reaseguro' },
      { value: 'responsabilidad-civil', label: 'Responsabilidad Civil' },
      { value: 'seguros-masivos', label: 'Seguros Masivos' },
      { value: 'transporte-mercancias', label: 'Transporte de Mercancias' },
      { value: 'vida-ahorro', label: 'Vida y Ahorro' },
      { value: 'otro', label: 'Otro' }
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
      { value: 'phone', label: 'Llamada telefónica' },
      { value: 'whatsapp', label: 'WhatsApp' }
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
      { value: '0-50', label: '0 - 50' },
      { value: '51-99', label: '51 - 99' },
      { value: '100-250', label: '100 - 250' },
      { value: '251-500', label: '251 - 500' },
      { value: '501-1000', label: '501 - 1,000' },
      { value: '1001+', label: '1,001 o más' }
    ]
  },
  {
    id: 'message',
    label: 'Cuéntanos detalladamente cómo te podemos ayudar',
    type: 'textarea',
    placeholder: 'Escribe tu mensaje'
  }
];