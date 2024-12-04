import React from 'react';
import Layout from '../layout/Layout';
import ShortBanner from '../components/ShortBanner';
import BlogComp from '../components/BlogComp';
function BlogPage() {
  return (
   <Layout>
    <ShortBanner name="My Blogs" title="more blogs!"/>
    <BlogComp/>
   </Layout>
  );
}

export default BlogPage;
