import styled from 'styled-components';
import { primaryColor } from '../../config/colors';
import { OrganizarImagens } from '../../assets';

export const ContainerPage404 = styled.div`
  width: 85%;
  height: 85%;
  background-color: #ffff;
  padding: 0.5em;
  border: 0.5em solid ${primaryColor};
  border-radius: 1em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const ContentPage404 = styled.div`
  color: ${primaryColor};
  font-weight: bold;
  width: auto;
  height: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1em;

  h1 {
    font-size: 15em;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
    text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  }

  h2 {
    font-size: 2em;
  }
`;

export const Image404 = styled.div`
  background-image: url(${OrganizarImagens.Image404});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 50%;
  height: 100%;
  border-radius: 1em;
`;
