import { useState, useEffect } from 'react';

import axios from '../../service/axios';

//Estilos
import { ContainerEditAluno, ContainerInput } from './styled';

//Componentes
import SubmitButton from '../../components/SubmitButton';
import Input from '../../components/Input/input';

//Icons
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineEdit } from 'react-icons/md';

export default function EditAlunoModal(props) {
  const [aluno, setAluno] = useState(props.dadosAluno);
  console.log(aluno);

  useEffect(() => {
    setAluno(props.dadosAluno);
  }, [props.dadosAluno]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    addAluno(aluno);
  };

  const handleOnChange = (e) => {
    setAluno({ ...aluno, [e.target.id]: e.target.value });
  };

  const addAluno = async (aluno) => {
    try {
      await axios.put(`/alunos/${aluno.id}`, aluno);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerEditAluno showEditAluno={props.showForm}>
      <div className="container">
        <div className="containerContent">
          <div className="containerFoto">
            <div className="Foto">
              {!aluno.Photos ? (
                <FaUserCircle className="profile" size={'2em'} />
              ) : aluno.Photos.length > 0 ? (
                <img
                  className="profile"
                  crossOrigin="anonymous"
                  src={aluno.Photos[0].url}
                  alt="Foto de aluno"
                />
              ) : (
                <FaUserCircle className="profile" size={'2em'} />
              )}
            </div>
            <MdOutlineEdit cursor={'pointer'} size={'1.3em'} />
          </div>
          <div className="DadosUsuario">
            <h3>
              {aluno.nome} {aluno.sobrenome}
            </h3>
            <p>{aluno.email}</p>
          </div>
          <form onSubmit={handleSubmit} className="formAluno">
            <div className="containerInputs">
              <ContainerInput>
                <label>Nome</label>
                <div className="inputs">
                  <Input
                    onChange={handleOnChange}
                    id="nome"
                    type="text"
                    value={aluno.nome}
                    placeholder="Digite o nome do aluno"
                  />
                  <Input
                    onChange={handleOnChange}
                    id="sobrenome"
                    value={aluno.sobrenome}
                    type="text"
                    placeholder="Digite o sobrenome do aluno"
                  />
                </div>
              </ContainerInput>
              <ContainerInput>
                <label>E-mail</label>
                <div className="inputs">
                  <Input
                    onChange={handleOnChange}
                    id="email"
                    type="email"
                    value={aluno.email}
                    placeholder="Digite o e-mail do aluno ou responsavel"
                  />
                </div>
              </ContainerInput>
              <ContainerInput>
                <label>Idade</label>
                <div className="inputs">
                  <Input
                    onChange={handleOnChange}
                    id="idade"
                    type="number"
                    minNumber={1}
                    maxNumber={120}
                    value={aluno.idade}
                    placeholder="Digite a idade do aluno"
                  />
                </div>
              </ContainerInput>
            </div>
            <div className="containerButtons">
              <button
                className="buttonCancel"
                type="button"
                onClick={() => {
                  props.getAluno(aluno.id) + setAluno({});
                }}
              >
                Cancel
              </button>
              <SubmitButton
                text={'Salvar'}
                type={'submit'}
                variant={'secondary'}
              />
            </div>
          </form>
        </div>
      </div>
    </ContainerEditAluno>
  );
}
