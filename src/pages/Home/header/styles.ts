import { Link } from 'react-scroll';
import { shade } from 'polished';
import styled from 'styled-components';

import BannerImage from '../../../assets/banner_header.svg';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 774px;
  background: #eaf2f1;
`;

export const Banner = styled.div`
  height: 480px;
  background: url(${BannerImage}), #043c35;
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: 125px;
  img {
    padding-top: 60px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-weight: 300;
    font-size: 48px;
    line-height: 48px;

    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;
    text-transform: uppercase;

    color: #30b78e;

    align-self: flex-start;
    flex-grow: 0;
    margin: 0px 8px;
  }

  h2 {
    font-weight: bold;
    font-size: 48px;
    line-height: 48px;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

export const Navigation = styled.nav`
  margin: 90px auto;
`;

export const NavItem = styled(Link)`
  color: #fff;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin: 0 20px 0 40px;
  cursor: pointer;
`;

export const Cart = styled(Link)`
  max-width: 177px;

  color: #fff;
  margin: 90px auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  cursor: pointer;

  span {
    text-transform: uppercase;
    margin-left: 20px;
  }
`;

export const FollowOrder = styled.div`
  width: 255px;
  height: 40px;
  background: #30b78e;
  border-radius: 100px;
  border: 0;
  transition: background-color 0.2s;
  margin: 70px auto 0 0;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;

    svg {
      margin: -3px 8px;
    }
  }

  &:hover {
    background: ${shade(0.2, '#30b78f')};
  }
`;

export const Services = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 1176px;
  height: 395px;
  margin: 40px auto;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: static;
  width: 221px;
  height: 342px;

  background: #ffffff;
  box-shadow: 0px 16px 12px -4px rgba(0, 0, 0, 0.08);
  border-radius: 4px;

  margin-left: 24px;
`;
