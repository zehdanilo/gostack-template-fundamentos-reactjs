import { Link } from 'react-scroll';
import { shade } from 'polished';
import styled from 'styled-components';

import BannerImage from '../../../assets/banner_header.svg';

export const Container = styled.div`
  height: 774px;
  background: #eaf2f1;
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  height: 480px;
  background: url(${BannerImage}), #043c35;
  background-repeat: no-repeat;
  background-size: cover;

  img {
    padding-top: 60px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-left: 8%;
`;

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 8%;

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
  height: 395px;
  justify-content: center;
  padding-top: 40px;
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
  padding: 24px 0px 0px 32px;

  h1 {
    margin-top: 20px;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #495057;
  }

  ul {
    margin-top: 20px;
    list-style-type: none;
    padding-bottom: 24px;
    color: #6c757c;
    font-size: 14px;

    li {
      padding: 8px 0px 8px;
    }
  }
`;

export const Notation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: #6c757c;
  justify-content: space-around;
  margin: 250px 0px;
  font-size: 14px;

  a {
    color: #30b78e;
  }

  span {
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    svg {
      margin: -4px 5px;
      color: #30b78e;
    }
  }
`;
