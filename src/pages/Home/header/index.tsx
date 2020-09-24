import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';

import {
  Container,
  Banner,
  Top,
  Navigation,
  NavItem,
  Cart,
  FollowOrder,
  Apresentation,
  Services,
  Service,
} from './styles';

import Logo from '../../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Banner>
          <Top>
            <img src={Logo} alt="Cartório Mix" />

            <Navigation>
              <NavItem to="/">Sobre</NavItem>
              <NavItem to="/">Serviços</NavItem>
              <NavItem to="/">Beneficios</NavItem>
              <NavItem to="/">Contato</NavItem>
            </Navigation>

            <Cart to="/">
              <FiShoppingCart size={16} />
              <span>Itens</span>
            </Cart>

            <FollowOrder>
              <Link to="/">
                Acompanhe seu pedido
                <FiArrowRight size={18} />
              </Link>
            </FollowOrder>
          </Top>

          <Apresentation>
            <h1>Seu Cartório</h1>
            <h2>Agora é digital</h2>
          </Apresentation>

          <Services>
            <Service> </Service>
            <Service> </Service>
            <Service> </Service>
            <Service> </Service>
            <Service> </Service>
          </Services>
        </Banner>
      </Container>
    </>
  );
};

export default Header;
