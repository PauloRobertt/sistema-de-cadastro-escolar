import styled from 'styled-components';
import { textColor } from '../../config/colors';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableAlunos = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  tr {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1em;
    border-bottom: 1px solid #eee;
  }

  tr:hover {
    background-color: #f7f7f7ff;
  }

  table h3 {
    text-align: center;
  }

  th,
  td {
    text-align: left;
  }

  #pictureProfile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3em;
  }

  td#pictureProfile {
    border-radius: 1em;
    font-size: 1.5em;
    width: 2em;
    height: 2em;
  }

  #pictureProfile img {
    border-radius: 1em;
    width: 100%;
    height: 100%;
  }

  #name {
    width: 10em;
  }

  #email {
    width: 20em;
  }

  #age {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3em;
  }

  #op {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3em;
  }

  td#op div {
    font-size: 1.3em;
    width: auto;
    cursor: pointer;
  }

  td#op {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  td#op div:last-of-type:hover {
    transition: 300ms color;
    color: red;
  }
`;

export const ContainerNewAluno = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: ${({ showAddAluno }) => (showAddAluno ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;

  .headerForm {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
  }

  .headerForm p {
    color: ${textColor};
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 500px;
    height: 580px;
    border-radius: 1em;
    padding: 10px;
    background-color: #f4f4f4;
  }

  .formAluno {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    width: 100%;
    height: 90%;
    background-color: white;
    padding: 20px;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
  }

  .formAluno .containerButtons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;
  }

  .formAluno .containerButtons .buttonCancel {
    border: 1px solid ${textColor};
    padding: 0.8em 1em;
    border-radius: 0.5em;
    background-color: white;
    font-size: 1em;
    transition: background-color 300ms ease-in-out;
  }

  .formAluno .containerButtons .buttonCancel:hover {
    background-color: #ecececff;
  }
`;

export const ContainerAluno = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;

  .container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 500px;
    height: 580px;
    border-radius: 1em;
    padding: 10px;
    background-color: #f4f4f4;
  }

  .conteudo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1em;

    width: 100%;
    height: 90%;
    background-color: white;
    padding: 20px;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    position: relative;
  }

  .conteudo p {
    color: ${textColor};
  }

  .conteudo .containerButtons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;
  }

  .conteudo .containerButtons .buttonCancel {
    border: 1px solid ${textColor};
    padding: 0.8em 1em;
    border-radius: 0.5em;
    background-color: white;
    font-size: 1em;
    transition: background-color 300ms ease-in-out;
  }

  .conteudo .containerButtons .buttonCancel:hover {
    background-color: #ecececff;
  }

  .containerInputs {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
  }

  .Foto {
    border-radius: 5em;
    border: 5px solid #dbdbdbff;
    width: 80px;
    height: 80px;
    position: absolute;
    top: -40px;
    left: 20px;
  }

  .Nome {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin-top: 35px;
  }
`;

export const ContainerInput = styled.div`
  border-top: 1px solid #eee;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .inputs {
    display: flex;
    gap: 0.5em;
    width: 70%;
  }
`;
