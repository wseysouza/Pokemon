import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.button`
background-color: ${colors.territory};
  position: absolute;
  top: 40px;
  border-radius: 50px;
  padding: 18px 9px;
  box-shadow: 1px 1px 28px #888888;

  font-size: 14px;
  font-weight: 800;
  color: ${colors.silverChalice};

  @media screen and (max-width: 750px) {
      left: 45px;
  }
`;