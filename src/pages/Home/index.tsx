import React, { useState, useEffect } from 'react';

import Header from './header';
import Beneficity from './beneficity';
import About from './about';
import Contact from './contact';
import Footer from './footer';

import { Payment } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <Beneficity />

      <About />

      <Contact />

      <Footer />

      <Payment />
    </>
  );
};

export default Home;
