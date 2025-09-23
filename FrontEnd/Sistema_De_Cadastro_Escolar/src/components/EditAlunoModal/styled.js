import styled from 'styled-components';
import * as colors from '../../config/colors';

export const ContainerEditAluno = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ showEditAluno }) => (showEditAluno ? 'flex' : 'none')};
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

  .containerContent {
    position: relative;
    background-color: white;
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
  }

  .formAluno {
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .formAluno p {
    color: ${colors.textColor};
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

  .containerInputs {
    display: flex;
    flex-direction: column;
  }

  .containerFoto {
    position: absolute;
    top: -40px;
    left: 20px;
    display: flex;
    align-items: flex-end;
  }

  .Foto {
    box-shadow: rgba(0, 0, 0, 1) 0px 0px 5px;
    border-radius: 5em;
    background-color: white;
    padding: 1px;
    width: 80px;
    height: 80px;
  }

  .Foto .profile {
    width: 100%;
    height: 100%;
    border-radius: 5em;
  }

  .DadosUsuario {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin-top: 60px;
    margin-left: 20px;
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

export const UploadPhotoModal = styled.div`
  display: ${({ showUploadPhoto }) => (showUploadPhoto ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
  background-color: white;
  border: 10px solid #eee;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-570px, -280px);
  width: 300px;
  height: 330px;
  border-radius: 1em;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }

  label {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    border: 5px dashed ${colors.primaryColor};
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  #foto {
    display: none;
  }
`;
