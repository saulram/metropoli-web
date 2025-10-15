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
    id: 'lastName',
    label: messages.form.fields.lastName.label,
    type: 'text',
    placeholder: messages.form.fields.lastName.placeholder,
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
    id: 'email',
    label: messages.form.fields.email.label,
    type: 'email',
    placeholder: messages.form.fields.email.placeholder,
    required: true,
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
    gridCols: 1
  },
  {
    id: 'product',
    label: messages.form.fields.product.label,
    type: 'multiselect',
    placeholder: messages.form.fields.product.placeholder,
    required: true,
    options: [
      { value: 'danios', label: messages.form.fields.product.options.danios },
      { value: 'finanzas', label: messages.form.fields.product.options.finanzas },
      { value: 'gastos-medicos-mayores', label: messages.form.fields.product.options.gastosMedicosMayores },
      { value: 'accidentes-personales', label: messages.form.fields.product.options.accidentesPersonales },
      { value: 'vida', label: messages.form.fields.product.options.vida },
      { value: 'autos-tractos', label: messages.form.fields.product.options.autosTractos },
      { value: 'otro', label: messages.form.fields.product.options.otro }
    ],
    gridCols: 1
  },
  {
    id: 'danios',
    label: messages.form.fields.danios.label,
    type: 'multiselect',
    placeholder: messages.form.fields.danios.placeholder,
    required: true,
    options: [
      { value: 'obra-civil', label: messages.form.fields.product.options.obraCivil },
      { value: 'responsabilidad-civil', label: messages.form.fields.product.options.responsabilidadCivil },
      { value: 'EYQ-Responsabilidad-Civil-Profesional', label: messages.form.fields.product.options.responsabilidadCivilProfesional },
      { value: 'DyO-Responsabilidad-Civil-para-Directivos-y-Administradores', label: messages.form.fields.product.options.dyoResponsabilidadCivilDirectivos },
      { value: 'Transporte-de-mercancia', label: messages.form.fields.product.options.transporteMercancia },
      { value: 'Equipo-de-contratistas', label: messages.form.fields.product.options.equipoContratistas },
      { value: 'Ciberseguridad-Crime', label: messages.form.fields.product.options.ciberseguridadCrime },
      { value: 'Credito', label: messages.form.fields.product.options.credito },
      { value: 'Aeronaves-y-embarcaciones', label: messages.form.fields.product.options.aeronavesEmbarcaciones },
      { value: 'Obras-de-arte-y-coleccionistas', label: messages.form.fields.product.options.obrasArteColeccionistas },
      { value: 'Hole-in-One', label: messages.form.fields.product.options.holeInOne },
      { value: 'otros', label: messages.form.fields.product.options.otros },
    ],
    gridCols: 1
  },
  {
    id: 'accidentes-personales',
    label: messages.form.fields.accidentesPersonales.label,
    type: 'multiselect',
    placeholder: messages.form.fields.accidentesPersonales.placeholder,
    required: true,
    options: [
      { value: 'Viaje', label: messages.form.fields.product.options.viaje },
      { value: 'Básico', label: messages.form.fields.product.options.basico },
      { value: 'Escolar', label: messages.form.fields.product.options.escolar },
    ],
    gridCols: 1
  },
  {
    id: 'finanzas',
    label: messages.form.fields.finanzas.label,
    type: 'multiselect',
    placeholder: messages.form.fields.finanzas.placeholder,
    required: true,
    options: [
      { value: 'Fidelidad', label: messages.form.fields.product.options.fidelidad },
      { value: 'Judiciales', label: messages.form.fields.product.options.judiciales },
      { value: 'Administrativas', label: messages.form.fields.product.options.administrativas },
      { value: 'Credito', label: messages.form.fields.product.options.credito },
      { value: 'Arrendamiento', label: messages.form.fields.product.options.arrendamiento },
      { value: 'Programa-de-Proveeduría', label: messages.form.fields.product.options.programaProveduria },
    ],
    gridCols: 1
  },
  {
    id: 'ubication',
    label: messages.form.fields.ubication.label,
    type: 'text',
    required: true,
    placeholder: messages.form.fields.ubication.placeholder,
    gridCols: 2
  },
  {
    id: 'position',
    label: messages.form.fields.position.label,
    type: 'text',
    required: true,
    placeholder: messages.form.fields.position.placeholder,
    gridCols: 2
  },
  {
    id: 'company',
    label: messages.form.fields.company.label,
    type: 'text',
    required: true,
    placeholder: messages.form.fields.company.placeholder,
    gridCols: 1
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
    ],
    gridCols: 2
  },
  {
    id: 'industry',
    label: messages.form.fields.industry.label,
    type: 'select',
    placeholder: messages.form.fields.industry.placeholder,
    options: [
      { value: 'agroindustria', label: messages.form.fields.industry.options.agroindustria },
      { value: 'alimentosBebidas', label: messages.form.fields.industry.options.alimentosBebidas },
      { value: 'comercio', label: messages.form.fields.industry.options.comercio },
      { value: 'construccion', label: messages.form.fields.industry.options.construccion },
      { value: 'educacion', label: messages.form.fields.industry.options.educacion },
      { value: 'energiaOilGasMineria', label: messages.form.fields.industry.options.energiaOilGasMineria },
      { value: 'gobiernoOrganismosPublicos', label: messages.form.fields.industry.options.gobiernoOrganismosPublicos },
      { value: 'inmobiliaria', label: messages.form.fields.industry.options.inmobiliaria },
      { value: 'manufactureras', label: messages.form.fields.industry.options.manufactureras },
      { value: 'otrosServicios', label: messages.form.fields.industry.options.otrosServicios },
      { value: 'recreacionEntretenimiento', label: messages.form.fields.industry.options.recreacionEntretenimiento },
      { value: 'salud', label: messages.form.fields.industry.options.salud },
      { value: 'serviciosFinancieros', label: messages.form.fields.industry.options.serviciosFinancieros },
      { value: 'serviciosProfesionales', label: messages.form.fields.industry.options.serviciosProfesionales },
      { value: 'tecnologia', label: messages.form.fields.industry.options.tecnologia },
      { value: 'transporte', label: messages.form.fields.industry.options.transporte }
    ],
    gridCols: 2
  },
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
    type: 'select',
    placeholder: 'Selecciona tu industria',
    options: [
      { value: 'agroindustria', label: 'Agroindustria' },
      { value: 'alimentosBebidas', label: 'Alimentos y Bebidas' },
      { value: 'comercio', label: 'Comercio' },
      { value: 'construccion', label: 'Construcción' },
      { value: 'educacion', label: 'Educación' },
      { value: 'energiaOilGasMineria', label: 'Energía, Oil & Gas y Minería' },
      { value: 'gobiernoOrganismosPublicos', label: 'Gobierno y Organismos Públicos' },
      { value: 'inmobiliaria', label: 'Inmobiliaria' },
      { value: 'manufactureras', label: 'Manufactureras' },
      { value: 'otrosServicios', label: 'Otros Servicios' },
      { value: 'recreacionEntretenimiento', label: 'Recreación y entretenimiento' },
      { value: 'salud', label: 'Salud' },
      { value: 'serviciosFinancieros', label: 'Servicios Financieros' },
      { value: 'serviciosProfesionales', label: 'Servicios Profesionales' },
      { value: 'tecnologia', label: 'Tecnología' },
      { value: 'transporte', label: 'Transporte' }
    ],
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