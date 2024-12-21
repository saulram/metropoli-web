'use client'
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/footer';
import Navigation from '@/components/Navigation';
import React from 'react';
const ContactPage: React.FC = () => {
    return (
        <div className="bg-white">
            <Navigation />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default ContactPage;
