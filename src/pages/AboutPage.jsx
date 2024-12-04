import React from 'react';
import Layout from '../layout/Layout';
import ShortBanner from '../components/ShortBanner';
import About from '../components/About';

function AboutPage() {
  return (
    <Layout>
      <ShortBanner name="about us" title="more about us!"/>
      <About/>
    </Layout>
  );
}

export default AboutPage;
