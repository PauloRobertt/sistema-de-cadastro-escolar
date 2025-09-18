import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import * as actions from '../../store/modules/auth/actions';
import axios from '../../service/axios';

//Styled-Components
import { TableAlunos, HeaderContainer } from './styled';

//Estilos
import { Container, ContainerConteudo } from '../../styles/GlobalStyles';
import { ErrorColor, primaryColor } from '../../config/colors';

//Componentes
import Menu from '../../layouts/Menu/input';
import SubmitButton from '../../components/SubmitButton';
import EditAlunoModal from '../../components/EditAlunoModal';
import AddAlunoModal from '../../components/AddAlunoModal';

//Icons
import { FaUserCircle } from 'react-icons/fa';
import { IoIosAdd } from 'react-icons/io';
import { FaUserMinus } from 'react-icons/fa';
import { FaUserEdit } from 'react-icons/fa';

export default function AlunosPage() {
  const [alunos, setAlunos] = useState([]);
  const [aluno, setAluno] = useState({});
  const [showAddAluno, setShowAddAluno] = useState(false);
  const [showEditAluno, setShowEditAluno] = useState(false);

  console.log(alunos);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usuarioLogado = () => {
    toast.success('Usuario logado!', {
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
  };

  useEffect(() => {
    if (location.state?.usuarioLogadoToast) {
      usuarioLogado();
      navigate('.', { replace: true, state: {} });
    }
  }, [location.state]);

  async function getAlunos() {
    try {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAlunos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/alunos/${id}`);
      toast.success('Aluno deletado com sucesso!', {
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
      getAlunos();
    } catch (error) {
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

  const getAluno = async (id) => {
    try {
      if (!id) {
        showAddAluno ? setShowAddAluno(false) : setShowAddAluno(true);
      } else {
        showEditAluno ? setShowEditAluno(false) : setShowEditAluno(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setAluno(data);
      }
    } catch (error) {
      console.log(error);
      if (error.status === 401) dispatch(actions.loginError());
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
            <AddAlunoModal
              getAlunos={getAlunos}
              getAluno={getAluno}
              showForm={showAddAluno}
            />
            <EditAlunoModal
              getAlunos={getAlunos}
              getAluno={getAluno}
              dadosAluno={aluno}
              showForm={showEditAluno}
            />

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
            <AddAlunoModal getAluno={getAluno} showForm={showAddAluno} />

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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Container>
  );
}
