"use client"
import { useState } from 'react';
import { FormInput } from './FormInput';
import { formFields } from '../app/contact-us/formFields';
import type { FormData } from '../app/contact-us/form';
import { motion } from 'motion/react';

const initialFormData: FormData = {
    name: '',
    email: '',
    phone: '',
    product: '',
    contactPreference: '',
    company: '',
    position: '',
    industry: '',
    collaborators: '',
    message: ''
};

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <motion.div
            className="relative bg-cover bg-center bg-metropoliBg"
            style={{ backgroundImage: 'url(/waves.png)', height: '100vh' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mt-14 mx-auto px-4 py-8 md:py-16">
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
                        Asegura tu tranquilidad
                    </motion.h1>
                    <motion.p
                        className="text-[#666] mb-8 md:mb-12 text-base md:text-lg max-w-[600px]"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        Queremos conocerte mejor para ofrecerte lo que necesitas.<br />
                        Cuéntanos un poco más sobre ti y descubre cómo podemos <br />
                        ayudarte a encontrar tu tranquilidad.
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
                        {[
                            [0, 1], // name, email
                            [2, 3], // phone, product
                            [4, 5], // contact preference, company
                            [6, 8], // position, collaborators
                            [7],    // industry
                            [9]     // message
                        ].map((row, rowIndex) => (
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
                                {row.map((fieldIndex) => (
                                    <FormInput
                                        key={fieldIndex}
                                        {...formFields[fieldIndex]}
                                        value={formData[formFields[fieldIndex].id as keyof FormData]}
                                        onChange={handleChange}
                                    />
                                ))}
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
                            >
                                {"Enviar"}
                            </motion.button>
                        </motion.div>
                    </motion.form>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactForm;