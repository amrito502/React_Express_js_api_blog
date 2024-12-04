import React from 'react';
import Layout from '../layout/Layout';
import ShortBanner from '../components/ShortBanner';
import Service from '../components/Service';

function ServicePage() {
  return (
    <Layout>
      <ShortBanner name="My Services" title="more services!"/>
      <Service/>
    </Layout>
  );
}

export default ServicePage;
