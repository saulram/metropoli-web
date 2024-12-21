'use client'
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/footer';
import Navigation from '@/components/Navigation';
import React from 'react';
const ContactPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* App Bar */}
            <Navigation />
            {/* Main Content */}
            
            <ContactForm />
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ContactPage;
