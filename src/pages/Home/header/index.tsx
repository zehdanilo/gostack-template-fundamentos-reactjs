import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiShoppingCart,
  FiArrowRight,
  FiFileText,
  FiFolderPlus,
  FiUserMinus,
  FiUser,
  FiAward,
} from 'react-icons/fi';

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
  Notation,
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
            <Service>
              <FiFileText size={48} color="#30b78e" />
              <h1>Certidões</h1>
              <ul>
                <li>Certidão de Nascimento</li>
                <li>Certidão de Casamento</li>
                <li>Certidão de Óbito</li>
                <li>Certidão de Protesto</li>
                <li>Certidão de Imóvel</li>
                <li>Certidão Negativa</li>
              </ul>
            </Service>

            <Service>
              <FiAward size={48} color="#30b78e" />
              <h1>Procurações</h1>
              <ul>
                <li>Procuração Busca</li>
                <li>Procuração 2a Via</li>
              </ul>
            </Service>

            <Service>
              <FiUser size={48} color="#30b78e" />
              <h1>Cidadania</h1>
              <ul>
                <li>Cidadania Portuguesa</li>
                <li>Cidadania Italiana</li>
              </ul>
            </Service>

            <Service>
              <FiUserMinus size={48} color="#30b78e" />
              <h1>Divórcio</h1>
              <ul>
                <li>Divórcio em Cartório</li>
                <li>Divórcio Busca</li>
              </ul>
            </Service>

            <Service>
              <FiFolderPlus size={48} color="#30b78e" />
              <h1>Inventário</h1>
              <ul>
                <li>Inventário em Cartório</li>
              </ul>
            </Service>
          </Services>
        </Banner>

        <Notation>
          <h4>
            Não encontrou seu documento, entre em contato com a gente via
            <a href="#" target="_blank">
              &nbsp;Email&nbsp;
            </a>
            ou
            <a href="#" target="_blank">
              &nbsp;WhatsApp&nbsp;
            </a>
          </h4>

          <span>
            Todos os serviços
            <FiArrowRight size={16} />
          </span>
        </Notation>
      </Container>
    </>
  );
};

export default Header;
