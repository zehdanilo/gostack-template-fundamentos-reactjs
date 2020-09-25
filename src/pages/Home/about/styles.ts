import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  height: 529px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    max-width: 45%;
    flex: 1;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 70px 180px;

  width: 484px;

  h1 {
    font-size: 32px;
    line-height: 40px;
    font-weight: bold;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #043c35;

    margin: 0px 24px;
  }
  span {
    font-size: 16px;
    line-height: 24px;
    color: #6c757c;
    margin: 0px 24px;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 80px auto;
  width: 542px;
  justify-content: space-between;
`;

export const Contact = styled.div`
  svg {
    margin: -3px 5px;
    color: #30b78e;
  }
`;
