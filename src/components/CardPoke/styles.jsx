import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  list-style: none;
  padding: 40px;
  background-color: ${colors.white};
  flex-direction: column;
  text-align: center;
  border-radius: 10px;

  &:hover {
    animation: bounce 0.5s linear;
  };

  > img {
    height: 170px;
    background-color: ${colors.white};
  };

  > button {
    margin-top: 10px;
    background-color: ${colors.white};
  }

  > p {
    color: ${colors.territory};
  }
  
  @keyframes bounce {
    20% {
        transform: translateY(-16px);
    }
    40% {
        transform: translateY(0px);
    }
    80% {
        transform: translateY(-8px);
    }
    100% {
        transform: translateY(0);
    }
  }
`;