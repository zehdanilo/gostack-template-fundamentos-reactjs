import React from 'react';

import { Container, Cards, Card, Title } from './styles';

import Digital from '../../../assets/digital.svg';
import Seguranca from '../../../assets/seguranca.svg';
import Velocidade from '../../../assets/velocidade.svg';

const Beneficity: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Beneficios do seu CartórioMIX</h1>

        <Cards>
          <Card>
            <img src={Seguranca} alt="Maior Segurança" />
            <Title>
              <h1>Maior</h1>
              <h2>Seguranca</h2>
            </Title>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </span>
          </Card>

          <Card>
            <img src={Velocidade} alt="Mais Rapidez" />
            <Title>
              <h1>Mais</h1>
              <h2>Rapidez</h2>
            </Title>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </span>
          </Card>

          <Card>
            <img src={Digital} alt="Tudo Digital" />
            <Title>
              <h1>Tudo</h1>
              <h2>Digital</h2>
            </Title>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </span>
          </Card>
        </Cards>
      </Container>
    </>
  );
};

export default Beneficity;
