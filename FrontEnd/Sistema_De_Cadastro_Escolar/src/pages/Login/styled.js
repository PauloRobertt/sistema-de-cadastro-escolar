import styled from 'styled-components';
import { backgroundColor, primaryColor } from '../../config/colors';
import { OrganizarImagens } from '../../assets/index';

export const Background = styled.div`
  background-color: ${backgroundColor};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  width: 85%;
  height: 85%;
  background-color: ${primaryColor};
  border-radius: 1em;
  border: 1em solid #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;

export const LoginContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const LoginFormWrapper = styled.div`
  padding: 1em;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  h1 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  p {
    text-align: end;
  }
`;

export const LoginImage = styled.div`
  background-image: url(${OrganizarImagens.ImagemLogin});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 50%;
  height: 100%;
`;
