import React from 'react';
import ContactForm from './ContactForm';
import Layout from './Layout';  
import Footer from './Footer';

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact-container">
        <h1 className="contact-word">CONTACT ME</h1>
        <div className="contact-box">
        <ContactForm />
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default ContactPage;
