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
  background-color: white;
  border-radius: 1em;
  padding: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5em;
  height: 80px;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    p {
      font-weight: bold;
    }
  }
`;

export const ContainerDicasDoSistema = styled.div`
  width: 100%;
  border: 1px solid #eee;
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  background-color: white;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5em;

  li {
    margin: 0.5em;
  }
`;

export const ContainerAtalhos = styled.div`
  width: 100%;
  border: 1px solid #eee;
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;

  background-color: white;
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

export const ContainerHomeNaoLogado = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  background-color: #ffff;
  width: 100%;
  height: 100%;
  border-radius: 1em;

  p {
    color: ${colors.textColor};
  }

  .banner {
    border-radius: 1em;
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.5em;

    h1 {
      span {
        color: ${colors.primaryColor};
      }
      font-size: 4em;
      width: 900px;
    }

    p {
      width: 500px;
      font-size: 1.2em;
    }
  }

  .conteudoBanner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1em;
    width: 100%;
    height: 100%;
  }

  .figureBanner {
    width: 100%;
    height: 100%;
  }

  .figureBanner img {
    width: 100%;
    height: 100%;
  }

  .buttonAcessarSistema {
    width: 200px;
    height: 50px;
  }

  .cardFuncionalidade {
    border: 2px solid #eee;
    background-color: white;
    border-radius: 0.5em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    width: 300px;
    height: 200px;
  }

  .cardFuncionalidade:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  }

  .containerCards {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  .containerFuncionalidades {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding: 1em;
  }
`;
