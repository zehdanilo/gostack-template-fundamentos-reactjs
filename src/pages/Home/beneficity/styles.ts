import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  height: 480px;

  h1 {
    display: flex;
    justify-content: center;

    font-size: 13px;
    line-height: 24px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-top: 98px;
    margin-bottom: 50px;
    color: #6c757c;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Card = styled.div`
  width: 300px;
  margin: 0px auto;

  span {
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
  }
`;

export const Title = styled.div`
  margin: 20px auto;
  text-transform: uppercase;

  h1 {
    justify-content: left;
    font-size: 32px;
    margin: 0px auto;
    color: #30b78e;
  }

  h2 {
    font-size: 32px;
    color: #043c35;
  }
`;
