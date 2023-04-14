import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 1064px;  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 70px;

  @media screen and (max-width: 600px) {
    width: 100%;
    grid-template-columns: 1fr  ;
    padding: 0 30px;
    grid-gap: 36px 143px;

  }

  @media screen and (min-device-width: 601px)
  and (max-device-width: 1135px) {
    width: 100%;
    grid-template-columns: 1fr 1fr ;
    padding: 0 30px;
    grid-gap: 16px;
  }
`;
