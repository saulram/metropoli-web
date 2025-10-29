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
    required: true,
    placeholder: messages.form.fields.contactPreference.placeholder,
    options: [
      { value: 'Correo electrónico', label: messages.form.fields.contactPreference.options.correoElectronico },
      { value: 'Llamada telefónica', label: messages.form.fields.contactPreference.options.llamadaTelefonica },
      { value: 'WhatsApp', label: messages.form.fields.contactPreference.options.whatsappOption }
    ],
    gridCols: 1
  },
  {
    id: 'product',
    label: messages.form.fields.product.label,
    type: 'select',
    placeholder: messages.form.fields.product.placeholder,
    required: true,
    options: [
      { value: 'Daños', label: messages.form.fields.product.options.danios },
      { value: 'Fianzas', label: messages.form.fields.product.options.fianzas },
      { value: 'Gastos médicos', label: messages.form.fields.product.options.gastosMedicos },
      { value: 'Accidentes Personales', label: messages.form.fields.product.options.accidentesPersonales },
      { value: 'Vida y Ahorro', label: messages.form.fields.product.options.vidaAhorro },
      { value: 'Autos, camiones y/o flotillas', label: messages.form.fields.product.options.autos },
      { value: 'Otro', label: messages.form.fields.product.options.otro },
    ],
    gridCols: 1
  },
  {
    id: 'danios',
    label: messages.form.fields.danios.label,
    type: 'select',
    placeholder: messages.form.fields.danios.placeholder,
    required: true,
    options: [
      { value: 'Múltiple empresarial (Inmuebles — Edificios)', label: messages.form.fields.product.options.multipleEmpresarial },
      { value: 'Obra Civil', label: messages.form.fields.product.options.obraCivil },
      { value: 'Responsabilidad Civil', label: messages.form.fields.product.options.responsabilidadCivil },
      { value: '(E&O) Responsabilidad Civil Profesional', label: messages.form.fields.product.options.responsabilidadCivilProfesional },
      { value: '(D&O) Responsabilidad Civil para Directivos y Administradores', label: messages.form.fields.product.options.dyoResponsabilidadCivilDirectivos },
      { value: 'Transporte de mercancía', label: messages.form.fields.product.options.transporteMercancia },
      { value: 'Equipo de contratistas', label: messages.form.fields.product.options.equipoContratistas },
      { value: 'Ciberseguridad / Crimen', label: messages.form.fields.product.options.ciberseguridadCrime },
      { value: 'Crédito', label: messages.form.fields.product.options.credito },
      { value: 'Aeronaves y embarcaciones', label: messages.form.fields.product.options.aeronavesEmbarcaciones },
      { value: 'Obras de arte y coleccionistas', label: messages.form.fields.product.options.obrasArteColeccionistas },
      { value: 'Hole in One', label: messages.form.fields.product.options.holeInOne },
      { value: 'Otros', label: messages.form.fields.product.options.otros },
    ],
    gridCols: 1
  },
  {
    id: 'accidentes-personales',
    label: messages.form.fields.accidentesPersonales.label,
    type: 'select',
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
    type: 'select',
    placeholder: messages.form.fields.finanzas.placeholder,
    required: true,
    options: [
      { value: 'Fidelidad', label: messages.form.fields.product.options.fidelidad },
      { value: 'Judiciales', label: messages.form.fields.product.options.judiciales },
      { value: 'Administrativas', label: messages.form.fields.product.options.administrativas },
      { value: 'Crédito', label: messages.form.fields.product.options.credito },
      { value: 'Arrendamiento', label: messages.form.fields.product.options.arrendamiento },
      { value: 'Programa de Proveeduría', label: messages.form.fields.product.options.programaProveduria },
    ],
    gridCols: 1
  },
  {
    id: 'estado',
    label: messages.form.fields.estado.label,
    type: 'select',
    required: true,
    placeholder: messages.form.fields.estado.placeholder,
    options: [
      { value: 'Aguascalientes', label: 'Aguascalientes' },
      { value: 'Baja California', label: 'Baja California' },
      { value: 'Baja California Sur', label: 'Baja California Sur' },
      { value: 'Campeche', label: 'Campeche' },
      { value: 'Chiapas', label: 'Chiapas' },
      { value: 'Chihuahua', label: 'Chihuahua' },
      { value: 'Ciudad de México', label: 'Ciudad de México' },
      { value: 'Coahuila', label: 'Coahuila' },
      { value: 'Colima', label: 'Colima' },
      { value: 'Durango', label: 'Durango' },
      { value: 'Estado de México', label: 'Estado de México' },
      { value: 'Guanajuato', label: 'Guanajuato' },
      { value: 'Guerrero', label: 'Guerrero' },
      { value: 'Hidalgo', label: 'Hidalgo' },
      { value: 'Jalisco', label: 'Jalisco' },
      { value: 'Michoacán', label: 'Michoacán' },
      { value: 'Morelos', label: 'Morelos' },
      { value: 'Nayarit', label: 'Nayarit' },
      { value: 'Nuevo León', label: 'Nuevo León' },
      { value: 'Oaxaca', label: 'Oaxaca' },
      { value: 'Puebla', label: 'Puebla' },
      { value: 'Querétaro', label: 'Querétaro' },
      { value: 'Quintana Roo', label: 'Quintana Roo' },
      { value: 'San Luis Potosí', label: 'San Luis Potosí' },
      { value: 'Sinaloa', label: 'Sinaloa' },
      { value: 'Sonora', label: 'Sonora' },
      { value: 'Tabasco', label: 'Tabasco' },
      { value: 'Tamaulipas', label: 'Tamaulipas' },
      { value: 'Tlaxcala', label: 'Tlaxcala' },
      { value: 'Veracruz', label: 'Veracruz' },
      { value: 'Yucatán', label: 'Yucatán' },
      { value: 'Zacatecas', label: 'Zacatecas' }
    ],
    gridCols: 2
  },
  {
    id: 'position',
    label: messages.form.fields.position.label,
    type: 'select',
    required: true,
    placeholder: messages.form.fields.position.placeholder,
    options: [
      { value: 'CEO / Presidente', label: messages.form.fields.position.options.ceoPresidente },
      { value: 'Director', label: messages.form.fields.position.options.director },
      { value: 'Gerente', label: messages.form.fields.position.options.gerente },
      { value: 'Operativo', label: messages.form.fields.position.options.operativo }
    ],
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
      { value: '0-50', label: messages.form.fields.collaborators.options.range1New },
      { value: '51-99', label: messages.form.fields.collaborators.options.range2New },
      { value: '100-250', label: messages.form.fields.collaborators.options.range3New },
      { value: '251-500', label: messages.form.fields.collaborators.options.range4New },
      { value: '501-1000', label: messages.form.fields.collaborators.options.range5New },
      { value: '1001 o más', label: messages.form.fields.collaborators.options.range6New }
    ],
    gridCols: 2
  },
  {
    id: 'industry',
    required: true,
    label: messages.form.fields.industry.label,
    type: 'select',
    placeholder: messages.form.fields.industry.placeholder,
    options: [
      { value: 'Agroindustria', label: messages.form.fields.industry.options.agroindustria },
      { value: 'Comercio', label: messages.form.fields.industry.options.comercio },
      { value: 'Construcción', label: messages.form.fields.industry.options.construccion },
      { value: 'Educación', label: messages.form.fields.industry.options.educacion },
      { value: 'Energía, Oil & Gas y Minería', label: messages.form.fields.industry.options.energiaOilGasMineria },
      { value: 'Gobierno y Organismos Públicos', label: messages.form.fields.industry.options.gobiernoOrganismosPublicos },
      { value: 'Inmobiliaria', label: messages.form.fields.industry.options.inmobiliaria },
      { value: 'Manufactureras', label: messages.form.fields.industry.options.manufactureras },
      { value: 'Otros Servicios', label: messages.form.fields.industry.options.otrosServicios },
      { value: 'Recreación', label: messages.form.fields.industry.options.recreacion },
      { value: 'Salud', label: messages.form.fields.industry.options.salud },
      { value: 'Servicios Financieros', label: messages.form.fields.industry.options.serviciosFinancieros },
      { value: 'Servicios Profesionales', label: messages.form.fields.industry.options.serviciosProfesionales },
      { value: 'Tecnología', label: messages.form.fields.industry.options.tecnologia },
      { value: 'Transporte', label: messages.form.fields.industry.options.transporte },
      { value: 'Alimentos y Bebidas', label: messages.form.fields.industry.options.alimentosYBebidas }
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
    type: 'select',
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
    required: true,
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
    required: true,
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