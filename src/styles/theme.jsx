import { colors } from './colors';
import styled from 'styled-components';


export const globalTheme = {
  colors: {
    territory: colors.territory,
    background: colors.white
  },
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: fit-content;
  margin: 30px 50px 0;
`;

