import React from 'react';

import { FiMail, FiPhone, FiInstagram } from 'react-icons/fi';
import { Container, Text, Contacts, Contact } from './styles';

import Parede from '../../../assets/parede_about.png';

const About: React.FC = () => {
  return (
    <>
      <Container>
        <Text>
          <h1>A Solução para os cartorios de todo Brasil</h1>
          <span>
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like). Various
            versions have evolved over the year.
          </span>

          <Contacts>
            <Contact>
              <FiMail size={16} />
              contato@cartoriomix.com.br
            </Contact>

            <Contact>
              <FiPhone size={16} />
              +55 84 99116-1258
            </Contact>

            <Contact>
              <FiInstagram size={16} />
              @cartoriomix
            </Contact>
          </Contacts>
        </Text>

        <img src={Parede} alt="Cartório Mix" />
      </Container>
    </>
  );
};

export default About;
