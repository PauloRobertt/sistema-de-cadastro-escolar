import styled from 'styled-components';
import { inputColor, inputTextColor } from '../../config/colors';

export const ContainerInput = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1em;
  border: 2px solid #eee;

  &:focus-within {
    border: 2px solid #5a5a5aff;
  }

  input {
    padding: 1em;
    border: none;
    border-radius: 1em;
    background-color: white;
    width: 100%;
  }

  input::placeholder {
    color: ${inputTextColor};
  }
`;

export const InputButton = styled.button`
  background-color: white;
  display: ${(props) => (props.showbutton === 'password' ? 'flex' : 'none')};
  border: none;
  font-size: 1em;
  padding: 0.5em;
  border-radius: 1em;
  margin-right: 0.2em;
  justify-content: center;
  align-items: center;
`;
