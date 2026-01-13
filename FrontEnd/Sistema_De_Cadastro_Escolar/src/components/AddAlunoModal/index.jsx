import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import axios from '../../service/axios';
import * as actions from '../../store/modules/auth/actions';
import { ErrorColor, primaryColor } from '../../config/colors';

//Styled-Components
import { ContainerNewAluno, ContainerInput } from './styled';

//Componentes
import SubmitButton from '../../components/SubmitButton';
import Input from '../../components/Input/input';

export default function AddAlunoModal(props) {
  const [aluno, setAluno] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    addAluno(aluno);
  };

  const handleOnChange = (e) => {
    setAluno({ ...aluno, [e.target.id]: e.target.value });
  };

  const addAluno = async (aluno) => {
    try {
      await axios.post('/alunos/', aluno);
      toast.success('Aluno cadastrado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        style: { backgroundColor: primaryColor },
      });
      props.getAluno() + setAluno({});
      props.getAlunos();
    } catch (error) {
      console.log(error);
      error.response.data.errors.map((erro) => {
        toast.error(erro, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          style: { backgroundColor: ErrorColor },
        });
      });
      if (error.status === 401) dispatch(actions.loginError());
    }
  };

  return (
    <ContainerNewAluno showAddAluno={props.showForm}>
      <div className="container">
        <div className="containerContent">
          <div className="headerForm">
            <h1>Adicionar Aluno</h1>
            <p>
              Preencha os dados do aluno para realizar o cadastro no sistema.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="formAluno">
            <div className="containerInputs">
              <ContainerInput>
                <label>Nome</label>
                <div className="inputs">
                  <Input
                    onChange={handleOnChange}
                    value={aluno.nome || ''}
                    id="nome"
                    type="text"
                    placeholder="Digite o nome do aluno"
                  />
                  <Input
                    onChange={handleOnChange}
                    value={aluno.sobrenome || ''}
                    id="sobrenome"
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
                    value={aluno.email || ''}
                    id="email"
                    type="email"
                    placeholder="Digite o e-mail do aluno ou responsavel"
                  />
                </div>
              </ContainerInput>
              <ContainerInput>
                <label>Idade</label>
                <div className="inputs">
                  <Input
                    onChange={handleOnChange}
                    value={aluno.idade || ''}
                    id="idade"
                    type="number"
                    minNumber={1}
                    maxNumber={120}
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
                  props.getAluno() + setAluno({});
                }}
              >
                Cancel
              </button>
              <SubmitButton
                text={'Cadastrar Aluno'}
                type={'submit'}
                variant={'secondary'}
              />
            </div>
          </form>
        </div>
      </div>
    </ContainerNewAluno>
  );
}
