'use client'
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/footer';
import Navigation from '@/components/Navigation';
import React from 'react';
const ContactPage: React.FC = () => {
    return (
        <div style={
            {

                background: '#d1d7e1 url(/waves.png) center/cover no-repeat',
            }
        }>
            <Navigation />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default ContactPage;
