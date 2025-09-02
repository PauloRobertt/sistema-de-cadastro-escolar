import styled from 'styled-components';
import { ErrorColor, DarkErrorColor } from '../../config/colors';

export const ContainerUsuario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .headerForm {
    display: flex;
    justify-content: space-between;
  }

  .headerForm div {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  label {
    display: flex;
    gap: 0.5em;
    justify-content: flex-start;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

export const DadosUsuario = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2em;
`;

export const ButtonDeleteUser = styled.button`
  background-color: ${ErrorColor};
  border: none;
  padding: 1em;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  color: #ffff;
  font-size: 1em;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: background-color 500ms ease;

  &:hover {
    background-color: ${DarkErrorColor};
    color: #ffff;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const ContainerDeleteUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 1em;
  border: 1px solid ${ErrorColor};
  padding: 1em;

  h2 {
    display: flex;
    gap: 0.2em;
    justify-content: flex-start;
    align-items: center;
    color: ${ErrorColor};
  }

  button {
    width: 200px;
  }
`;
