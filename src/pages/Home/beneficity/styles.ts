import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 628px;

  h1 {
    display: flex;
    justify-content: space-around;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  ul {
    height: 100%;
    display: flex;
    justify-content: center;
    list-style-type: none;
  }

  li {
  }
`;
