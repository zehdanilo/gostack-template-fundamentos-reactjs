import React from 'react';

import { Container, Cards } from './styles';

const Beneficity: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Beneficios do seu CartórioMIX</h1>

        <Cards>
          <ul>
            <li>
              <img src="#" />
              <h1>Maior Seguranca</h1>
              <span>Lorem Ipsum</span>
            </li>
            <li>
              <img src="#" />
              <h1>Mais Rapidez</h1>
              <span>Lorem Ipsum</span>
            </li>

            <li>
              <img src="#" />
              <h1>Mais Rapidez</h1>
              <span>Lorem Ipsum</span>
            </li>
          </ul>
        </Cards>
      </Container>
    </>
  );
};

export default Beneficity;
