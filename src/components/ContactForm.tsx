"use client"
import { useState } from 'react';
import { FormInput } from './FormInput';
import { getFormFields } from '../app/contact-us/formFields';
import type { FormData } from '../app/contact-us/form';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useTranslations } from '@/i18n/useTranslations';

const initialFormData: FormData = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    product: [],
    contactPreference: '',
    danios: [],
    'accidentes-personales': [],
    finanzas: [],
    ubication: '',
    company: '',
    position: '',
    industry: '',
    collaborators: '',
    message: ''
};

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
    const router = useRouter();
    const messages = useTranslations();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        
        setFormData(prev => {
            const newData = { ...prev, [id]: value };
            
            // Si se está cambiando el campo 'product', limpiar campos condicionales que ya no aplican
            if (id === 'product') {
                const selectedProducts = getSelectedProducts(value);
                
                if (!selectedProducts.includes('danios')) {
                    newData.danios = [];
                }
                if (!selectedProducts.includes('accidentes-personales')) {
                    newData['accidentes-personales'] = [];
                }
                if (!selectedProducts.includes('finanzas')) {
                    newData.finanzas = [];
                }
            }
            
            return newData;
        });
    };

    // Verificar que las traducciones estén completamente cargadas
    const isTranslationsLoaded = messages.form && 
                                messages.form.fields && 
                                messages.form.fields.name && 
                                messages.contactFormTitle;

    // Si las traducciones no están cargadas, mostrar un estado de carga
    if (!isTranslationsLoaded) {
        return (
            <div className="relative bg-cover bg-center bg-metropoliBg min-h-screen flex items-center justify-center"
                 style={{ backgroundImage: 'url(/waves.png)' }}>
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Cargando...</p>
                </div>
            </div>
        );
    }

    // Generar los campos del formulario solo cuando las traducciones estén cargadas
    const formFields = getFormFields(messages);

    // Función auxiliar para obtener productos seleccionados de forma segura
    const getSelectedProducts = (productValue: string | string[] | unknown): string[] => {
        if (!productValue) return [];
        if (Array.isArray(productValue)) return productValue;
        if (typeof productValue === 'string') return productValue.split(',');
        return [];
    };

    // Función para determinar si un campo condicional debe mostrarse
    const shouldShowConditionalField = (fieldId: string): boolean => {
        const selectedProducts = getSelectedProducts(formData.product);
        
        switch (fieldId) {
            case 'danios':
                return selectedProducts.includes('danios');
            case 'accidentes-personales':
                return selectedProducts.includes('accidentes-personales');
            case 'finanzas':
                return selectedProducts.includes('finanzas');
            default:
                return true;
        }
    };

    // Generar las filas del formulario dinámicamente manteniendo el orden
    const generateFormRows = () => {
        const rows = [
            [0, 1], // name, lastName  
            [2, 3], // phone, email
            [4],    // contactPreference
            [5],    // product
        ];

        // Agregar campos condicionales solo si deben mostrarse
        if (shouldShowConditionalField('danios')) {
            rows.push([6]); // danios
        }
        if (shouldShowConditionalField('accidentes-personales')) {
            rows.push([7]); // accidentes-personales
        }
        if (shouldShowConditionalField('finanzas')) {
            rows.push([8]); // finanzas
        }

        // Continuar con el resto de campos
        rows.push(
            [9, 10], // ubication, position
            [11],    // company
            [12, 13] // collaborators, industry
        );

        return rows;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setHasError(false);
        const errors: { [key: string]: string } = {};
        formFields.forEach(field => {
            if (field.required && shouldShowConditionalField(field.id)) {
                const value = formData[field.id as keyof FormData];
                if (
                    (Array.isArray(value) && value.length === 0) ||
                    (!Array.isArray(value) && !value)
                ) {
                    errors[field.id] = messages.form?.requiredField
                        ? messages.form.requiredField
                        : 'Este campo es obligatorio';
                }
            }
        });
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            setIsSubmitting(false);
            return;
        }
        setFieldErrors({});
        const req = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const res = await req.json();
        if (res.success) {
            setIsSubmitting(false);
            router.push('/thank-you');
        } else {
            setHasError(true);
        }
    };

    return (
        <motion.div
            className="relative bg-cover bg-center bg-metropoliBg"
            style={{ backgroundImage: 'url(/waves.png)', minHeight: '100vh' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        >
            <div className="container md:pt-40 pt-20 mx-auto px-4 py-8 md:py-16">
                <div className="max-w-[800px] mx-auto">
                    <motion.h1
                        className="text-[32px] md:text-[40px] font-normal leading-[48px] bg-gradient-to-r from-[#091934] to-[#1C6EF6] bg-clip-text text-transparent"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        {messages.contactFormTitle}
                    </motion.h1>
                    <motion.p
                        className="text-[#666] mb-8 md:mb-12 text-base md:text-lg max-w-[600px] whitespace-pre-line"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        {messages.contactFormDescription}
                    </motion.p>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        {/* Form rows with staggered animations */}
                        {generateFormRows().map((row, rowIndex) => (
                            <motion.div
                                key={rowIndex}

                                className={`grid ${row.length === 2 ? 'md:grid-cols-2' : ''} gap-6`}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: rowIndex * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                {row.map((fieldIndex) => {
                                    const field = formFields[fieldIndex];
                                    // Solo renderizar el campo si debe mostrarse
                                    if (!shouldShowConditionalField(field.id)) {
                                        return null;
                                    }
                                    return (
                                        <FormInput
                                            key={fieldIndex}
                                            {...field}
                                            value={formData[field.id as keyof FormData]}
                                            onChange={handleChange}
                                            error={fieldErrors[field.id]}
                                        />
                                    );
                                })}
                            </motion.div>
                        ))}

                        <motion.div
                            className="pt-4 flex justify-center"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{
                                duration: 0.5,
                                delay: 0.6,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            {!hasError ? (
                                <motion.button
                                    className="rounded-md px-5 py-3 text-lg font-bold text-white shadow-sm focus:outline-none"
                                    style={{
                                        background: 'linear-gradient(90deg, #1E2D49 0%, #112039 25.5%, rgba(25, 57, 113, 0.99299) 78.5%, rgba(14, 80, 187, 0.98) 100%)',
                                        border: '0.5px solid',
                                        borderImageSource: 'linear-gradient(90deg, #99C0FF 0%, #1C6EF6 100%)',
                                        boxShadow: '0px 4px 4px 0px #00000040 inset',
                                        width: '270px',
                                        textAlign: 'center',
                                        borderRadius: '10px'
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? messages.contactFormSending : messages.contactFormSend}
                                </motion.button>
                            ) : (
                                <motion.button
                                    className="rounded-md px-5 py-3 text-lg font-bold text-white shadow-sm focus:outline-none"
                                    style={{
                                        background: 'linear-gradient(90deg, #1E2D49 0%, #112039 25.5%, rgba(25, 57, 113, 0.99299) 78.5%, rgba(14, 80, 187, 0.98) 100%)',
                                        border: '0.5px solid',
                                        borderImageSource: 'linear-gradient(90deg, #99C0FF 0%, #1C6EF6 100%)',
                                        boxShadow: '0px 4px 4px 0px #00000040 inset',
                                        width: '270px',
                                        textAlign: 'center',
                                        borderRadius: '10px'
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                >
                                    {messages.contactFormError}
                                </motion.button>
                            )}
                        </motion.div>
                    </motion.form>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactForm;