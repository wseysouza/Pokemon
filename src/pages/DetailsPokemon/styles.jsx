import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  margin-top: 70px;
  margin-bottom: 70px;
  box-shadow: 1px 1px 28px #888888;
  align-items: center;

  @media screen and (max-width: 750px) {
    width: 100%;
    flex-direction: column;
  }
  > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const WrapperImage = styled.img`
  height: 200px;
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 30px;
  justify-content: center;

  @media screen and (max-width: 600px) {
    margin-top: 30px;
    margin-left: 10px;
    width: 100%;
    flex-direction: column;
  }

`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 22px;
  margin-right: 10px;
`;

export const Description = styled.p`
  margin-right: 10px;
`;

export const RowDesc = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1025px) {
    margin-top: 15px;
    margin-left: 10px;
    width: 100%;
    flex-direction: column;
  }
`;