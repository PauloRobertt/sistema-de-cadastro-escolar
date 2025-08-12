import styled from 'styled-components';
import { inputColor, inputTextColor } from '../../config/colors';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  input {
    padding: 1em;
    border: none;
    border-radius: 0.5em;
    background-color: ${inputColor};
  }

  input::placeholder {
    color: ${inputTextColor};
  }
`;
