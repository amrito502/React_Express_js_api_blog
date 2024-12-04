import React from 'react';
import Layout from '../layout/Layout';
import ShortBanner from '../components/ShortBanner';
import Contact from '../components/Contact';

function ContactPage() {
  return (
    <Layout>
      <ShortBanner name="Contact Me" title="Contact Here!"/>
      <Contact/>
      
    </Layout>
  );
}

export default ContactPage;
