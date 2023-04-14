import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
  margin-bottom: 30px;
  justify-content: space-between;

  > button {
    background-color: ${colors.territory};
    color: ${colors.white};
  }
`;