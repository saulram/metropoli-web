import { FormField } from "./form";
import { Translations } from "@/i18n/translations";

export const getFormFields = (messages: Translations): FormField[] => {
  // Verificación de seguridad
  if (!messages.form || !messages.form.fields) {
    return [];
  }

  return [
  {
    id: 'name',
    label: messages.form.fields.name.label,
    type: 'text',
    placeholder: messages.form.fields.name.placeholder,
    required: true,
    gridCols: 2
  },
  {
    id: 'email',
    label: messages.form.fields.email.label,
    type: 'email',
    placeholder: messages.form.fields.email.placeholder,
    required: true,
    gridCols: 2
  },
  {
    id: 'phone',
    label: messages.form.fields.phone.label,
    type: 'tel',
    placeholder: messages.form.fields.phone.placeholder,
    required: true,
    gridCols: 2
  },
  {
    id: 'product',
    label: messages.form.fields.product.label,
    type: 'multiselect',
    placeholder: messages.form.fields.product.placeholder,
    required: true,
    options: [
      { value: 'admin-integral', label: messages.form.fields.product.options.adminIntegral },
      { value: 'autos', label: messages.form.fields.product.options.autos },
      { value: 'autos-clasicos', label: messages.form.fields.product.options.autosClasicos },
      { value: 'aviacion', label: messages.form.fields.product.options.aviacion },
      { value: 'beneficios-flexibles', label: messages.form.fields.product.options.beneficiosFlexibles },
      { value: 'beneficios-colaboradores', label: messages.form.fields.product.options.beneficiosColaboradores },
      { value: 'carga', label: messages.form.fields.product.options.carga },
      { value: 'construccion', label: messages.form.fields.product.options.construccion },
      { value: 'fianzas', label: messages.form.fields.product.options.fianzas },
      { value: 'gastos-medicos', label: messages.form.fields.product.options.gastosMedicos },
      { value: 'inmuebles', label: messages.form.fields.product.options.inmuebles },
      { value: 'lineas-financieras', label: messages.form.fields.product.options.lineasFinancieras },
      { value: 'reaseguro', label: messages.form.fields.product.options.reaseguro },
      { value: 'responsabilidad-civil', label: messages.form.fields.product.options.responsabilidadCivil },
      { value: 'seguros-masivos', label: messages.form.fields.product.options.segurosMasivos },
      { value: 'transporte-mercancias', label: messages.form.fields.product.options.transporteMercancias },
      { value: 'vida-ahorro', label: messages.form.fields.product.options.vidaAhorro },
      { value: 'otro', label: messages.form.fields.product.options.otro }
    ],
    gridCols: 2
  },
  {
    id: 'contactPreference',
    label: messages.form.fields.contactPreference.label,
    type: 'select',
    placeholder: messages.form.fields.contactPreference.placeholder,
    options: [
      { value: 'email', label: messages.form.fields.contactPreference.options.email },
      { value: 'phone', label: messages.form.fields.contactPreference.options.phone },
      { value: 'whatsapp', label: messages.form.fields.contactPreference.options.whatsapp }
    ],
  },
  {
    id: 'company',
    label: messages.form.fields.company.label,
    type: 'text',
    required: true,
    placeholder: messages.form.fields.company.placeholder,
    gridCols: 3
  },
  {
    id: 'position',
    label: messages.form.fields.position.label,
    type: 'text',
    required: true,
    placeholder: messages.form.fields.position.placeholder,
    gridCols: 3
  },
  {
    id: 'industry',
    label: messages.form.fields.industry.label,
    type: 'text',
    placeholder: messages.form.fields.industry.placeholder,
    gridCols: 3
  },
  {
    id: 'collaborators',
    label: messages.form.fields.collaborators.label,
    type: 'select',
    required: true,
    placeholder: messages.form.fields.collaborators.placeholder,
    options: [
      { value: '0-50', label: messages.form.fields.collaborators.options.range1 },
      { value: '51-99', label: messages.form.fields.collaborators.options.range2 },
      { value: '100-250', label: messages.form.fields.collaborators.options.range3 },
      { value: '251-500', label: messages.form.fields.collaborators.options.range4 },
      { value: '501-1000', label: messages.form.fields.collaborators.options.range5 },
      { value: '1001+', label: messages.form.fields.collaborators.options.range6 }
    ]
  },
  {
    id: 'message',
    label: messages.form.fields.message.label,
    required: true,
    type: 'textarea',
    placeholder: messages.form.fields.message.placeholder
  }
];
};

// Mantener la exportación original para compatibilidad
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
    label: 'Empresa *',
    required: true,
    type: 'text',
    placeholder: 'Empresa',
    gridCols: 3
  },
  {
    id: 'position',
    label: 'Puesto *',
    required: true,
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
    label: 'Número de colaboradores *',
    required: true,
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
    label: 'Cuéntanos detalladamente cómo te podemos ayudar *',
    required: true,
    type: 'textarea',
    placeholder: 'Escribe tu mensaje'
  }
];