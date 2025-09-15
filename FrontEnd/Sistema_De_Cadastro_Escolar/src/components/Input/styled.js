import styled from 'styled-components';
import { inputColor, inputTextColor } from '../../config/colors';

export const ContainerInput = styled.div`
  width: 100%;
  background-color: ${inputColor};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 5px;

  input {
    padding: 1em;
    border: none;
    border-radius: 0.5em;
    background-color: ${inputColor};
    width: 100%;
  }

  input::placeholder {
    color: ${inputTextColor};
  }
`;

export const InputButton = styled.button`
  background-color: ${inputColor};
  display: ${(props) => (props.showbutton === 'password' ? 'flex' : 'none')};
  border: none;
  font-size: 1em;
  padding: 0.5em;
  margin-right: 0.2em;
  justify-content: center;
  align-items: center;
`;
