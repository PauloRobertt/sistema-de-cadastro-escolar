import styled from 'styled-components';
import * as colors from '../../config/colors';

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1em;
  background-color: #ffff;
  margin-left: 18em;
  width: 100%;
  height: 100%;
  padding: 2em;
  border-radius: 1em;
  p {
    color: ${colors.textColor};
  }
`;

export const ContainerSaudacao = styled.div`
  p {
    color: ${colors.textColor};
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 2em;
  flex-wrap: wrap;
`;

export const Cards = styled.div`
  border: 1px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  border-radius: 1em;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;
  width: 300px;
`;

export const ContainerDicasDoSistema = styled.div`
  width: 100%;
  border: 1px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  border-radius: 1em;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5em;

  li {
    margin: 1em;
  }
`;

export const ContainerAtalhos = styled.div`
  width: 100%;
  border: 1px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  border-radius: 1em;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5em;

  div {
    width: 220px;
    height: 60px;
  }
`;
