import styled from 'styled-components';
import { primaryColor, secundaryColor } from '../../config/colors';
import { OrganizarImagens } from '../../assets/index';

export const RegisterWrapper = styled.div`
  width: 85%;
  height: 85%;
  background-color: #fff;
  border-radius: 1em;
  border: 0.5em solid #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const RegisterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterFormWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 1em;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  h1 {
    font-size: 3em;
    text-align: center;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  p {
    text-align: start;
  }

  p span {
    color: ${secundaryColor};
  }
`;

export const RegisterImage = styled.div`
  background-image: url(${OrganizarImagens.ImageRegister});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 50%;
  height: 100%;
  background-color: ${primaryColor};
  border-radius: 1em;
`;
