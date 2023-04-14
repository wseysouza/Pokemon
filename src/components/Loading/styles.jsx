import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  border: 8px solid ${colors.territory};
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  } 
`;