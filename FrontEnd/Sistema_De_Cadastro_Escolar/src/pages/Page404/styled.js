import styled from 'styled-components';
import { backgroundColor } from '../../config/colors';
import { primaryColor } from '../../config/colors';

export const Background = styled.div`
  background-color: ${backgroundColor};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerPage404 = styled.div`
  background-color: #ffff;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2em;
  gap: 1em;
  border: 0.3em solid ${primaryColor};

  h1 {
    font-size: 10em;
  }

  h1 span {
    color: ${primaryColor};
  }
`;
