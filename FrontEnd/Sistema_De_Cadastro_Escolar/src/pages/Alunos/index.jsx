import { useEffect, useState } from 'react';
import axios from '../../service/axios';

//Estilos
import {
  TableAlunos,
  HeaderContainer,
  ContainerNewAluno,
  ContainerInput,
} from './styled';
import { Container, ContainerConteudo } from '../../styles/GlobalStyles';

//Componentes
import Menu from '../../layouts/Menu/input';
import SubmitButton from '../../components/SubmitButton';
import Input from '../../components/Input/input';

//Icons
import { FaUserCircle } from 'react-icons/fa';
import { IoIosAdd } from 'react-icons/io';
import { FaUserMinus } from 'react-icons/fa';
import { FaUserEdit } from 'react-icons/fa';

export default function AlunosPage() {
  const [alunos, setAlunos] = useState([]);
  const [aluno, setAluno] = useState({});
  const [showAddAluno, setShowAddAluno] = useState(false);

  useEffect(() => {
    async function getAlunos() {
      try {
        const response = await axios.get('/alunos');
        setAlunos(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAlunos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!aluno.id) {
      await addAluno(aluno);
    }
  };

  const handleOnChange = (e) => {
    setAluno({ ...aluno, [e.target.id]: e.target.value });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/alunos/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const addAluno = async (aluno) => {
    try {
      await axios.post('/alunos/', aluno);
    } catch (error) {
      console.log(error);
    }
  };

  const getAluno = async (id) => {
    try {
      if (!id) {
        showAddAluno ? setShowAddAluno(false) : setShowAddAluno(true);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Menu />
      <ContainerConteudo>
        <HeaderContainer>
          <h1>Alunos</h1>
          <SubmitButton
            onClick={() => {
              getAluno();
            }}
            text={
              <>
                <IoIosAdd fontSize={'1.5em'} /> Adicionar novo aluno
              </>
            }
            type={'button'}
            variant={'secondary'}
          />
        </HeaderContainer>
        {alunos.length > 0 ? (
          <div>
            <ContainerNewAluno showAddAluno={showAddAluno}>
              <div className="container">
                <form onSubmit={handleSubmit} className="formAluno">
                  <div className="headerForm">
                    <h1>Adicionar Aluno</h1>
                    <p>Informe os dados do aluno abaixo:</p>
                  </div>
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
                        getAluno() + setAluno({});
                      }}
                    >
                      Cancel
                    </button>
                    <SubmitButton
                      text={'Criar Aluno'}
                      type={'submit'}
                      variant={'secondary'}
                    />
                  </div>
                </form>
              </div>
            </ContainerNewAluno>

            <TableAlunos>
              <thead>
                <tr>
                  <th id="pictureProfile">Foto</th>
                  <th id="name">Nome</th>
                  <th id="email">E-mail</th>
                  <th id="age">Idade</th>
                  <th id="op">Editar</th>
                  <th id="op">Excluir</th>
                </tr>
              </thead>
              <tbody>
                {alunos.map((aluno) => (
                  <tr key={String(aluno.id)}>
                    <td id="pictureProfile">
                      {aluno.Photos.length > 0 ? (
                        <img
                          crossOrigin="anonymous"
                          src={aluno.Photos[0].url}
                          alt="Foto de aluno"
                        />
                      ) : (
                        <FaUserCircle size={'2em'} />
                      )}
                    </td>
                    <td id="name">
                      {aluno.nome} {aluno.sobrenome}
                    </td>
                    <td id="email">{aluno.email}</td>
                    <td id="age">{aluno.idade}</td>
                    <td id="op">
                      <div className="editButton">
                        <FaUserEdit
                          onClick={() => {
                            getAluno(aluno.id);
                          }}
                        />
                      </div>
                    </td>
                    <td id="op">
                      <div className="deleteButton">
                        <FaUserMinus
                          onClick={() => {
                            handleDelete(aluno.id);
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableAlunos>
          </div>
        ) : (
          <div>
            <ContainerNewAluno showAddAluno={showAddAluno}>
              <div className="container">
                <form onSubmit={handleSubmit} className="formAluno">
                  <div className="headerForm">
                    <h1>Adicionar Aluno</h1>
                    <p>Informe os dados do aluno abaixo:</p>
                  </div>
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
                        showAddAluno
                          ? setShowAddAluno(false) + setAluno({})
                          : setShowAddAluno(true);
                      }}
                    >
                      Cancel
                    </button>
                    <SubmitButton
                      text={'Criar Aluno'}
                      type={'submit'}
                      variant={'secondary'}
                    />
                  </div>
                </form>
              </div>
            </ContainerNewAluno>

            <TableAlunos>
              <tbody>
                <tr>
                  <td>
                    <h3>Nenhum aluno encontrado!</h3>
                  </td>
                </tr>
              </tbody>
            </TableAlunos>
          </div>
        )}
      </ContainerConteudo>
    </Container>
  );
}
