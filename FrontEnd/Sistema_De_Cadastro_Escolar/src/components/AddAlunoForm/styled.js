import styled from 'styled-components';
import * as colors from '../../config/colors';

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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
  }

  .headerForm p {
    color: ${colors.textColor};
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

  .containerContent {
    background-color: white;
    width: 100%;
    height: 90%;
    gap: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    padding: 20px;
  }

  .formAluno {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    width: 100%;
    height: 100%;
    background-color: white;
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
    border: 1px solid ${colors.textColor};
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
