import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Footer from '@sections/Footer';
import Photos from '@sections/Photos';
import Festa from '@sections/Festa';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Photos />
    <Festa />
    <Footer />
  </Layout>
);

export default IndexPage;
